"use client";
import useScroll from "@/lib/hooks/use-scroll";
import { QuoteDocumentIcon } from "@/components/layout/Quote";
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
      <nav className="flex items-center justify-between max-w-screen-xl mx-5 h-28 xl:mx-auto">
        <Link
          href="/"
          className="flex items-center text-2xl font-display indicator"
        >
          <span className="indicator-item badge badge-primary">Alfa</span>
          <p className="bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent  drop-shadow-sm">
            Arqustik <br /> Quoter
          </p>
        </Link>
        <QuoteDocumentIcon />
      </nav>
    </header>
  );
}
