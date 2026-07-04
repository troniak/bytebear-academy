"use client";

import { useEffect, useState } from "react";
import BearIcon from "./BearIcon";

const quotes = [
  {
    text: "ByteBear Academy has helped my child discover a love for coding and problem solving. The projects are fun, and the teachers are amazing!",
    author: "Sophia T., Parent",
  },
  {
    text: "My child came home talking about gears, sensors, and algorithms like they were magical powers. ByteBear made STEM feel joyful.",
    author: "Parent of a ByteBear builder",
  },
  {
    text: "The small class sizes made all the difference. My son went from shy observer to proudly demoing his robot in a few weeks.",
    author: "Marcus L., Parent",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % quotes.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const quote = quotes[index];

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonial-band">
          <BearIcon className="watermark" strokeWidth={2} />
          <div className="testimonial-content">
            <div className="quote-mark" aria-hidden="true">
              “
            </div>
            <p className="testimonial-quote">{quote.text}</p>
            <p className="testimonial-author">— {quote.author}</p>
            <div className="testimonial-dots" role="tablist" aria-label="Testimonials">
              {quotes.map((q, i) => (
                <button
                  key={q.author}
                  className={i === index ? "active" : undefined}
                  aria-label={`Show testimonial ${i + 1}`}
                  aria-selected={i === index}
                  role="tab"
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
