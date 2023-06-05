import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

import { NextResponse } from "next/server";
import { generatePdf } from "@/services/generatePdf.service";
import puppeteer from "puppeteer";

type UrlBody = {
  url: string;
};

const testUrl = "https://www.youtube.com/";

export async function POST(request: Request) {
  try {
    const pdfBuffer = await generatePdf({ url: testUrl });
    const response = NextResponse.next();
    response.headers.set("Content-Type", "application/pdf");
    return response;
  } catch (error) {
    return NextResponse.error();
  }
}
