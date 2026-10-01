import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cube, Lightbulb, Rocket, Code } from "@/components/Icons";

export const metadata = {
  title: "Student Showcase: AI-Assisted Game Development | ByteBear Academy",
  description:
    "ByteBear Academy student Mason L. vibe coded a full 3D battle-royale game with an AI assistant — gliding drops, drivable buggies, bot opponents and a shrinking storm.",
};

// Screenshots live in /public/images/showcase, in the order a match plays out.
const shots = [
  {
    src: "/images/showcase/student-game-1.jpg",
    width: 1580,
    height: 1090,
    caption: "The drop",
    text: "Players glide into a low-poly island with forests, villages and a lookout tower. A minimap tracks the storm ring and every opponent.",
  },
  {
    src: "/images/showcase/student-game-2.jpg",
    width: 1574,
    height: 1090,
    caption: "Hop in a buggy",
    text: "A buggy waits near your landing spot. Press E to drive, with a live speedometer and a kill-feed style tag log in the corner.",
  },
  {
    src: "/images/showcase/student-game-3.jpg",
    width: 1576,
    height: 1085,
    caption: "Face the bots",
    text: "Computer-controlled opponents roam the map and tag each other. Three weapons — Pulse, Scatter and Longshot — each with their own ammo.",
  },
  {
    src: "/images/showcase/student-game-4.jpg",
    width: 1574,
    height: 1091,
    caption: "Last one standing",
    text: "Survive the storm and out-tag 20 bots to win. The results screen tracks tags, survival time and your personal best.",
  },
];

const gameUrl = "https://wildlands-battle-royale.replit.app/";

const features = [
  { icon: <Cube />, tint: "blue", title: "3D world", text: "Procedural forests, villages, rocks, roads and a coastline." },
  { icon: <Rocket />, tint: "orange", title: "Vehicles", text: "Enterable buggies with their own driving controls." },
  { icon: <Code />, tint: "teal", title: "Bot AI", text: "21-player matches against computer opponents." },
  { icon: <Lightbulb />, tint: "purple", title: "Game systems", text: "Shield, health, weapons, a shrinking zone and a full HUD." },
];

const steps = [
  {
    title: "Start with the idea",
    text: "Students write down the game they want to play — the genre, the feel, the rules — before any code exists.",
  },
  {
    title: "Direct the AI",
    text: "They describe each feature to an AI coding assistant in plain language, then read, run and test what it produces.",
  },
  {
    title: "Playtest and iterate",
    text: "Bugs, balance and polish come from playing the game, spotting what's off and asking for precise changes.",
  },
  {
    title: "Own the result",
    text: "The design decisions are the student's. The AI is a fast pair of hands; the vision, taste and judgement are theirs.",
  },
];

export default function Showcase() {
  return (
    <div id="top">
      <Header />

      <main>
        {/* Hero */}
        <section className="about-hero">
          <div className="container showcase-hero">
            <p className="eyebrow">Student Showcase · AI-Assisted Game Development</p>
            <h1>Mason L. vibe coded a 3D battle royale.</h1>
            <p className="lead">
              Gliding drops, drivable buggies, 20 bot opponents and a closing storm — all built by
              ByteBear student Mason L. working with an AI coding assistant. Here&apos;s what Mason made, and
              what it shows about how kids can create with AI.
            </p>
            <div className="hero-actions showcase-actions">
              <a className="btn btn-teal" href={gameUrl} target="_blank" rel="noopener noreferrer">
                Play Mason&apos;s Game
              </a>
            </div>
          </div>
        </section>

        {/* Lead screenshot */}
        <section className="showcase-feature">
          <div className="container">
            <figure className="showcase-shot showcase-shot-lead">
              <Image
                src={shots[0].src}
                alt="Mason L.'s 3D game: a player gliding onto a low-poly island with a minimap and HUD"
                width={shots[0].width}
                height={shots[0].height}
                sizes="(max-width: 1120px) 100vw, 1120px"
                priority
              />
            </figure>

            <ul className="showcase-features">
              {features.map((f) => (
                <li key={f.title}>
                  <span className={`about-highlight-icon ${f.tint}`}>{f.icon}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Match walkthrough */}
        <section className="showcase-walkthrough">
          <div className="container">
            <div className="centered-head">
              <h2 className="section-title">One match, start to finish</h2>
              <p>
                Every screen below is from Mason&apos;s game, captured during a single bot match.{" "}
                <a href={gameUrl} target="_blank" rel="noopener noreferrer">
                  Try it yourself
                </a>
                .
              </p>
            </div>

            <div className="showcase-grid">
              {shots.map((shot, i) => (
                <figure className="showcase-shot" key={shot.src}>
                  <Image
                    src={shot.src}
                    alt={`Mason L.'s game screenshot: ${shot.caption}`}
                    width={shot.width}
                    height={shot.height}
                    sizes="(max-width: 860px) 100vw, 560px"
                  />
                  <figcaption>
                    <span className="showcase-step">{String(i + 1).padStart(2, "0")}</span>
                    <strong>{shot.caption}</strong>
                    <span>{shot.text}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="about-mission">
          <div className="container">
            <div className="mission-panel showcase-process">
              <div>
                <p className="eyebrow">How it works</p>
                <h2 className="section-title">AI writes code. Kids make the game.</h2>
                <p>
                  &ldquo;Vibe coding&rdquo; means building software by describing what you want to an
                  AI and steering it toward your vision. Done well, it isn&apos;t a shortcut around
                  learning — it&apos;s a way to reach ambitious projects sooner and learn design,
                  debugging and systems thinking along the way.
                </p>
              </div>
              <ol className="showcase-steps">
                {steps.map((step) => (
                  <li key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container">
            <div className="cta-band about-cta-band">
              <div className="cta-copy">
                <h2>Your child could build this next.</h2>
                <p>Our Game Design and AI &amp; Coding programs turn big ideas into playable games.</p>
                <div className="cta-actions">
                  <Link className="btn btn-teal" href="/#workshops">
                    Book a Workshop
                  </Link>
                  <Link className="btn btn-ghost-white" href="/#programs">
                    Explore Programs
                  </Link>
                </div>
              </div>
              <span className="cta-rocket" aria-hidden="true">
                <Rocket />
              </span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
