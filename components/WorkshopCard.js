import { WORKSHOP_TIME_ZONE } from "@/data/workshop-config";
import { Calendar, Clock, Users, MapPin, Cube, Ticket } from "@/components/Icons";

// Explicit timeZone: the server runs in UTC, so an unpinned formatter would
// render the wrong local time for a Toronto session.
const part = (options) =>
  new Intl.DateTimeFormat("en-CA", { ...options, timeZone: WORKSHOP_TIME_ZONE });

const monthFormat = part({ month: "short" });
const dayFormat = part({ day: "numeric" });
const weekdayFormat = part({ weekday: "short" });
const timeFormat = part({ hour: "numeric", minute: "2-digit", timeZoneName: "short" });
const fullDateFormat = part({ weekday: "long", month: "long", day: "numeric" });
const monthDayFormat = part({ month: "short", day: "numeric" });

/**
 * "From $45" — from, because a session can also carry sibling, group or course
 * tickets that cost more than the cheapest one Bookwhen reports. A course
 * ticket covers every date in the series, so say so: the same number against a
 * single date reads as the price of one morning.
 */
function priceLabel(price, isCourse) {
  if (price.amount === 0) return "Free";

  const amount = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: price.currency,
    // Whole-dollar prices read better without the trailing ".00".
    minimumFractionDigits: Number.isInteger(price.amount) ? 0 : 2,
  }).format(price.amount);

  return isCourse ? `From ${amount} for the whole course` : `From ${amount}`;
}

/** "8 weekly sessions · Oct 7 – Nov 25" */
function scheduleLabel({ sessionCount, cadence, startsAt, lastSessionAt }) {
  if (sessionCount < 2) return null;

  const run = `${monthDayFormat.format(new Date(startsAt))} – ${monthDayFormat.format(
    new Date(lastSessionAt)
  )}`;

  return `${sessionCount}${cadence === "weekly" ? " weekly" : ""} sessions · ${run}`;
}

/**
 * Seats come straight from Bookwhen, so the card can say how full a session
 * actually is. Capacity is null when the organiser set no cap at all.
 */
function seatsLabel({ capacity, seatsLeft }) {
  if (capacity === null) return null;
  if (seatsLeft === 0) return "Fully booked";
  if (seatsLeft <= 4) return `Only ${seatsLeft} of ${capacity} seats left`;
  return `${seatsLeft} of ${capacity} seats left · pods of 4`;
}

export default function WorkshopCard({ workshop }) {
  const {
    id,
    bookwhenEventId,
    unit,
    title,
    accent,
    ages,
    durationHours,
    startsAt,
    location,
    capacity,
    seatsLeft,
    waitingList,
    price,
    blurb,
    status,
    isCourse,
    sessionCount,
    lastSessionAt,
    cadence,
  } = workshop;

  const date = new Date(startsAt);
  const cancelled = status === "cancelled";
  const full = capacity !== null && seatsLeft === 0;
  const seats = seatsLabel({ capacity, seatsLeft });
  const schedule = scheduleLabel({ sessionCount, cadence, startsAt, lastSessionAt });

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
        {(unit || cancelled) && (
          <p className={`workshop-unit ${accent}`}>
            {unit}
            {cancelled && <span className="workshop-cancelled-tag">Cancelled</span>}
          </p>
        )}
        <h3>{title}</h3>
        {blurb && <p className="desc">{blurb}</p>}

        <ul className="workshop-meta">
          {schedule && (
            <li>
              <Calendar /> {schedule}
            </li>
          )}
          {durationHours && (
            <li>
              <Clock /> {Math.round(durationHours * 60)} minutes
              {schedule ? " a session" : ""}
            </li>
          )}
          {ages && (
            <li>
              <Users /> {ages}
            </li>
          )}
          {location && (
            <li>
              <MapPin /> {location}
            </li>
          )}
          {price && (
            <li>
              <Ticket /> {priceLabel(price, isCourse)}
            </li>
          )}
          {seats && (
            <li>
              <Cube /> {seats}
            </li>
          )}
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
          /* Bookwhen's own page handles the booking — it holds the seat and
             takes payment, so it stays the one place a booking can happen. The
             new tab goes to our hand-off screen first, which redirects on
             arrival: Bookwhen takes seconds to boot, and this way that wait is
             a ByteBear screen instead of a blank tab. */
          <a
            className="btn btn-teal workshop-cta"
            href={`/booking/${bookwhenEventId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {full
              ? waitingList
                ? "Join the waiting list"
                : "Fully booked"
              : isCourse
                ? "Book the course"
                : "Reserve a seat"}
            <span className="sr-only"> for {title}</span>
          </a>
        )}
      </div>
    </article>
  );
}
