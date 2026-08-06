// Reads the live schedule from Bookwhen (bookwhen.com/bytebear).
//
// Bookwhen is authoritative for everything that can change after a session is
// announced: the date, the seats left, the price and the booking link. The
// matching workshops/sessions/*.md file supplies the copy wrapped around it.
//
// Server-only — the API key is an account credential and must never reach the
// browser. The API is read-only (GET), so nothing here can alter a booking.

import { BOOKWHEN_PAGE_CODE } from "@/data/workshop-config";

const API_BASE = "https://api.bookwhen.com/v2";

// Matches the page's own revalidate window, so an hour of traffic costs one
// request rather than one per render.
const REVALIDATE_SECONDS = 3600;

// A stuck cursor would otherwise loop forever. Six pages is far more sessions
// than this schedule will ever hold.
const MAX_PAGES = 6;

function authorizationHeader() {
  const key = process.env.BOOKWHEN_API_KEY;
  if (!key) return null;

  // Basic auth with the key as the username and a blank password.
  return `Basic ${Buffer.from(`${key}:`).toString("base64")}`;
}

async function fetchPage(url, authorization) {
  const response = await fetch(url, {
    headers: { authorization, accept: "application/json" },
    next: { revalidate: REVALIDATE_SECONDS },
  });

  if (!response.ok) {
    throw new Error(
      response.status === 401
        ? "401 Unauthorized — check BOOKWHEN_API_KEY"
        : `${response.status} ${response.statusText} from ${url}`
    );
  }

  return response.json();
}

/**
 * Index the side-loaded resources by "type:id" so relationships can be
 * resolved. JSON:API puts these at the top level; Bookwhen's own schema also
 * documents a per-resource `included`, so read both.
 */
function indexIncluded(payload, index) {
  const resources = [
    ...(payload.included ?? []),
    ...(payload.data ?? []).flatMap((resource) => resource.included ?? []),
  ];

  for (const resource of resources) {
    index.set(`${resource.type}:${resource.id}`, resource);
  }
}

/** Side-loaded resources for one relationship, always as an array. */
function related(event, name, index) {
  const data = event.relationships?.[name]?.data;
  if (!data) return [];

  return (Array.isArray(data) ? data : [data])
    .map((ref) => index.get(`${ref.type}:${ref.id}`))
    .filter(Boolean);
}

/** "Buckingham Palace\nLondon\nSW1A 1AA" -> "Buckingham Palace, London, SW1A 1AA" */
function oneLineAddress(location) {
  const address = location?.attributes?.address_text;
  if (typeof address !== "string") return null;

  const parts = address
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return parts.length > 0 ? parts.join(", ") : null;
}

/**
 * The cheapest ticket a parent could pick right now. Shown as a "from" price
 * because a session can also carry sibling, group or course tickets.
 */
function fromPrice(tickets) {
  const costs = tickets
    // `available` is false while a ticket sits outside its on-sale window.
    .filter((ticket) => ticket.attributes?.available !== false)
    .map((ticket) => ticket.attributes?.cost)
    .filter((cost) => cost && typeof cost.net === "number");

  if (costs.length === 0) return null;

  const cheapest = costs.reduce((lowest, cost) => (cost.net < lowest.net ? cost : lowest));

  return {
    currency: cheapest.currency_code ?? "CAD",
    // Bookwhen states money in the currency's smallest unit — 1000 is $10.
    amount: (cheapest.net + (cheapest.tax ?? 0)) / 100,
  };
}

function normalizeEvent(event, index) {
  const attributes = event.attributes ?? {};
  const [location] = related(event, "location", index);
  const tickets = related(event, "tickets", index);

  const start = attributes.start_at ? new Date(attributes.start_at) : null;
  const end = attributes.end_at ? new Date(attributes.end_at) : null;

  // attendee_limit is null when the organiser set no cap, which is different
  // from a session with zero seats left — keep the two distinguishable.
  const capacity = typeof attributes.attendee_limit === "number" ? attributes.attendee_limit : null;
  const booked = typeof attributes.attendee_count === "number" ? attributes.attendee_count : 0;

  return {
    id: event.id,
    title: attributes.title ?? "",
    details: attributes.details ?? "",
    tags: attributes.tags ?? [],
    startsAt: start && !Number.isNaN(start.getTime()) ? start.toISOString() : null,
    durationHours: start && end && end > start ? (end - start) / 3_600_000 : null,
    allDay: attributes.all_day === true,
    capacity,
    seatsLeft: capacity === null ? null : Math.max(capacity - booked, 0),
    waitingList: attributes.waiting_list === true,
    location: oneLineAddress(location),
    // Bookwhen has no explicit online flag; an event with no location pinned is
    // one that has nowhere to show up to.
    isOnline: !location,
    price: fromPrice(tickets),
    bookUrl: `https://bookwhen.com/${BOOKWHEN_PAGE_CODE}/e/${event.id}`,
  };
}

/**
 * Every event Bookwhen will show publicly, soonest first.
 *
 * Returns [] rather than throwing when the key is missing or the API is
 * unreachable: a Bookwhen outage should leave the workshops section empty, not
 * take the whole homepage down with it.
 */
export async function fetchBookwhenEvents() {
  const authorization = authorizationHeader();
  if (!authorization) {
    console.error("Bookwhen: BOOKWHEN_API_KEY is not set — the workshops section will be empty.");
    return [];
  }

  // No filter[from]: the API already returns today onwards, which is exactly
  // the "upcoming" set the site shows.
  let url = `${API_BASE}/events?include=location,tickets`;
  const events = [];
  const index = new Map();

  try {
    for (let page = 0; page < MAX_PAGES && url; page += 1) {
      const payload = await fetchPage(url, authorization);
      events.push(...(payload.data ?? []));
      indexIncluded(payload, index);
      url = payload.links?.next ?? null;
    }
  } catch (error) {
    console.error(`Bookwhen: could not load the schedule — ${error.message}`);
    return [];
  }

  return events
    .map((event) => normalizeEvent(event, index))
    .filter((event) => event.startsAt)
    .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt));
}
