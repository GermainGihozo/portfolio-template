import type { APIRoute } from "astro";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST!,
  port: Number(process.env.EMAIL_PORT!),
  secure: true,
  auth: {
    user: process.env.EMAIL_USER!,
    pass: process.env.EMAIL_PASSWORD!,
  },
});
export const POST: APIRoute = async ({ request, redirect }) => {
  try {
    const data = await request.formData();
    const email = data.get("email")?.toString();
    const message = data.get("message")?.toString();
    if (!email || !message) return new Response(null, { status: 400 });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      text: message,
      subject: message.slice(0, 25),
    });

    return redirect("/", 307);
  } catch (error) {
    return new Response(null, { status: 400 });
  }
};
