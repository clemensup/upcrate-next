import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export default async (req, res) => {
  const { senderMail, name, content, recipientMail } = req.body;

  // Check if fields are all filled
  if (
    senderMail === "" ||
    name === "" ||
    content === "" ||
    recipientMail === ""
  ) {
    res.status(403).send("");
    return;
  }

  const mailerRes = await mailer({
    senderMail,
    name,
    text: content,
    recipientMail,
  });
  res.send(mailerRes);
};

const mailer = ({ senderMail, name, text, recipientMail }) => {
  const from =
    name && senderMail ? `${name} <${senderMail}>` : `${name || senderMail}`;
  const message = {
    from: process.env.NEXT_PUBLIC_RECIPIENT_MAIL,
    to: `${recipientMail}`,
    subject: `New message from ${from}`,
    text,
    replyTo: from,
  };

  console.log(message);

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};
