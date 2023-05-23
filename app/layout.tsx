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
  title: "Arqustik - Soluciones termoacusticas en tus ventanas",
  description:
    "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
  twitter: {
    card: "summary_large_image",
    title: "Precedent - Building blocks for your Next.js project",
    description:
      "Precedent is the all-in-one solution for your Next.js project. It includes a design system, authentication, analytics, and more.",
    creator: "@steventey",
  },
  metadataBase: new URL("https://precedent.dev"),
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
