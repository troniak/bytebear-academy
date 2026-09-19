"use client";

import { dayKey, dayLabel, monthKey, monthLabel, weekLabel, weekStart } from "@/lib/workshop-months";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/**
 * The month's rows of seven. The first and last run into the neighbouring
 * months rather than trailing off into blanks: the week straddling Sep and Oct
 * is one week, it is scoped and counted as one, and half of it sitting empty
 * would hide sessions that are genuinely in the week being offered.
 */
function weekRows(year, monthNumber) {
  const leadingBlanks = new Date(Date.UTC(year, monthNumber - 1, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();
  const rows = Math.ceil((leadingBlanks + daysInMonth) / 7);

  return Array.from({ length: rows }, (_, row) => {
    const cells = Array.from({ length: 7 }, (_, column) => {
      // Days either side of the month come out as offsets past its ends, which
      // Date.UTC normalises into the month before or after.
      const offset = row * 7 + column - leadingBlanks;
      const date = new Date(Date.UTC(year, monthNumber - 1, 1 + offset));

      return {
        key: isoDay(date),
        day: date.getUTCDate(),
        inMonth: offset >= 0 && offset < daysInMonth,
      };
    });

    return { start: cells[0].key, cells };
  });
}

/** A date's day key, read back as UTC because that is how it was built. */
function isoDay(date) {
  return [
    date.getUTCFullYear(),
    String(date.getUTCMonth() + 1).padStart(2, "0"),
    String(date.getUTCDate()).padStart(2, "0"),
  ].join("-");
}

/**
 * The calendar drives the card list beside it. The month buttons page it, and
 * three nested frames pick how much of it to show: click a day, the week it
 * sits in, or the whole month. The two outer frames are real buttons lying
 * behind their contents, and the cells above them are transparent to the
 * pointer (see .calendar-week in globals.css), so anywhere inside a frame
 * counts as clicking it while the coloured days keep their own clicks.
 *
 * What is selected lives in WorkshopBrowser, because the list is the thing
 * these clicks change — the calendar only reports them.
 */
export default function WorkshopCalendar({
  workshops,
  months,
  index,
  onIndexChange,
  scope,
  selectedDay,
  selectedWeek,
  onSelect,
}) {
  const sessionsByDay = new Map();
  const countByWeek = new Map();
  let monthCount = 0;

  const month = months[index];

  for (const workshop of workshops) {
    const key = dayKey(workshop.startsAt);
    if (!sessionsByDay.has(key)) sessionsByDay.set(key, []);
    sessionsByDay.get(key).push(workshop);

    const week = weekStart(key);
    countByWeek.set(week, (countByWeek.get(week) ?? 0) + 1);
    if (monthKey(workshop.startsAt) === month) monthCount += 1;
  }

  const [year, monthNumber] = month.split("-").map(Number);
  const rows = weekRows(year, monthNumber);

  return (
    <div className="workshop-calendar">
      <div className="calendar-head">
        <button
          type="button"
          className="calendar-nav"
          onClick={() => onIndexChange(index - 1)}
          disabled={index === 0}
          aria-label="Previous month with a workshop"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <h3 aria-live="polite">{monthLabel(month)}</h3>
        <button
          type="button"
          className="calendar-nav"
          onClick={() => onIndexChange(index + 1)}
          disabled={index >= months.length - 1}
          aria-label="Next month with a workshop"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="calendar-month">
        <button
          type="button"
          className="calendar-scope calendar-scope-month"
          aria-pressed={scope === "month"}
          disabled={monthCount === 0}
          onClick={() => onSelect({ scope: "month" })}
          aria-label={
            monthCount === 0
              ? `No workshops in ${monthLabel(month)}`
              : `Show all ${monthCount} workshops in ${monthLabel(month)}`
          }
          title={`All of ${monthLabel(month)}`}
        />

        <div className="calendar-weekdays">
          {WEEKDAYS.map((label) => (
            <span key={label} className="calendar-weekday" aria-hidden="true">
              {label.charAt(0)}
            </span>
          ))}
        </div>

        {rows.map((row) => {
          const weekCount = countByWeek.get(row.start) ?? 0;

          return (
            <div className="calendar-week" key={row.start}>
              <button
                type="button"
                className="calendar-scope calendar-scope-week"
                aria-pressed={scope === "week" && row.start === selectedWeek}
                disabled={weekCount === 0}
                onClick={() => onSelect({ scope: "week", week: row.start })}
                aria-label={
                  weekCount === 0
                    ? `No workshops in the week of ${weekLabel(row.start)}`
                    : `Show all ${weekCount} workshops in the week of ${weekLabel(row.start)}`
                }
                title={`All of ${weekLabel(row.start)}`}
              />

              {row.cells.map(({ key, day, inMonth }) => {
                const sessions = sessionsByDay.get(key);
                const outside = inMonth ? "" : " is-outside";

                if (!sessions) {
                  return (
                    <span key={key} className={`calendar-day${outside}`}>
                      {day}
                    </span>
                  );
                }

                const [first] = sessions;
                const label =
                  sessions.length > 1
                    ? `${sessions.length} workshops on ${dayLabel(key)}`
                    : `${first.title} on ${dayLabel(key)}`;

                // A button, not a link: it narrows the list rather than jumping
                // down to a card, and with a busy month most cards aren't
                // rendered to jump to in the first place.
                return (
                  <button
                    key={key}
                    type="button"
                    className={`calendar-day has-session ${first.accent}${outside}`}
                    aria-pressed={scope === "day" && key === selectedDay}
                    onClick={() => onSelect({ scope: "day", day: key })}
                    aria-label={label}
                    title={label}
                  >
                    {day}
                    {sessions.length > 1 && (
                      <span className="calendar-count">{sessions.length}</span>
                    )}
                  </button>
                );
              })}
            </div>
          );
        })}
      </div>

      <p className="calendar-hint">
        Pick a day, a week, or the whole month to see everything in it.
      </p>
    </div>
  );
}
