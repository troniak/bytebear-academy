const { SESv2Client, SendEmailCommand } = require("@aws-sdk/client-sesv2");

const ses = new SESv2Client({
  region: process.env.AWS_REGION || process.env.SES_REGION,
});

const allowedAgeGroups = new Set(["Ages 6-8", "Ages 9-11", "Ages 12-14"]);

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

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed." });
  }

  const { childName = "", parentEmail = "", ageGroup = "", notes = "" } = req.body || {};

  const cleanChildName = childName.trim();
  const cleanParentEmail = parentEmail.trim();
  const cleanAgeGroup = ageGroup.trim();
  const cleanNotes = notes.trim();

  if (!cleanChildName || !cleanParentEmail || !cleanAgeGroup) {
    return res.status(400).json({ error: "Please complete the required fields." });
  }

  if (!isEmail(cleanParentEmail)) {
    return res.status(400).json({ error: "Please enter a valid parent email address." });
  }

  if (!allowedAgeGroups.has(cleanAgeGroup)) {
    return res.status(400).json({ error: "Please choose a valid age group." });
  }

  const fromEmail = process.env.SES_FROM_EMAIL;
  const toEmail = process.env.SES_TO_EMAIL;

  if (!fromEmail || !toEmail || !(process.env.AWS_REGION || process.env.SES_REGION)) {
    return res.status(500).json({ error: "Email service is not configured yet." });
  }

  const subject = `ByteBear Academy request info: ${cleanChildName}`;
  const textBody = [
    "New ByteBear Academy request info lead",
    "",
    `Child's name: ${cleanChildName}`,
    `Parent email: ${cleanParentEmail}`,
    `Age group: ${cleanAgeGroup}`,
    `Notes: ${cleanNotes || "None provided"}`,
  ].join("\n");

  const htmlBody = `
    <h1>New ByteBear Academy request info lead</h1>
    <p><strong>Child's name:</strong> ${escapeHtml(cleanChildName)}</p>
    <p><strong>Parent email:</strong> ${escapeHtml(cleanParentEmail)}</p>
    <p><strong>Age group:</strong> ${escapeHtml(cleanAgeGroup)}</p>
    <p><strong>Notes:</strong><br>${escapeHtml(cleanNotes || "None provided").replace(/\n/g, "<br>")}</p>
  `;

  try {
    await ses.send(
      new SendEmailCommand({
        FromEmailAddress: fromEmail,
        Destination: {
          ToAddresses: [toEmail],
        },
        ReplyToAddresses: [cleanParentEmail],
        Content: {
          Simple: {
            Subject: {
              Data: subject,
              Charset: "UTF-8",
            },
            Body: {
              Text: {
                Data: textBody,
                Charset: "UTF-8",
              },
              Html: {
                Data: htmlBody,
                Charset: "UTF-8",
              },
            },
          },
        },
      })
    );

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("SES send failed", error);
    return res.status(500).json({ error: "We couldn't send your request right now. Please try again." });
  }
};
