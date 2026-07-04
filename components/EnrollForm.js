"use client";

import { useState } from "react";

const initialStatus = { state: "", message: "" };

export default function EnrollForm() {
  const [status, setStatus] = useState(initialStatus);
  const [sending, setSending] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setSending(true);
    setStatus({ state: "pending", message: "Sending your request..." });

    try {
      const response = await fetch("/api/request-info", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "trial",
          childName: formData.get("childName")?.toString().trim() || "",
          parentEmail: formData.get("parentEmail")?.toString().trim() || "",
          ageGroup: formData.get("ageGroup")?.toString().trim() || "",
          program: formData.get("program")?.toString().trim() || "",
          notes: formData.get("notes")?.toString().trim() || "",
        }),
      });

      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      form.reset();
      setStatus({
        state: "success",
        message: "Thanks! Your request was sent — ByteBear Academy will follow up soon.",
      });
    } catch (error) {
      setStatus({
        state: "error",
        message: error.message || "We couldn't send your request right now. Please try again.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <form className="enroll-card" onSubmit={handleSubmit}>
      <div className="field-row">
        <div className="field">
          <label htmlFor="childName">Child&apos;s name</label>
          <input
            id="childName"
            name="childName"
            type="text"
            placeholder="Byte-sized inventor"
            autoComplete="name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="parentEmail">Parent email</label>
          <input
            id="parentEmail"
            name="parentEmail"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="ageGroup">Age group</label>
          <select id="ageGroup" name="ageGroup" required defaultValue="">
            <option value="" disabled>
              Select a group
            </option>
            <option>Ages 6-8</option>
            <option>Ages 9-11</option>
            <option>Ages 12-14</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="program">Program interest</label>
          <select id="program" name="program" defaultValue="">
            <option value="">Not sure yet</option>
            <option>AI &amp; Coding</option>
            <option>Robotics</option>
            <option>Game Design</option>
            <option>Creative Tech</option>
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="notes">Tell us anything helpful</label>
        <textarea
          id="notes"
          name="notes"
          rows={4}
          placeholder="Interests, experience level, schedule questions, or anything you'd like us to know"
        />
      </div>

      <button className="btn btn-teal" type="submit" disabled={sending}>
        {sending ? "Sending..." : "Book a Free Trial"}
      </button>
      <p className="form-status" data-state={status.state} role="status" aria-live="polite">
        {status.message}
      </p>
    </form>
  );
}
