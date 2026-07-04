import Image from "next/image";
import BearIcon from "@/components/BearIcon";
import Header from "@/components/Header";
import Testimonials from "@/components/Testimonials";
import EnrollForm from "@/components/EnrollForm";
import NewsletterForm from "@/components/NewsletterForm";
import {
  ArrowRight,
  Chip,
  Users,
  ShieldCheck,
  Heart,
  Code,
  Robot,
  Cube,
  Palette,
  Rocket,
  GradCap,
  Monitor,
  MapleLeaf,
  Check,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
} from "@/components/Icons";

const trustItems = [
  {
    icon: <Chip />,
    tint: "teal",
    title: "AI-Enhanced Learning",
    text: "Personalized, adaptive learning powered by AI.",
  },
  {
    icon: <Users />,
    tint: "purple",
    title: "Project-Based",
    text: "Hands-on projects that build real-world skills.",
  },
  {
    icon: <ShieldCheck />,
    tint: "blue",
    title: "Small Class Sizes",
    text: "Focused instruction and personalized attention.",
  },
  {
    icon: <Heart />,
    tint: "orange",
    title: "Safe & Supportive",
    text: "Nurturing environment that builds confidence.",
  },
];

const programs = [
  {
    icon: <Code />,
    accent: "teal",
    image: "/images/program-ai.png",
    title: "AI & Coding",
    ages: "Ages 6–14",
    text: "Learn programming, algorithms, and AI fundamentals.",
  },
  {
    icon: <Robot />,
    accent: "purple",
    image: "/images/program-robotics.png",
    title: "Robotics",
    ages: "Ages 6–14",
    text: "Build, code, and bring robots to life while developing engineering skills.",
  },
  {
    icon: <Cube />,
    accent: "blue",
    image: "/images/program-gamedesign.png",
    title: "Game Design",
    ages: "Ages 8–14",
    text: "Design games, build worlds, and unleash creativity with code.",
  },
  {
    icon: <Palette />,
    accent: "orange",
    image: "/images/program-creative.png",
    title: "Creative Tech",
    ages: "Ages 6–14",
    text: "Explore digital design, animation, and storytelling using technology.",
  },
];

const stats = [
  { icon: <Users />, value: "1,200+", label: "Students Empowered" },
  { icon: <GradCap />, value: "50+", label: "Expert Instructors" },
  { icon: <Monitor />, value: "100+", label: "Projects Completed" },
  { icon: <MapleLeaf />, value: "Across Canada", label: "Online & In-Person", pink: true },
];

const footerLinks = {
  Programs: [
    ["AI & Coding", "#programs"],
    ["Robotics", "#programs"],
    ["Game Design", "#programs"],
    ["Creative Tech", "#programs"],
    ["View All Programs", "#programs"],
  ],
  Company: [
    ["About Us", "#about"],
    ["Our Mission", "#about"],
    ["Careers", "#enroll"],
    ["Contact Us", "#enroll"],
  ],
  Resources: [
    ["Blog", "#top"],
    ["Events", "#top"],
    ["FAQ", "#top"],
    ["Privacy Policy", "#top"],
  ],
};

