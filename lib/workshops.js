// Loads workshop sessions from workshops/sessions/*.md.
//
// Those files are the source of truth: frontmatter drives the site, the body
// is the parent-facing description to paste into Luma when creating the event.
//
// Server-only — this reads the filesystem. Client components must import
// constants from data/workshop-config.js instead.

import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

import { WORKSHOP_ACCENTS, WORKSHOP_STATUSES } from "@/data/workshop-config";

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

  // Required regardless of status — these define the workshop itself.
  for (const field of ["id", "unit", "title", "accent", "ages", "capacity", "status", "blurb"]) {
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

  // A draft is allowed to be half-finished; that is the whole point of the status.
  if (data.status !== "draft") {
    for (const field of ["lumaEventId", "lumaUrl", "startsAt", "location"]) {
      if (isPlaceholder(data[field])) {
        fail(
          file,
          `"${field}" is still a placeholder but status is "${data.status}". ` +
            `Fill it in, or set status: draft to keep this session off the site.`
        );
      }
    }
    if (Number.isNaN(new Date(data.startsAt).getTime())) {
      fail(file, `startsAt "${data.startsAt}" is not a valid ISO timestamp`);
    }
    if (!(data.durationHours > 0)) {
      fail(file, `durationHours must be a positive number`);
    }
    if (typeof data.isOnline !== "boolean") {
      fail(file, `isOnline must be true or false`);
    }
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

/**
 * Sessions the site should show: published, not yet finished, soonest first.
 * Cancelled sessions stay visible until their date passes so anyone who booked
 * sees that it is off.
 */
export function upcomingWorkshops(now = new Date()) {
  return allSessions()
    .filter((session) => session.status !== "draft")
    .filter((session) => new Date(session.startsAt) >= now)
    .sort((a, b) => new Date(a.startsAt) - new Date(b.startsAt));
}

/** schema.org/Event payload so sessions are eligible for event rich results. */
export function workshopJsonLd(list) {
  return list.map((workshop) => {
    const start = new Date(workshop.startsAt);
    const end = new Date(start.getTime() + workshop.durationHours * 60 * 60 * 1000);

    return {
      "@context": "https://schema.org",
      "@type": "Event",
      name: `${workshop.title} — ${workshop.unit}`,
      description: workshop.blurb,
      startDate: start.toISOString(),
      endDate: end.toISOString(),
      eventStatus:
        workshop.status === "cancelled"
          ? "https://schema.org/EventCancelled"
          : "https://schema.org/EventScheduled",
      eventAttendanceMode: workshop.isOnline
        ? "https://schema.org/OnlineEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode",
      location: workshop.isOnline
        ? { "@type": "VirtualLocation", url: workshop.lumaUrl }
        : { "@type": "Place", name: workshop.location, address: workshop.location },
      maximumAttendeeCapacity: workshop.capacity,
      url: workshop.lumaUrl,
      organizer: {
        "@type": "Organization",
        name: "ByteBear Academy",
        url: "https://bytebearacademy.com",
      },
    };
  });
}
