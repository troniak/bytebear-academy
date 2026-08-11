// Joins the live Bookwhen schedule to the copy in workshops/sessions/*.md.
//
// Bookwhen owns the facts that move — date, seats left, price, booking link.
// The .md files own the presentation: which unit a session belongs to, its
// accent colour, the age range and the one-line blurb. They are matched on
// `bookwhenEventId`.
//
// Server-only — this reads the filesystem. Client components must import
// constants from data/workshop-config.js instead.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { WORKSHOP_ACCENTS, WORKSHOP_STATUSES } from "@/data/workshop-config";
import { fetchBookwhenEvents } from "@/lib/bookwhen";

const SESSIONS_DIR = path.join(process.cwd(), "workshops", "sessions");

/** Anything still carrying a seeded placeholder value. */
function isPlaceholder(value) {
  return typeof value !== "string" || value.trim() === "" || /REPLACE-ME|^TBD$/i.test(value.trim());
}

function fail(file, message) {
  throw new Error(`workshops/sessions/${file}: ${message}`);
}

function parseSession(file, raw) {
  const { data, content } = matter(raw);

  // Required regardless of status — these define how the session is presented.
  for (const field of ["id", "unit", "title", "accent", "ages", "status", "blurb"]) {
    if (data[field] === undefined || data[field] === "") {
      fail(file, `missing required field "${field}"`);
    }
  }
  if (!WORKSHOP_STATUSES.includes(data.status)) {
    fail(file, `status "${data.status}" must be one of ${WORKSHOP_STATUSES.join(", ")}`);
  }
  if (!WORKSHOP_ACCENTS.includes(data.accent)) {
    fail(file, `accent "${data.accent}" must be one of ${WORKSHOP_ACCENTS.join(", ")}`);
  }
  if (data.isOnline !== undefined && typeof data.isOnline !== "boolean") {
    fail(file, `isOnline must be true or false when set`);
  }

  // A draft is allowed to be half-finished; that is the whole point of the
  // status. Anything else has to name a real Bookwhen event or it can never be
  // matched, and the file would quietly do nothing.
  if (data.status !== "draft" && isPlaceholder(data.bookwhenEventId)) {
    fail(
      file,
      `"bookwhenEventId" is still a placeholder but status is "${data.status}". ` +
        `Paste the Bookwhen event ID, or set status: draft to keep this session off the site.`
    );
  }

  return { ...data, description: content.trim(), sourceFile: file };
}

/** Every session file, drafts included. Throws on an invalid file. */
export function allSessions() {
  if (!fs.existsSync(SESSIONS_DIR)) return [];

  return fs
    .readdirSync(SESSIONS_DIR)
    // README.md documents this directory rather than describing a session.
    .filter((file) => file.endsWith(".md") && file !== "README.md")
    .sort()
    .map((file) => parseSession(file, fs.readFileSync(path.join(SESSIONS_DIR, file), "utf8")));
}

function sessionsByEventId() {
  const index = new Map();

  for (const session of allSessions()) {
    if (!isPlaceholder(session.bookwhenEventId)) {
      index.set(session.bookwhenEventId.trim(), session);
    }
  }

  return index;
}

/**
 * An event with no .md file still belongs on the site — it is bookable on
 * Bookwhen right now, so hiding it would advertise less than we actually sell.
 * It just renders plainer. Accent is picked from the ID so a given session
 * keeps the same colour between builds.
 */
function fallbackAccent(id) {
  let hash = 0;
  for (const character of id) {
    hash = (hash * 31 + character.charCodeAt(0)) % 100000;
  }
  return WORKSHOP_ACCENTS[hash % WORKSHOP_ACCENTS.length];
}