export default function Home() {
  return (
    <div id="top">
      <Header />

      <main>
        {/* Hero */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>
                <span className="line-navy">Future skills.</span>
                <span className="line-teal">Real impact.</span>
                <span className="line-purple">Endless possibilities.</span>
              </h1>
              <p className="lead">
                AI-enabled STEM education for kids 6–14. We inspire the next generation of
                creators, problem solvers, and innovators.
              </p>
              <div className="hero-actions">
                <a className="btn btn-teal" href="#programs">
                  Explore Programs
                </a>
                <a className="btn btn-outline" href="#about">
                  <span className="play-icon" /> Watch Video
                </a>
              </div>
              <p className="hero-canada">
                <span aria-hidden="true">🍁</span> Proudly based in Canada
                <span className="divider">|</span>
                <span className="muted">Serving families coast to coast</span>
              </p>
            </div>
            <div className="hero-art">
              <Image
                src="/images/hero.png"
                alt="A young student coding on a laptop with a ByteBear sticker, surrounded by AI Learning, Code, Create, and Explore badges"
                width={565}
                height={400}
                priority
              />
            </div>
          </div>
        </section>

        {/* Trust bar */}
        <section className="trustbar">
          <div className="container">
            <div className="trustbar-card">
              {trustItems.map((item) => (
                <div className="trust-item" key={item.title}>
                  <span className={`trust-icon ${item.tint}`}>{item.icon}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="programs" id="programs">
          <div className="container">
            <div className="section-head">
              <div>
                <p className="eyebrow">Our Programs</p>
                <h2 className="section-title">Programs that prepare kids for tomorrow</h2>
              </div>
              <a className="text-link" href="#enroll">
                View All Programs <ArrowRight />
              </a>
            </div>

            <div className="program-grid">
              {programs.map((program) => (
                <article className="program-card" key={program.title}>
                  <div className="program-media">
                    <Image
                      src={program.image}
                      alt={`${program.title} program`}
                      fill
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <span className={`program-icon ${program.accent}`}>{program.icon}</span>
                  </div>
                  <div className="program-body">
                    <h3>{program.title}</h3>
                    <p className="program-ages">{program.ages}</p>
                    <p className="desc">{program.text}</p>
                    <a className={`program-link ${program.accent}`} href="#enroll">
                      Learn More <ArrowRight />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="about" id="about">
          <div className="container about-grid">
            <BearIcon className="watermark" strokeWidth={2} />
            <div className="about-media">
              <Image
                src="/images/about-kids.png"
                alt="Two ByteBear Academy students building a wheeled robot together"
                width={680}
                height={352}
              />
            </div>
            <div className="about-copy">
              <p className="eyebrow">About Us</p>
              <h2 className="section-title">Empowering young minds through technology</h2>
              <p>
                ByteBear Academy is on a mission to make STEM education engaging, accessible, and
                impactful. Through AI-powered learning and hands-on projects, we help kids become
                confident problem solvers and innovative thinkers.
              </p>
              <a className="btn btn-teal" href="#enroll">
                Learn More About Us <ArrowRight />
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="container">
            <div className="stats-band">
              {stats.map((stat) => (
                <div className="stat" key={stat.label}>
                  <span className={`stat-icon${stat.pink ? " pink" : ""}`}>{stat.icon}</span>
                  <div>
                    <strong>{stat.value}</strong>
                    <span>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* CTA */}
        <section className="cta">
          <div className="container">
            <div className="cta-band">
              <span className="cta-rocket">
                <Rocket />
              </span>
              <div className="cta-copy">
                <h2>Ready to build the future?</h2>
                <p>
                  Join ByteBear Academy and give your child the tools to create, innovate, and
                  lead.
                </p>
              </div>
              <div className="cta-actions">
                <a className="btn btn-white" href="#enroll">
                  Enroll Now
                </a>
                <a className="btn btn-ghost-white" href="#enroll">
                  Book a Free Trial
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Enroll */}
        <section className="enroll" id="enroll">
          <div className="container enroll-grid">
            <div className="enroll-copy">
              <p className="eyebrow">Book a Free Trial</p>
              <h2 className="section-title">
                Give your child a place to build, code, and shine
              </h2>
              <p>
                Trial classes are a fun first step. Kids meet the robots, try a challenge, and see
                how ByteBear Academy turns curiosity into confidence.
              </p>
              <ul className="enroll-points">
                <li>
                  <span className="check-dot">
                    <Check />
                  </span>
                  Friendly for complete beginners
                </li>
                <li>
                  <span className="check-dot">
                    <Check />
                  </span>
                  Project-based robotics, coding, and AI
                </li>
                <li>
                  <span className="check-dot">
                    <Check />
                  </span>
                  Built for ages 6 to 14
                </li>
              </ul>
            </div>
            <EnrollForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <a className="brand" href="#top" aria-label="ByteBear Academy home">
                <BearIcon className="brand-bear-icon" />
                <span className="brand-text">
                  <span className="brand-name">
                    Byte<span>Bear</span>
                  </span>
                  <span className="brand-sub">Academy</span>
                </span>
              </a>
              <p className="footer-blurb">
                AI-enabled STEM education for kids 6–14. Code. Create. Explore. The future starts
                here.
              </p>
              <div className="socials">
                <a href="#top" aria-label="Facebook">
                  <Facebook />
                </a>
                <a href="#top" aria-label="Instagram">
                  <Instagram />
                </a>
                <a href="#top" aria-label="YouTube">
                  <Youtube />
                </a>
                <a href="#top" aria-label="LinkedIn">
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
                      <a href={href}>{label}</a>
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
            <span>
              <span aria-hidden="true">🍁</span> Proudly based in Canada
            </span>
            <span>© {new Date().getFullYear()} ByteBear Academy. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
