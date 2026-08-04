import { WORKSHOP_TIME_ZONE } from "@/data/workshop-config";
import { Clock, Users, MapPin, Cube } from "@/components/Icons";

// Explicit timeZone: the server runs in UTC, so an unpinned formatter would
// render the wrong local time for a Toronto session.
const part = (options) =>
  new Intl.DateTimeFormat("en-CA", { ...options, timeZone: WORKSHOP_TIME_ZONE });

const monthFormat = part({ month: "short" });
const dayFormat = part({ day: "numeric" });
const weekdayFormat = part({ weekday: "short" });
const timeFormat = part({ hour: "numeric", minute: "2-digit", timeZoneName: "short" });
const fullDateFormat = part({ weekday: "long", month: "long", day: "numeric" });

export default function WorkshopCard({ workshop }) {
  const {
    id,
    lumaEventId,
    lumaUrl,
    unit,
    title,
    accent,
    ages,
    durationHours,
    startsAt,
    location,
    capacity,
    blurb,
    status,
  } = workshop;

  const date = new Date(startsAt);
  const cancelled = status === "cancelled";

  return (
    <article
      className={`workshop-card${cancelled ? " is-cancelled" : ""}`}
      id={`workshop-${id}`}
    >
      <div className={`workshop-date ${accent}`}>
        <span className="workshop-month">{monthFormat.format(date)}</span>
        <span className="workshop-day">{dayFormat.format(date)}</span>
        <span className="workshop-weekday">{weekdayFormat.format(date)}</span>
      </div>

      <div className="workshop-body">
        <p className={`workshop-unit ${accent}`}>
          {unit}
          {cancelled && <span className="workshop-cancelled-tag">Cancelled</span>}
        </p>
        <h3>{title}</h3>
        <p className="desc">{blurb}</p>

        <ul className="workshop-meta">
          <li>
            <Clock /> {durationHours} hours
          </li>
          <li>
            <Users /> {ages}
          </li>
          <li>
            <MapPin /> {location}
          </li>
          <li>
            <Cube /> {capacity} seats · pods of 4
          </li>
        </ul>
      </div>

      <div className="workshop-foot">
        <time dateTime={startsAt}>
          <span className="sr-only">{fullDateFormat.format(date)}, </span>
          {timeFormat.format(date)}
        </time>
        {cancelled ? (
          <p className="workshop-cancelled-note">This session has been cancelled.</p>
        ) : (
          /* href is a real fallback: if embed.lu.ma is blocked the button still
             opens the Luma event page instead of dead-clicking. */
          <a
            className="btn btn-teal workshop-cta"
            href={lumaUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-luma-action="checkout"
            data-luma-event-id={lumaEventId}
          >
            Reserve a seat
            <span className="sr-only"> for {title}</span>
          </a>
        )}
      </div>
    </article>
  );
}
