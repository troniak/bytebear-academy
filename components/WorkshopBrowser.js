"use client";

// The workshops section: a location filter, the calendar, and the card list.
// Client-side because the whole schedule is already on the page — filtering is
// a state change, not a fetch.
//
// The calendar is the navigator, not a decoration. Bookwhen carries a full
// season at a time — around ninety upcoming sessions, seventy of them in a
// single busy month — and a workshop card is tall, so rendering the lot turned
// the section into twenty thousand pixels of scroll. The list therefore shows
// one scope at a time: a day, the week around it, or the whole month, picked
// either on the calendar or from the switcher above the cards. The section is
// then a fixed height however many events Bookwhen holds.

import { useState } from "react";

import WorkshopCalendar from "@/components/WorkshopCalendar";
import WorkshopCard from "@/components/WorkshopCard";
import { MapPin } from "@/components/Icons";
import {
  dayKey,
  dayLabel,
  inWeek,
  monthKey,
  monthLabel,
  sessionMonths,
  weekLabel,
  weekStart,
} from "@/lib/workshop-months";

const ALL = "all";

// How many cards a week or month opens with, and how many each "show more"
// adds. Enough to see the shape of the run without reinstating the endless
// scroll — a busy month here is seventy sessions.
const PAGE = 8;

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

const plural = (count, noun) => `${count} ${noun}${count === 1 ? "" : "s"}`;

export default function WorkshopBrowser({ workshops }) {
  const [selected, setSelected] = useState(ALL);
  const [monthIndex, setMonthIndex] = useState(0);
  // The anchor day: which day is shown, and which week widening to "week" means.
  const [day, setDay] = useState(null);
  const [scope, setScope] = useState("day");
  const [limit, setLimit] = useState(PAGE);

  const options = locationOptions(workshops);
  const visible =
    selected === ALL ? workshops : workshops.filter((w) => w.locationKey === selected);

  const months = sessionMonths(visible);
  const index = Math.min(monthIndex, months.length - 1);
  const activeMonth = months[index];

  const monthSessions = visible.filter((w) => monthKey(w.startsAt) === activeMonth);
  // Days that actually hold a session. The month's first is where it opens, so
  // paging into a month always lands on something. The anchor is checked
  // against every day rather than this month's: the row straddling Sep and Oct
  // can hold nothing but October dates, and snapping back to the 1st would
  // highlight a different week from the one just clicked.
  const monthDays = [...new Set(monthSessions.map((w) => dayKey(w.startsAt)))];
  const sessionDays = new Set(visible.map((w) => dayKey(w.startsAt)));
  const activeDay = day && sessionDays.has(day) ? day : monthDays[0];
  const activeWeek = weekStart(activeDay);

  // A week is the whole seven days, not the part of it this month shows: the
  // row straddling two months is one week to a parent looking at it, and
  // hiding half of it would be a lie about what is on.
  const matching = {
    day: (w) => dayKey(w.startsAt) === activeDay,
    week: (w) => inWeek(dayKey(w.startsAt), activeWeek),
    month: (w) => monthKey(w.startsAt) === activeMonth,
  }[scope];

  const scoped = visible.filter(matching);
  const listed = scoped.slice(0, limit);
  const hidden = scoped.length - listed.length;

  const heading = {
    day: () => dayLabel(activeDay),
    week: () => `Week of ${weekLabel(activeWeek)}`,
    month: () => monthLabel(activeMonth),
  }[scope]();

  /** Pick a scope without moving the anchor day — the switcher above the list. */
  function widen(next) {
    setScope(next);
    setLimit(PAGE);
  }

  // Narrowing to a venue can drop whole months and days, so everything below
  // the chips restarts at the first date the narrowed set actually has.
  function selectLocation(key) {
    setSelected(key);
    setMonthIndex(0);
    setDay(null);
    setScope("day");
    setLimit(PAGE);
  }

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
              onClick={() => selectLocation(ALL)}
            >
              Everywhere <span className="workshop-chip-count">{workshops.length}</span>
            </button>
            {options.map((option) => (
              <button
                key={option.key}
                type="button"
                className="workshop-chip"
                aria-pressed={selected === option.key}
                onClick={() => selectLocation(option.key)}
              >
                {option.label} <span className="workshop-chip-count">{option.count}</span>
              </button>
            ))}
          </div>
          <p className="workshop-filter-count" aria-live="polite">
            {selected === ALL
              ? `${plural(workshops.length, "upcoming session")}`
              : `${visible.length} of ${workshops.length} sessions`}
          </p>
        </div>
      )}

      <div className="workshops-layout">
        <WorkshopCalendar
          workshops={calendarSessions}
          months={months}
          index={index}
          onIndexChange={(next) => {
            setMonthIndex(next);
            setDay(null);
            setScope("day");
            setLimit(PAGE);
          }}
          scope={scope}
          selectedDay={activeDay}
          selectedWeek={activeWeek}
          onSelect={(pick) => {
            // A week frame anchors on the first day of that week holding a
            // session, so narrowing back to "day" afterwards lands in the week
            // the parent just clicked rather than back at the 1st.
            if (pick.scope === "day") {
              setDay(pick.day);
              // The first and last rows carry dates from the months either
              // side; picking one pages to the month that owns it. A week is
              // left where it is — the straddling row is the last of one month
              // and the first of the next, so there is nothing to move to.
              const owner = months.indexOf(pick.day.slice(0, 7));
              if (owner !== -1) setMonthIndex(owner);
            }
            if (pick.scope === "week") {
              const first = visible.find((w) => inWeek(dayKey(w.startsAt), pick.week));
              if (first) setDay(dayKey(first.startsAt));
            }
            setScope(pick.scope);
            setLimit(PAGE);
          }}
        />

        <div className="workshop-list">
          {/* What the list is showing, said in words: on a narrow screen the
              calendar sits above rather than beside it, so the selected dates
              are off-screen by the time the cards are. The switcher repeats the
              calendar's three frames as plain controls — a hairline outline is
              a shortcut once you know it is there, not something to hide the
              only way to see a week behind. */}
          <div className="workshop-list-head">
            <div>
              <h3>{heading}</h3>
              <p aria-live="polite">{plural(scoped.length, "session")}</p>
            </div>
            <div
              className="workshop-scope"
              role="group"
              aria-label="How much of the calendar to show"
            >
              {[
                ["day", "Day"],
                ["week", "Week"],
                ["month", "Month"],
              ].map(([key, label]) => (
                <button
                  key={key}
                  type="button"
                  className="workshop-chip"
                  aria-pressed={scope === key}
                  onClick={() => widen(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {listed.map((workshop) => (
            <WorkshopCard key={workshop.id} workshop={workshop} />
          ))}

          {hidden > 0 && (
            <p className="workshop-list-more">
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => setLimit((current) => current + PAGE)}
              >
                Show {Math.min(hidden, PAGE)} more
              </button>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
