"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Root-relative hrefs so the in-page anchors still resolve from routes other
// than "/" (e.g. /about).
const links = [
  { href: "/", label: "Home" },
  { href: "/#programs", label: "Programs" },
  { href: "/#workshops", label: "Workshops" },
  { href: "/about", label: "About" },
  { href: "/#testimonials", label: "Parents" },
  { href: "/#resources", label: "Resources" },
  { href: "/#enroll", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Anchors all live on the home page, so only the plain routes can be "current".
  const isActive = (href) => !href.includes("#") && href === pathname;

  return (
    <header className="header">
      <div className="container">
        <div className="header-inner">
          <Link className="brand" href="/">
            <Image
              className="brand-logo"
              src="/images/logo-bytebear.png"
              alt="ByteBear Academy"
              width={352}
              height={100}
              priority
            />
          </Link>

          <nav className="nav" aria-label="Main navigation">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={isActive(link.href) ? "active" : undefined}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="header-cta">
            <Link className="btn btn-purple" href="/#workshops">
              Enroll Now
            </Link>
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
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            ))}
            <Link className="btn btn-purple" href="/#workshops" onClick={() => setOpen(false)}>
              Enroll Now
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
