// Constants safe to import from client components.
// The session loader (lib/workshops.js) touches the filesystem and must not be
// imported into anything marked "use client".

export const WORKSHOP_TIME_ZONE = "America/Toronto";

// The Bookwhen schedule page: bookwhen.com/<page code>. Public, not a secret —
// the API key that reads it lives in BOOKWHEN_API_KEY.
export const BOOKWHEN_PAGE_CODE = "bytebear";

export const WORKSHOP_ACCENTS = ["teal", "purple", "blue", "orange"];

export const WORKSHOP_STATUSES = ["draft", "scheduled", "cancelled"];
