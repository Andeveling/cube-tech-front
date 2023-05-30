import Footer from "@/components/layout/footer";
import Nav from "@/components/layout/nav";
import { Providers } from "@/lib/redux/provider";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { Suspense } from "react";
import { inter, sfPro } from "./fonts";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Arqustik - Soluciones termo-acusticas en tus ventanas",
  description:
    "Somos una empresa dedicada al diseño, fabricación e instalación de ventanas y puertas con perfiles en PVC, brindando soluciones a nuestros clientes para mejorar el confort en sus espacios.",
  metadataBase: new URL("https://www.arqustik.com"),
  themeColor: "#FFF",
};

type Props = {
  children: React.ReactNode;
};

export default async function RootLayout({ children }: Props) {
  return (
    <html lang="en" data-theme="lofi">
      <body className={cx(sfPro.variable, inter.variable)}>
        <Providers>
          {/* <div className="fixed w-full h-screen bg-gradient-to-br from-indigo-50 via-white to-cyan-100" /> */}
          <Suspense fallback="...">
            {/* @ts-expect-error Server Component */}
            <Nav />
          </Suspense>
          <main className="w-full min-h-screen py-32">{children}</main>
          <Footer />
          <Analytics />
        </Providers>
        <Toaster position="bottom-right" reverseOrder={false} />
      </body>
    </html>
  );
}
