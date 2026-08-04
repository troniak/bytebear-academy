# Workshop Sessions

One `.md` file per bookable session (this README aside). **These files are the source of
truth** — the website
reads them, and they are the script you follow when creating the matching Luma event.

Frontmatter drives the site. The body is the parent-facing description to paste into Luma.

## Creating a session

1. **Copy the nearest existing file.** Six 2-hour drafts exist, one per unit of the
   [Computer Science & AI 8+](../Computer%20Science%20&%20AI%208+/README.md) sequence.
   Filenames and `id`s are date-stamped (`<unit-slug>-<YYYY-MM-DD>.md`) because a unit
   gets run more than once — each run is its own file with its own `id`.
2. **Set the schedule** — `startsAt`, `durationHours`, `location`, `isOnline`, `capacity`.
   For the 4-hour modality, set `durationHours: 4`; the body text already describes what
   the extension adds.
3. **Create the Luma event** using the body of this file as the event description, and the
   frontmatter for date, capacity and location.
4. **Paste the Luma values back** into `lumaEventId` and `lumaUrl`, from
   Manage → More → Embed Registration Button.
5. **Flip `status` to `scheduled`.** It is now live on the site.

## Fields

| Field | Notes |
| --- | --- |
| `id` | Stable and unique. Becomes the `#workshop-<id>` anchor the calendar links to. Don't reuse. |
| `unit`, `title` | Shown on the card. |
| `accent` | `teal`, `purple`, `blue` or `orange`. Colours the date badge and the calendar square. |
| `planPath` | The teacher-facing plan this session delivers. Not used by the site. |
| `lumaEventId` | Drives the in-page checkout overlay. |
| `lumaUrl` | Fallback when Luma's script is blocked, **and** the event URL published to Google. |
| `startsAt` | Full ISO timestamp with offset. `-04:00` = EDT (Mar–Nov), `-05:00` = EST (Nov–Mar). |
| `durationHours` | `2` = core workshop. `4` = core + lunch + extension. |
| `location`, `isOnline` | `isOnline` picks the right schema.org location type. |
| `ages`, `capacity` | Capacity should be a multiple of 4 — students work in pods of four. |
| `status` | `draft`, `scheduled` or `cancelled`. See below. |
| `blurb` | One or two sentences on the card. Keep it short; the body carries the detail. |

## Status

- **`draft`** — invisible on the site. Placeholder Luma fields are allowed, which is why new
  sessions start here. Commit freely.
- **`scheduled`** — live and bookable. The build **fails** if any Luma field, `startsAt` or
  `location` is still `REPLACE-ME` or `TBD`, so a half-finished session cannot ship.
- **`cancelled`** — the card stays up, marked cancelled with no booking button, and the
  structured data tells Google `EventCancelled`. Use this rather than deleting the file, so
  anyone who already booked sees that it's off.

Sessions disappear from the site automatically once their start time passes. There is no need
to prune old files, though deleting them keeps this directory readable.

## Keeping in sync with Luma

Luma is authoritative at the moment of booking — its overlay always shows the real date and
real remaining seats. These files are authoritative for discovery: what parents find, what the
calendar shows, and what Google publishes.

So **change it in Luma, then immediately edit the file here.** Doing one without the other
means the site advertises something Luma no longer offers.
