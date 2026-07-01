"use client";

import { CONTRACT_ADDRESS } from "@/lib/constants";
import Image from "next/image";
import { useState } from "react";
import { Candle } from "./Candle";

export function Hero() {
  const [copied, setCopied] = useState(false);

  async function copyAddress() {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(CONTRACT_ADDRESS);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = CONTRACT_ADDRESS;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section className="paper-noise relative min-h-[calc(100vh-76px)] overflow-hidden border-b-4 border-ink">
      <div className="chart-line wiggle-chart absolute left-0 top-24 h-28 w-[120%] bg-candle/[0.18]" />
      <Candle className="candle-float absolute left-[7%] top-28 hidden sm:inline-block" />
      <Candle className="candle-float absolute bottom-20 right-[8%] hidden rotate-6 sm:inline-block" />

      <div className="section-shell grid min-h-[calc(100vh-76px)] items-center gap-10 py-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-10 max-w-2xl">
          <span className="kicker">Red candle season</span>
          <h1 className="font-display text-[clamp(5rem,18vw,12.5rem)] leading-none text-candle [text-shadow:5px_5px_0_#17100d]">
            MOZI
          </h1>
          <p className="mt-1 font-display text-4xl leading-none text-ink sm:text-6xl">
            The red candle menace.
          </p>
          <p className="mt-6 max-w-xl text-lg font-bold leading-8 text-ink/[0.82] sm:text-xl">
            Born from blown trades, red candles, cigar smoke, and pure degen
            energy. MOZI is here to turn market pain into memes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a className="btn-primary" href="#buy">
              Buy $MOZI
            </a>
            <a className="btn-secondary" href="#chart">
              View Chart
            </a>
            <a className="btn-secondary" href="#community">
              Join Telegram
            </a>
          </div>

          <div className="mt-7 flex flex-col gap-3 rounded-lg border-4 border-ink bg-white/75 p-3 shadow-comic sm:flex-row sm:items-center">
            <span className="min-w-0 flex-1 break-all font-mono text-sm font-black">
              CA: {CONTRACT_ADDRESS}
            </span>
            <button className="btn-primary shrink-0 px-4 py-2 text-sm" onClick={copyAddress} type="button">
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>

        <div className="relative z-10">
          <div className="absolute -left-4 top-12 h-20 w-20 rounded-full bg-smoke/20 blur-xl smoke-puff" />
          <div className="absolute left-12 top-4 h-24 w-24 rounded-full bg-smoke/20 blur-xl smoke-puff" />
          <div className="absolute right-20 top-20 h-28 w-28 rounded-full bg-smoke/20 blur-xl smoke-puff" />
          <div className="comic-border relative overflow-hidden rounded-lg bg-[#f5dfbe]">
            <Image
              alt="MOZI mascot and red candle wordmark"
              className="h-auto w-full"
              height={720}
              priority
              src="/mozi-hero.jpeg"
              width={1280}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
