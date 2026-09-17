import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/NewsletterForm";
import { Facebook, Instagram, Youtube, Linkedin } from "@/components/Icons";

// Hrefs are root-relative so the footer works from any route, not just "/".
const footerLinks = {
  Programs: [
    ["AI & Coding", "/#programs"],
    ["Robotics", "/#programs"],
    ["Game Design", "/#programs"],
    ["Creative Tech", "/#programs"],
    ["View All Programs", "/#programs"],
  ],
  Company: [
    ["About Us", "/about"],
    ["Our Mission", "/about#mission"],
    ["Careers", "/#enroll"],
    ["Contact Us", "/#enroll"],
  ],
  Resources: [
    ["Blog", "https://hub.bytebearacademy.com"],
    ["Events", "/#workshops"],
    ["FAQ", "/"],
    ["Privacy Policy", "/"],
  ],
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link className="brand" href="/">
              <Image
                className="brand-logo"
                src="/images/logo-bytebear-light.png"
                alt="ByteBear Academy"
                width={352}
                height={100}
              />
            </Link>
            <p className="footer-blurb">
              AI-enabled STEM education for kids 6–14. Code. Create. Explore. The future starts
              here.
            </p>
            <div className="socials">
              <a
                href="https://www.facebook.com/ByteBearAcademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/bytebearacademy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
              <a href="/" aria-label="YouTube">
                <Youtube />
              </a>
              <a href="/" aria-label="LinkedIn">
                <Linkedin />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div
              className="footer-col"
              key={heading}
              id={heading === "Resources" ? "resources" : undefined}
            >
              <h4>{heading}</h4>
              <ul>
                {links.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith("http") ? (
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        {label}
                      </a>
                    ) : (
                      <Link href={href}>{label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="newsletter">
            <h4>Stay Connected</h4>
            <p>Get updates on classes, events, and resources.</p>
            <NewsletterForm />
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} ByteBear Academy. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
