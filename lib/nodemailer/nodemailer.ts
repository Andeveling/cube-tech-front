import nodemailer from "nodemailer";
import { MailOptions } from "nodemailer/lib/json-transport";

const email = process.env.EMAIL_NODEMAILER;
const password = process.env.EMAIL_NODEMAILER_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: password,
  },
});

export const mailOptions: MailOptions = {
  from: email,

};
