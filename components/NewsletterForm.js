"use client";

import { useState } from "react";
import { Send } from "./Icons";

export default function NewsletterForm() {
  const [status, setStatus] = useState({ state: "", message: "" });
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const email = new FormData(form).get("email")?.toString().trim() || "";

    setSending(true);
    setStatus({ state: "pending", message: "Subscribing..." });

    try {
      const response = await fetch("/api/request-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "newsletter", email }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      form.reset();
      setStatus({ state: "success", message: "Thanks — you're on the list!" });
    } catch (error) {
      setStatus({ state: "error", message: error.message || "Please try again." });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          aria-label="Email address"
          autoComplete="email"
          required
        />
        <button type="submit" disabled={sending} aria-label="Subscribe">
          <Send />
        </button>
      </form>
      <p className="newsletter-status" data-state={status.state} role="status" aria-live="polite">
        {status.message}
      </p>
    </>
  );
}
