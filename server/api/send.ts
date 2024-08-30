import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  const { fullname, email, message } = body;
  console.log("body", fullname, email, message)

  try {
    const data = await resend.emails.send({
      from: `${fullname} <onboarding@resend.dev>`,
      to: 'alfredthompsonovie@gmail.com',
      subject: `New Message from ${fullname}`,
      text: `${email} ${message}`,
    });

    return data;
  } catch (error) {
    return { error };
  }
});
