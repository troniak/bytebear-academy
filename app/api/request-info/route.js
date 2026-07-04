import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";

const allowedAgeGroups = new Set(["Ages 6-8", "Ages 9-11", "Ages 12-14"]);
const allowedPrograms = new Set(["", "AI & Coding", "Robotics", "Game Design", "Creative Tech"]);

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function isEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function getEmailConfig() {
  const region = process.env.AWS_REGION || process.env.SES_REGION;
  const fromEmail = process.env.SES_FROM_EMAIL;
  const toEmail = process.env.SES_TO_EMAIL;
  if (!region || !fromEmail || !toEmail) {
    return null;
  }
  return { region, fromEmail, toEmail };
}

async function sendEmail({ config, subject, textBody, htmlBody, replyTo }) {
  const ses = new SESv2Client({ region: config.region });
  await ses.send(
    new SendEmailCommand({
      FromEmailAddress: config.fromEmail,
      Destination: { ToAddresses: [config.toEmail] },
      ReplyToAddresses: replyTo ? [replyTo] : undefined,
      Content: {
        Simple: {
          Subject: { Data: subject, Charset: "UTF-8" },
          Body: {
            Text: { Data: textBody, Charset: "UTF-8" },
            Html: { Data: htmlBody, Charset: "UTF-8" },
          },
        },
      },
    })
  );
}

export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const config = getEmailConfig();
  if (!config) {
    return Response.json({ error: "Email service is not configured yet." }, { status: 500 });
  }

  try {
    if (body.type === "newsletter") {
      const email = (body.email || "").trim();
      if (!isEmail(email)) {
        return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
      }

      await sendEmail({
        config,
        subject: "ByteBear Academy newsletter signup",
        textBody: `New newsletter signup: ${email}`,
        htmlBody: `<h1>New newsletter signup</h1><p><strong>Email:</strong> ${escapeHtml(email)}</p>`,
        replyTo: email,
      });

      return Response.json({ ok: true });
    }

    const childName = (body.childName || "").trim();
    const parentEmail = (body.parentEmail || "").trim();
    const ageGroup = (body.ageGroup || "").trim();
    const program = (body.program || "").trim();
    const notes = (body.notes || "").trim();

    if (!childName || !parentEmail || !ageGroup) {
      return Response.json({ error: "Please complete the required fields." }, { status: 400 });
    }
    if (!isEmail(parentEmail)) {
      return Response.json(
        { error: "Please enter a valid parent email address." },
        { status: 400 }
      );
    }
    if (!allowedAgeGroups.has(ageGroup)) {
      return Response.json({ error: "Please choose a valid age group." }, { status: 400 });
    }
    if (!allowedPrograms.has(program)) {
      return Response.json({ error: "Please choose a valid program." }, { status: 400 });
    }

    const textBody = [
      "New ByteBear Academy free trial request",
      "",
      `Child's name: ${childName}`,
      `Parent email: ${parentEmail}`,
      `Age group: ${ageGroup}`,
      `Program interest: ${program || "Not sure yet"}`,
      `Notes: ${notes || "None provided"}`,
    ].join("\n");

    const htmlBody = `
      <h1>New ByteBear Academy free trial request</h1>
      <p><strong>Child's name:</strong> ${escapeHtml(childName)}</p>
      <p><strong>Parent email:</strong> ${escapeHtml(parentEmail)}</p>
      <p><strong>Age group:</strong> ${escapeHtml(ageGroup)}</p>
      <p><strong>Program interest:</strong> ${escapeHtml(program || "Not sure yet")}</p>
      <p><strong>Notes:</strong><br>${escapeHtml(notes || "None provided").replace(/\n/g, "<br>")}</p>
    `;

    await sendEmail({
      config,
      subject: `ByteBear Academy free trial request: ${childName}`,
      textBody,
      htmlBody,
      replyTo: parentEmail,
    });

    return Response.json({ ok: true });
  } catch (error) {
    console.error("SES send failed", error);
    return Response.json(
      { error: "We couldn't send your request right now. Please try again." },
      { status: 500 }
    );
  }
}
