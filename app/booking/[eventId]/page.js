// A branded hand-off screen shown while Bookwhen loads.
//
// Clicking "Reserve a seat" opens a new tab. That tab sits on about:blank for
// as long as Bookwhen's cold start takes — a 302, then ~900 KB of their JS from
// a second origin. Nothing here can make that faster: it is their bundle on
// their domain, and Chrome's network-state partitioning means a preconnect
// fired from our page lands in our partition and is thrown away by a top-level
// navigation to theirs.
//
// So we don't try to make the wait shorter, only to stop it being a blank tab.
// This page is on our own origin — already warm, no new connection — so it
// paints immediately, and the browser keeps showing it until Bookwhen's
// document commits.

import Image from "next/image";
import { notFound } from "next/navigation";

import { BOOKWHEN_PAGE_CODE } from "@/data/workshop-config";
import { fetchBookwhenEvents } from "@/lib/bookwhen";

// Bookwhen event IDs look like ev-sboe-20200320100000. Anything else 404s
// rather than becoming a redirect anyone can point wherever they like.
const EVENT_ID = /^ev-[a-z0-9]+-\d{14}$/i;

export const metadata = {
  title: "Taking you to Bookwhen | ByteBear Academy",
  // A redirect screen has nothing to rank for, and shouldn't compete with the
  // real session cards for the same query.
  robots: { index: false, follow: false },
};

/**
 * Prerender the sessions currently on the site, so this screen comes off the
 * CDN as static HTML — a cold serverless invocation here would be its own
 * delay, which is the exact thing this page exists to remove. A session added
 * to Bookwhen after the last build still works; it renders once on demand and
 * is cached from then on.
 *
 * Deliberately reads Bookwhen directly rather than going through
 * lib/workshops.js: this screen only needs event IDs, and the session-copy
 * merge would drag gray-matter and the filesystem into a route that has no use
 * for either.
 */
export async function generateStaticParams() {
  const events = await fetchBookwhenEvents();
  return events.map((event) => ({ eventId: event.id }));
}

export default async function BookingHandoff({ params }) {
  const { eventId } = await params;
  if (!EVENT_ID.test(eventId)) notFound();

  const bookUrl = `https://bookwhen.com/${BOOKWHEN_PAGE_CODE}/e/${eventId}`;

  return (
    <main className="handoff">
      {/* Fires without JavaScript, and is the whole redirect for anyone who has
          it turned off. The inline script below replaces this history entry so
          Back from Bookwhen returns to the workshop list, not to here. */}
      <meta httpEquiv="refresh" content={`0;url=${bookUrl}`} />
      <script
        dangerouslySetInnerHTML={{
          __html: `location.replace(${JSON.stringify(bookUrl)})`,
        }}
      />

      <div className="handoff-card">
        <Image
          className="handoff-mark"
          src="/images/logo-bytebear.png"
          alt="ByteBear Academy"
          width={148}
          height={49}
          priority
        />

        <div className="handoff-track" aria-hidden="true" />

        <p className="handoff-status" role="status">
          Taking you to Bookwhen<span className="handoff-dots" aria-hidden="true" />
        </p>
        <p className="handoff-note">
          Bookwhen holds the seat and handles the booking. This only takes a moment.
        </p>

        <a className="handoff-fallback" href={bookUrl}>
          Not moving? Open Bookwhen directly
        </a>
      </div>
    </main>
  );
}
