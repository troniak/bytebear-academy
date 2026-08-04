import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Robot,
  Users,
  ShieldCheck,
  Lightbulb,
  Heart,
  Rocket,
  Globe,
} from "@/components/Icons";

export const metadata = {
  title: "About Us | ByteBear Academy",
  description:
    "ByteBear Academy inspires kids ages 6–14 to be curious, confident problem solvers and creators of the future through fun, hands-on STEM and AI learning experiences.",
};

const heroHighlights = [
  { icon: <Robot />, tint: "teal", label: "Hands-on\nLearning" },
  { icon: <Users />, tint: "purple", label: "Expert\nInstructors" },
  { icon: <ShieldCheck />, tint: "orange", label: "Safe &\nSupportive" },
  { icon: <Lightbulb />, tint: "blue", label: "Future\nReady" },
];

// `photo` is a path under /public once real headshots are available; until then
// each card falls back to a tinted initials monogram.
const team = [
  {
    name: "Jill Lin",
    role: "Operations",
    bio: "EdTech entrepreneur and designer passionate about using technology to transform how kids learn.",
    tint: "purple",
    photo: null,
  },
  {
    name: "Daniel Troniak",
    role: "Learning and Innovation",
    bio: "AI engineer and developer focused on building innovative learning platforms and tools.",
    tint: "blue",
    photo: null,
  },
  {
    name: "Alex Chen",
    role: "Lead Instructor",
    bio: "Robotics expert and educator who loves helping kids turn ideas into real projects.",
    tint: "teal",
    photo: null,
  },
  {
    name: "Sarah Kim",
    role: "Curriculum Lead",
    bio: "Curriculum designer and STEM educator dedicated to making learning fun and meaningful.",
    tint: "pink",
    photo: null,
  },
];

const reasons = [
  {
    icon: <Users />,
    tint: "teal",
    title: "Small Class Sizes",
    text: "Personalized attention so every student can thrive.",
  },
  {
    icon: <Heart />,
    tint: "purple",
    title: "Expert & Caring Teachers",
    text: "Instructors who inspire confidence and a love for learning.",
  },
  {
    icon: <Rocket />,
    tint: "orange",
    title: "Hands-on Projects",
    text: "Real-world challenges that build skills and spark creativity.",
  },
  {
    icon: <ShieldCheck />,
    tint: "blue",
    title: "Safe & Supportive",
    text: "A positive, inclusive environment where kids feel safe to explore.",
  },
  {
    icon: <Globe />,
    tint: "pink",
    title: "Future-Focused Skills",
    text: "Preparing kids for an AI-powered world with skills that matter.",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");

export default function About() {
  return (
    <div id="top">
      <Header />

      <main>
        {/* Hero */}
        <section className="about-hero">
          <div className="container about-hero-grid">
            <div className="about-hero-copy">
              <p className="eyebrow">About ByteBear Academy</p>
              <h1>
                Empowering Young Minds to Code. Create. Explore.
              </h1>
              <p className="lead">
                At ByteBear Academy, we inspire kids ages 6–14 to be curious, confident problem
                solvers and creators of the future through fun, hands-on STEM and AI learning
                experiences.
              </p>
              <ul className="about-highlights">
                {heroHighlights.map((item) => (
                  <li key={item.label}>
                    <span className={`about-highlight-icon ${item.tint}`}>{item.icon}</span>
                    <span className="about-highlight-label">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="about-hero-art">
              <Image
                src="/images/hero.png"
                alt="A ByteBear Academy student coding on a laptop"
                width={565}
                height={400}
                priority
              />
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="about-mission" id="mission">
          <div className="container">
            <div className="mission-panel">
              <div className="mission-art">
                <Image
                  src="/images/about-kids.png"
                  alt="Two ByteBear Academy students building a wheeled robot together"
                  width={340}
                  height={176}
                />
              </div>
              <div className="mission-copy">
                <div>
                  <p className="eyebrow">Our Mission</p>
                  <h2>Building skills today for a better tomorrow.</h2>
                  <p>
                    We believe every child has the potential to change the world. By learning
                    coding, robotics, AI and design thinking, they gain the tools to turn ideas
                    into real solutions and become the innovators of tomorrow.
                  </p>
                </div>
                <div>
                  <p className="eyebrow">Our Vision</p>
                  <h2>A future where every kid is a creator, not just a consumer.</h2>
                  <p>
                    We envision a world where technology is used to solve meaningful problems and
                    create positive impact. Our goal is to make high-quality STEM education
                    accessible, engaging and empowering for all children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="about-team" id="team">
          <div className="container">
            <div className="centered-head">
              <h2 className="section-title">Meet Our Team</h2>
              <p>
                Passionate educators, technologists and dreamers working together to inspire the
                next generation of innovators.
              </p>
            </div>

            <div className="team-grid">
              {team.map((member) => (
                <article className="team-card" key={member.name}>
                  {member.photo ? (
                    <Image
                      className="team-avatar"
                      src={member.photo}
                      alt={member.name}
                      width={224}
                      height={224}
                    />
                  ) : (
                    <span className={`team-avatar team-monogram ${member.tint}`} aria-hidden="true">
                      {initials(member.name)}
                    </span>
                  )}
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-bio">{member.bio}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why families choose us */}
        <section className="about-reasons">
          <div className="container">
            <div className="centered-head">
              <h2 className="section-title">Why Families Choose ByteBear Academy</h2>
            </div>

            <div className="reason-grid">
              {reasons.map((reason) => (
                <div className="reason" key={reason.title}>
                  <span className={`reason-icon ${reason.tint}`}>{reason.icon}</span>
                  <h3>{reason.title}</h3>
                  <p>{reason.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta">
          <div className="container">
            <div className="cta-band about-cta-band">
              <div className="cta-copy">
                <h2>Let&apos;s build the future together.</h2>
                <p>Join ByteBear Academy and watch your child&apos;s ideas come to life.</p>
                <div className="cta-actions">
                  <Link className="btn btn-teal" href="/#enroll">
                    Book a Class
                  </Link>
                  <Link className="btn btn-ghost-white" href="/#programs">
                    Explore Classes
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
