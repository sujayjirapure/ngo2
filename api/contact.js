import { Resend } from "resend";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {

    const resend = new Resend(process.env.RESEND_API_KEY);

    const {
      name,
      organization,
      email,
      phone,
      subject,
      message
    } = req.body;

    const response = await resend.emails.send({

      from: "Website Contact <onboarding@resend.dev>",

      to: process.env.OWNER_EMAIL,

      subject: subject || "New Contact Form Submission",

      html: `
        <h2>New Contact Message</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Organization:</strong> ${organization}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>

        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    console.log("Email sent:", response);

    return res.status(200).json({ success: true });

  } catch (error) {

    console.error("Email error:", error);

    return res.status(500).json({
      error: error.message
    });
  }
}