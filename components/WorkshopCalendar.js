"use client";

import { useState } from "react";
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

const longDateFormat = new Intl.DateTimeFormat("en-CA", {
  weekday: "long",
  month: "long",
  day: "numeric",
  timeZone: WORKSHOP_TIME_ZONE,
});

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

/** "2026-08-15" in the workshop timezone. */
function dayKey(iso) {
  return dayKeyFormat.format(new Date(iso));
}

export default function WorkshopCalendar({ workshops }) {
  const sessionsByDay = new Map();
  for (const workshop of workshops) {
    const key = dayKey(workshop.startsAt);
    if (!sessionsByDay.has(key)) sessionsByDay.set(key, []);
    sessionsByDay.get(key).push(workshop);
  }

  // Step only through months that actually hold a session — no empty months to page past.
  const months = [...new Set([...sessionsByDay.keys()].map((key) => key.slice(0, 7)))].sort();
  const [index, setIndex] = useState(0);
  const month = months[Math.min(index, months.length - 1)];

  const [year, monthNumber] = month.split("-").map(Number);
  const leadingBlanks = new Date(Date.UTC(year, monthNumber - 1, 1)).getUTCDay();
  const daysInMonth = new Date(Date.UTC(year, monthNumber, 0)).getUTCDate();

  return (
    <div className="workshop-calendar">
      <div className="calendar-head">
        <button
          type="button"
          className="calendar-nav"
          onClick={() => setIndex((i) => i - 1)}
          disabled={index === 0}
          aria-label="Previous month with a workshop"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M15 5l-7 7 7 7" />
          </svg>
        </button>
        <h3 aria-live="polite">
          {monthLabelFormat.format(new Date(Date.UTC(year, monthNumber - 1, 1)))}
        </h3>
        <button
          type="button"
          className="calendar-nav"
          onClick={() => setIndex((i) => i + 1)}
          disabled={index >= months.length - 1}
          aria-label="Next month with a workshop"
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div className="calendar-grid">
        {WEEKDAYS.map((label) => (
          <span key={label} className="calendar-weekday" aria-hidden="true">
            {label.charAt(0)}
          </span>
        ))}

        {Array.from({ length: leadingBlanks }, (_, i) => (
          <span key={`blank-${i}`} className="calendar-day is-empty" aria-hidden="true" />
        ))}

        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const key = `${month}-${String(day).padStart(2, "0")}`;
          const sessions = sessionsByDay.get(key);

          if (!sessions) {
            return (
              <span key={key} className="calendar-day">
                {day}
              </span>
            );
          }

          const [first] = sessions;
          const label =
            sessions.length > 1
              ? `${sessions.length} workshops on ${longDateFormat.format(new Date(first.startsAt))}`
              : `${first.title} on ${longDateFormat.format(new Date(first.startsAt))}`;

          return (
            <a
              key={key}
              className={`calendar-day has-session ${first.accent}`}
              href={`#workshop-${first.id}`}
              aria-label={label}
              title={label}
            >
              {day}
              {sessions.length > 1 && <span className="calendar-count">{sessions.length}</span>}
            </a>
          );
        })}
      </div>

      <p className="calendar-hint">Coloured days have a workshop — pick one to jump to it.</p>
    </div>
  );
}
