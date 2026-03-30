const form = document.getElementById("request-info-form");
const statusEl = document.getElementById("form-status");

if (form && statusEl) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const submitButton = form.querySelector('button[type="submit"]');
    const formData = new FormData(form);
    const payload = {
      childName: formData.get("childName")?.toString().trim() || "",
      parentEmail: formData.get("parentEmail")?.toString().trim() || "",
      ageGroup: formData.get("ageGroup")?.toString().trim() || "",
      notes: formData.get("notes")?.toString().trim() || "",
    };

    statusEl.textContent = "Sending your request...";
    statusEl.dataset.state = "pending";

    if (submitButton) {
      submitButton.disabled = true;
    }

    try {
      const response = await fetch("/api/request-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      form.reset();
      statusEl.textContent = "Thanks. Your request was sent and ByteBear Academy will follow up soon.";
      statusEl.dataset.state = "success";
    } catch (error) {
      statusEl.textContent = error.message || "We couldn't send your request right now. Please try again.";
      statusEl.dataset.state = "error";
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
      }
    }
  });
}
