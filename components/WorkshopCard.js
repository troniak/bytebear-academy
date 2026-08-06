import { WORKSHOP_TIME_ZONE } from "@/data/workshop-config";
import { Clock, Users, MapPin, Cube, Ticket } from "@/components/Icons";

// Explicit timeZone: the server runs in UTC, so an unpinned formatter would
// render the wrong local time for a Toronto session.
const part = (options) =>
  new Intl.DateTimeFormat("en-CA", { ...options, timeZone: WORKSHOP_TIME_ZONE });

const monthFormat = part({ month: "short" });
const dayFormat = part({ day: "numeric" });
const weekdayFormat = part({ weekday: "short" });
const timeFormat = part({ hour: "numeric", minute: "2-digit", timeZoneName: "short" });
const fullDateFormat = part({ weekday: "long", month: "long", day: "numeric" });

/**
 * "From $45" — from, because a session can also carry sibling, group or course
 * tickets that cost more than the cheapest one Bookwhen reports.
 */
function priceLabel(price) {
  if (price.amount === 0) return "Free";

  const amount = new Intl.NumberFormat("en-CA", {
    style: "currency",
    currency: price.currency,
    // Whole-dollar prices read better without the trailing ".00".
    minimumFractionDigits: Number.isInteger(price.amount) ? 0 : 2,
  }).format(price.amount);

  return `From ${amount}`;
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
    bookUrl,
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
  } = workshop;

  const date = new Date(startsAt);
  const cancelled = status === "cancelled";
  const full = capacity !== null && seatsLeft === 0;
  const seats = seatsLabel({ capacity, seatsLeft });

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
          {durationHours && (
            <li>
              <Clock /> {durationHours} hours
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
              <Ticket /> {priceLabel(price)}
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
             takes payment, so it stays the one place a booking can happen. */
          <a
            className="btn btn-teal workshop-cta"
            href={bookUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {full ? (waitingList ? "Join the waiting list" : "Fully booked") : "Reserve a seat"}
            <span className="sr-only"> for {title}</span>
          </a>
        )}
      </div>
    </article>
  );
}
