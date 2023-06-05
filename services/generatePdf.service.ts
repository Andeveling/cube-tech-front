import puppeteer from "puppeteer";

export async function generatePdf({ url }: { url: string }) {
  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: {
      width: 750,
      height: 500,
      deviceScaleFactor: 1,
      isMobile: true,
      hasTouch: false,
      isLandscape: false,
    },
  });
  const page = await browser.newPage();
  console.log(browser);
  await page.goto(url, { waitUntil: ["networkidle0"] });

  await page.emulateMediaType("screen");
  await page.evaluateHandle("document.fonts.ready");

  const pdf = await page.pdf({
    format: "A4",
    printBackground: true,
    margin: { left: "0.5cm", top: "2cm", right: "0.5cm", bottom: "2cm" },
  });
  await browser.close();
  return pdf;
}