/** First sentence or so of a Bookwhen event's details, as a card blurb. */
function summarize(details) {
  const text = details
    .replace(/<[^>]*>/g, " ")
    .replace(/[*_#>`]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (text.length <= 180) return text;
  return `${text.slice(0, 180).replace(/\s+\S*$/, "")}…`;
}

/**
 * How a place is named in the location filter. The first line of a Bookwhen
 * address is the venue — "ByteBear Studio, 240 Queen St W, Toronto" filters as
 * "ByteBear Studio", which fits a chip where the full address would not.
 */
function venueLabel(address) {
  if (!address) return "In person";

  const [venue] = address.split(",");
  return venue.trim() || "In person";
}

function merge(event, session) {
  // A draft file is a deliberate hold: keep the session off the site even
  // though Bookwhen is already showing it.
  if (session?.status === "draft") return null;

  // A pinned location can still be an online session; let the file say so.
  const isOnline = session?.isOnline ?? event.isOnline;

  return {
    // Bookwhen owns anything that can change after the session is announced.
    bookwhenEventId: event.id,
    bookUrl: event.bookUrl,
    startsAt: event.startsAt,
    durationHours: event.durationHours,
    location: event.location,
    capacity: event.capacity,
    seatsLeft: event.seatsLeft,
    waitingList: event.waitingList,
    price: event.price,

    // The .md file owns the copy.
    id: session?.id ?? event.id,
    unit: session?.unit ?? null,
    title: session?.title ?? event.title,
    accent: session?.accent ?? fallbackAccent(event.id),
    ages: session?.ages ?? null,
    blurb: session?.blurb ?? summarize(event.details),
    status: session?.status ?? "scheduled",
    isOnline,

    // Sessions group by where they run, so a parent can hide the venues they
    // can't drive to. Online is one group however many addresses back it.
    locationKey: isOnline ? "online" : event.location,
    locationLabel: isOnline ? "Online" : venueLabel(event.location),
  };
}

/**
 * Sessions the site should show: on the Bookwhen schedule, not yet started,
 * soonest first. Sessions marked cancelled stay visible until their date passes
 * so anyone who booked sees that it is off.
 */
export async function upcomingWorkshops(now = new Date()) {
  const copy = sessionsByEventId();
  const events = await fetchBookwhenEvents();

  return events
    .filter((event) => new Date(event.startsAt) >= now)
    .map((event) => merge(event, copy.get(event.id)))
    .filter(Boolean);
}

/** schema.org/Event payload so sessions are eligible for event rich results. */
export function workshopJsonLd(list) {
  return list.map((workshop) => {
    const start = new Date(workshop.startsAt);
    const cancelled = workshop.status === "cancelled";

    const event = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: workshop.unit ? `${workshop.title} — ${workshop.unit}` : workshop.title,
      description: workshop.blurb,
      startDate: start.toISOString(),
      eventStatus: cancelled
        ? "https://schema.org/EventCancelled"
        : "https://schema.org/EventScheduled",
      eventAttendanceMode: workshop.isOnline
        ? "https://schema.org/OnlineEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode",
      location: workshop.isOnline
        ? { "@type": "VirtualLocation", url: workshop.bookUrl }
        : { "@type": "Place", name: workshop.location, address: workshop.location },
      url: workshop.bookUrl,
      organizer: {
        "@type": "Organization",
        name: "ByteBear Academy",
        url: "https://bytebearacademy.com",
      },
    };

    if (workshop.durationHours) {
      event.endDate = new Date(
        start.getTime() + workshop.durationHours * 60 * 60 * 1000
      ).toISOString();
    }
    if (workshop.capacity !== null) {
      event.maximumAttendeeCapacity = workshop.capacity;
      event.remainingAttendeeCapacity = workshop.seatsLeft;
    }
    if (workshop.price && !cancelled) {
      event.offers = {
        "@type": "Offer",
        price: workshop.price.amount,
        priceCurrency: workshop.price.currency,
        url: workshop.bookUrl,
        availability:
          workshop.seatsLeft === 0
            ? "https://schema.org/SoldOut"
            : "https://schema.org/InStock",
      };
    }

    return event;
  });
}
