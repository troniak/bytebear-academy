# Workshop Sessions

The workshops section of the site is built from two sources, joined on `bookwhenEventId`:

- **[bookwhen.com/bytebear](https://bookwhen.com/bytebear)** is the source of truth for
  anything that moves — the date and time, the location, seats left, the price, and the
  booking link. The site reads it live through the
  [Bookwhen API](https://api.bookwhen.com/v2) on an hourly refresh, so a seat sold or a
  time changed shows up on the site without a deploy.
- **One `.md` file here per session** (this README aside) supplies the copy Bookwhen has
  nowhere to put: the unit label, the accent colour, the age range and the card blurb.
  The body is the parent-facing description to paste into the Bookwhen event.

That split is the point: you never type a date in two places.

## Creating a session

1. **Create the event in Bookwhen** — date, time, location, capacity, tickets and price.
   Paste the body of the matching `.md` file in as the event description.
2. **Copy the file** nearest to what you're running. Six drafts exist, one per unit of the
   [Computer Science & AI 8+](../Computer%20Science%20&%20AI%208+/README.md) sequence.
   Filenames and `id`s are date-stamped (`<unit-slug>-<YYYY-MM-DD>.md`) because a unit gets
   run more than once — each run is its own file with its own `id`. The date in the name is
   a label for you; the real date always comes from Bookwhen.
3. **Paste the Bookwhen event ID** into `bookwhenEventId`. It's the last part of the event's
   URL: `bookwhen.com/bytebear/e/ev-abcd-20260912100000`.
4. **Flip `status` to `scheduled`.** It is now live on the site.

## Fields

| Field | Notes |
| --- | --- |
| `id` | Stable and unique. Becomes the `#workshop-<id>` anchor the calendar links to. Don't reuse. |
| `unit`, `title` | Shown on the card. `title` overrides the Bookwhen event title. |
| `accent` | `teal`, `purple`, `blue` or `orange`. Colours the date badge and the calendar square. |
| `planPath` | The teacher-facing plan this session delivers. Not used by the site. |
| `ages` | Shown on the card. Bookwhen has no field for it. |
| `bookwhenEventId` | The join key. Nothing renders without a matching Bookwhen event. |
| `status` | `draft`, `scheduled` or `cancelled`. See below. |
| `blurb` | One or two sentences on the card. Keep it short; the body carries the detail. |
| `isOnline` | Optional. Only set it to override the default, which is "online if the Bookwhen event has no location pinned". Picks the schema.org location type. |

Date, duration, location, capacity, seats left and price are **not** fields here — they come
from Bookwhen.

## Status

- **`draft`** — off the site entirely, even if the Bookwhen event is already public. A
  placeholder `bookwhenEventId` is allowed, which is why new sessions start here.
- **`scheduled`** — live, using this file's copy. The build **fails** if `bookwhenEventId` is
  still `REPLACE-ME` or `TBD`, so a file that could never match anything cannot ship.
- **`cancelled`** — the card stays up, marked cancelled with no booking button, and the
  structured data tells Google `EventCancelled`. Use this rather than deleting the file, so
  anyone who already booked sees that it's off. Cancel it in Bookwhen too, or the card and
  the booking page will disagree.

Sessions disappear from the site automatically once their start time passes.

## Events without a file

An event on the Bookwhen schedule with no `.md` file here **still appears on the site** — it
is bookable right now, so hiding it would advertise less than we actually sell. It just
renders plainer: Bookwhen's own title, a blurb trimmed from the event details, an accent
picked from the event ID, and no unit label or age range.

So the way to take something off the site is to unpublish it in Bookwhen, or add a file with
`status: draft`. Adding a file is never required — only better.
