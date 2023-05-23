"use client";
import useScroll from "@/lib/hooks/use-scroll";
import { QuoteDocument } from "@/components/layout/Quote";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <header
      className={`fixed top-0 w-full  ${
        scrolled
          ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
          : "bg-white/0"
      } z-30 transition-all`}
    >
      <nav className="flex items-center justify-between h-20 max-w-screen-xl mx-5 xl:mx-auto">
        <Link href="/" className="flex items-center text-2xl font-display">
          <Image
            src="/logo.png"
            alt="Precedent logo"
            width="30"
            height="30"
            className="mr-2 rounded-sm"
          ></Image>

          <p>Arqustik Quoter</p>
        </Link>
        <QuoteDocument />
      </nav>
  
    </header>
  );
}
