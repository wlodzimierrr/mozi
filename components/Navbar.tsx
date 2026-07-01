"use client";

import { navLinks } from "@/lib/constants";
import { useState } from "react";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-4 border-ink bg-paper/[0.92] backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-10">
        <a href="#" className="font-display text-4xl text-candle [text-shadow:2px_2px_0_#17100d]">
          MOZI
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              className="text-sm font-black uppercase transition hover:text-candle"
              href={link.href}
              key={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#buy" className="btn-primary px-4 py-2 text-sm">
            Buy $MOZI
          </a>
        </div>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation"
          className="rounded-md border-2 border-ink bg-white px-3 py-2 font-black shadow-[3px_3px_0_#17100d] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open ? (
        <div className="border-t-2 border-ink bg-paper px-5 py-4 lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-3">
            {navLinks.map((link) => (
              <a
                className="rounded-md border-2 border-ink bg-white/70 px-4 py-3 font-black uppercase shadow-[3px_3px_0_#17100d]"
                href={link.href}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a className="btn-primary" href="#buy" onClick={() => setOpen(false)}>
              Buy $MOZI
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
