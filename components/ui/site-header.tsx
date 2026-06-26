"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Soluções", href: "#solucoes" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
  { label: "Contato", href: "#contato" },
];

const WA =
  "https://wa.me/5511000000000?text=" +
  encodeURIComponent(
    "Olá, vim pelo site e gostaria de agendar um atendimento."
  );

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating pill header */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl">
        <div className="bg-[rgba(26,6,3,0.93)] backdrop-blur-md rounded-full px-5 md:px-7 h-14 flex items-center justify-between shadow-[0_4px_32px_rgba(0,0,0,0.28)]">

          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 shrink-0">
            <Image
              src="/logo.png"
              alt="Oliveira Quintal Advocacia"
              width={22}
              height={32}
              className="object-contain brightness-0 invert opacity-80"
            />
            <div className="flex flex-col leading-none">
              <span className="font-lapidary text-[11.5px] tracking-[0.18em] uppercase text-white/90 font-semibold leading-none">
                Oliveira Quintal
              </span>
              <span className="text-[6.5px] tracking-[0.38em] uppercase text-[#bb2017]/80 font-medium mt-[3px]">
                Advocacia
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] font-medium text-white/70 hover:text-white transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={WA}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:block bg-[#bb2017] text-white text-[10px] font-bold uppercase tracking-widest px-5 py-2 rounded-full hover:bg-[#d4251b] transition-colors whitespace-nowrap"
          >
            Agendar Consulta
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Menu"
            onClick={() => setOpen(!open)}
            className="md:hidden text-white/80 p-1"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <div className="mt-2 bg-[rgba(26,6,3,0.96)] backdrop-blur-md rounded-2xl overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.32)]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-sm font-medium text-white/75 hover:text-white border-b border-white/[.06] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="px-5 py-4">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#bb2017] text-white text-[11px] font-bold uppercase tracking-widest px-5 py-3 text-center rounded-full hover:bg-[#d4251b] transition-colors"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
