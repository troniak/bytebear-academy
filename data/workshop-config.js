// Constants safe to import from client components.
// The session loader (lib/workshops.js) touches the filesystem and must not be
// imported into anything marked "use client".

export const WORKSHOP_TIME_ZONE = "America/Toronto";

export const WORKSHOP_ACCENTS = ["teal", "purple", "blue", "orange"];

export const WORKSHOP_STATUSES = ["draft", "scheduled", "cancelled"];
