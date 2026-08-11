"use client";

// The workshops section: a location filter over the calendar and the card list,
// so a parent who can only reach one venue (or only wants online) sees just
// those dates. Client-side because the whole schedule is already on the page —
// filtering is a state change, not a fetch.

import { useState } from "react";

import WorkshopCalendar from "@/components/WorkshopCalendar";
import WorkshopCard from "@/components/WorkshopCard";
import { MapPin } from "@/components/Icons";

const ALL = "all";

/**
 * One entry per place these sessions run, online first — it is the option that
 * is open to everyone — then venues A–Z.
 */
function locationOptions(workshops) {
  const options = new Map();

  for (const workshop of workshops) {
    const existing = options.get(workshop.locationKey);
    if (existing) {
      existing.count += 1;
    } else {
      options.set(workshop.locationKey, {
        key: workshop.locationKey,
        label: workshop.locationLabel,
        count: 1,
      });
    }
  }

  return [...options.values()].sort((a, b) => {
    if (a.key === "online" || b.key === "online") return a.key === "online" ? -1 : 1;
    return a.label.localeCompare(b.label);
  });
}

export default function WorkshopBrowser({ workshops }) {
  const [selected, setSelected] = useState(ALL);

  const options = locationOptions(workshops);
  const visible =
    selected === ALL ? workshops : workshops.filter((w) => w.locationKey === selected);

  // The calendar is a client component, so anything handed to it is serialized
  // into the HTML. Send only the four fields it renders.
  const calendarSessions = visible.map(({ id, startsAt, title, accent }) => ({
    id,
    startsAt,
    title,
    accent,
  }));

  return (
    <>
      {/* One place to filter by is not a choice — don't dress it up as one. */}
      {options.length > 1 && (
        <div className="workshop-filter">
          <span className="workshop-filter-label" id="workshop-filter-label">
            <MapPin /> Where
          </span>
          <div
            className="workshop-filter-options"
            role="group"
            aria-labelledby="workshop-filter-label"
          >
            <button
              type="button"
              className="workshop-chip"
              aria-pressed={selected === ALL}
              onClick={() => setSelected(ALL)}
            >
              Everywhere <span className="workshop-chip-count">{workshops.length}</span>
            </button>
            {options.map((option) => (
              <button
                key={option.key}
                type="button"
                className="workshop-chip"
                aria-pressed={selected === option.key}
                onClick={() => setSelected(option.key)}
              >
                {option.label} <span className="workshop-chip-count">{option.count}</span>
              </button>
            ))}
          </div>
          <p className="workshop-filter-count" aria-live="polite">
            {selected === ALL
              ? `${workshops.length} upcoming ${workshops.length === 1 ? "session" : "sessions"}`
              : `${visible.length} of ${workshops.length} sessions`}
          </p>
        </div>
      )}

      <div className="workshops-layout">
        {/* Keyed on the filter so the month paging restarts at the first month
            the narrowed set actually has a session in. */}
        <WorkshopCalendar key={selected} workshops={calendarSessions} />
        <div className="workshop-list">
          {visible.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}
        </div>
      </div>
    </>
  );
}
