import nodemailer from 'nodemailer';

export async function POST(req) {
  const { name, email, service, date } = await req.json();

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const ownerMailOptions = {
    from: process.env.EMAIL_USER,
    to: 'owner@example.com',
    subject: `New Booking: ${service}`,
    text: `Name: ${name}\nEmail: ${email}\nService: ${service}\nAppointment Date: ${date}`,
  };

  const customerMailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Booking Confirmation',
    text: `Thank you, ${name}, for booking our ${service} service.\nYour appointment is scheduled for ${date}.`,
  };

  try {
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(customerMailOptions);
    return new Response(JSON.stringify({ message: 'Booking successful' }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
