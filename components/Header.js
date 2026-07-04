"use client";

import { useState } from "react";
import BearIcon from "./BearIcon";

const links = [
  { href: "#top", label: "Home" },
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Parents" },
  { href: "#resources", label: "Resources" },
  { href: "#enroll", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label="ByteBear Academy home">
            <BearIcon className="brand-bear-icon" />
            <span className="brand-text">
              <span className="brand-name">
                Byte<span>Bear</span>
              </span>
              <span className="brand-sub">Academy</span>
            </span>
          </a>

          <nav className="nav" aria-label="Main navigation">
            {links.map((link, i) => (
              <a key={link.href} href={link.href} className={i === 0 ? "active" : undefined}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="header-cta">
            <a className="btn btn-purple" href="#enroll">
              Enroll Now
            </a>
            <button
              className="nav-toggle"
              aria-expanded={open}
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                {open ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M3.5 6.5h17M3.5 12h17M3.5 17.5h17" />}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
            <a className="btn btn-purple" href="#enroll" onClick={() => setOpen(false)}>
              Enroll Now
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
