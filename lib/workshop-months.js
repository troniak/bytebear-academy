// Month helpers shared by the workshop calendar and the card list, so the two
// always agree on which month a session falls in — the calendar pages the list,
// and a disagreement would show a month whose cards were somewhere else.
//
// Client-safe: no filesystem, unlike the rest of lib/workshops.js.

import { WORKSHOP_TIME_ZONE } from "@/data/workshop-config";

// Pinned to the workshop timezone so a late-afternoon session never lands on the
// wrong calendar square for a visitor (or server) in another zone.
const dayKeyFormat = new Intl.DateTimeFormat("en-CA", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  timeZone: WORKSHOP_TIME_ZONE,
});

// Month headings are built from plain integers via UTC, so no zone applies.
const monthLabelFormat = new Intl.DateTimeFormat("en-CA", {
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

const dayLabelFormat = new Intl.DateTimeFormat("en-CA", {
  weekday: "long",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
});

/** "2026-08-15" in the workshop timezone. */
export function dayKey(iso) {
  return dayKeyFormat.format(new Date(iso));
}

/** "2026-08" in the workshop timezone. */
export function monthKey(iso) {
  return dayKey(iso).slice(0, 7);
}

/** "2026-08" -> "August 2026". */
export function monthLabel(key) {
  const [year, month] = key.split("-").map(Number);
  return monthLabelFormat.format(new Date(Date.UTC(year, month - 1, 1)));
}

/**
 * Every month that actually holds a session, in order. These are the pages the
 * calendar steps through — no empty months to click past.
 */
export function sessionMonths(workshops) {
  return [...new Set(workshops.map((workshop) => monthKey(workshop.startsAt)))].sort();
}

/**
 * "2026-08-15" -> "Saturday, August 15". The key is already in the workshop
 * timezone, so it is read back as UTC rather than shifted a second time.
 */
export function dayLabel(key) {
  const [year, month, day] = key.split("-").map(Number);
  return dayLabelFormat.format(new Date(Date.UTC(year, month - 1, day)));
}

// Short forms for a week that runs "Sep 28 – Oct 4" as readily as "Sep 21 – 27".
const shortMonthFormat = new Intl.DateTimeFormat("en-CA", { month: "short", timeZone: "UTC" });

/** A day key shifted by whole days, e.g. shiftDay("2026-08-31", 1) -> "2026-09-01". */
export function shiftDay(key, days) {
  const [year, month, day] = key.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day + days));
  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0"),
  ].join("-");
}

/**
 * The Sunday that opens the week holding this day — the key for a week, and the
 * same Sunday the calendar grid starts its rows on.
 */
export function weekStart(key) {
  const [year, month, day] = key.split("-").map(Number);
  return shiftDay(key, -new Date(Date.UTC(year, month - 1, day)).getUTCDay());
}

/** True when a day falls in the week opening on this Sunday. Keys sort as dates. */
export function inWeek(key, start) {
  return key >= start && key <= shiftDay(start, 6);
}

/** "2026-09-21" -> "Sep 21 – 27", or "Sep 28 – Oct 4" across a month boundary. */
export function weekLabel(start) {
  const end = shiftDay(start, 6);
  const [, , startDay] = start.split("-");
  const [, , endDay] = end.split("-");
  const asDate = (key) => {
    const [year, month, day] = key.split("-").map(Number);
    return new Date(Date.UTC(year, month - 1, day));
  };

  const from = `${shortMonthFormat.format(asDate(start))} ${Number(startDay)}`;
  const to =
    start.slice(0, 7) === end.slice(0, 7)
      ? Number(endDay)
      : `${shortMonthFormat.format(asDate(end))} ${Number(endDay)}`;

  return `${from} – ${to}`;
}
