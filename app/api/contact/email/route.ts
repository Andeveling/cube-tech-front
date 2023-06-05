import { transporter, mailOptions } from "@/lib/nodemailer/nodemailer";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const mailSend = await transporter.sendMail({
      ...mailOptions,
      subject: "Arqustik Presupuesto",
      text: "Esto es un texto de la app de arqustik",
      html: "<h1> Title </h1> <p>Description</p>",
    });

    return NextResponse.json(mailSend);
  } catch (error) {
    return NextResponse.json(error);
  }
}
