import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { name, email, message } = req.body;

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth:{
        user: "sharmapratibha1507@gmail.com",
        pass: "APP_PASSWORD"
      }
    });

    const mailOptions = {
      from: "sharmapratibha1507@gmail.com",
      to: email,   
      subject: `Hello ${name}`,
      text: message
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message
    });

  }

}