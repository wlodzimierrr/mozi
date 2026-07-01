import { chartLinks } from "@/lib/constants";
import { Candle } from "./Candle";
import { SectionHeading } from "./SectionHeading";

export function ChartSection() {
  return (
    <section className="relative border-b-4 border-ink" id="chart">
      <Candle className="candle-float absolute left-8 top-16 hidden rotate-3 md:inline-block" />
      <div className="section-shell">
        <SectionHeading align="center" eyebrow="Chart" title="Watch the Candles" />

        <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-lg border-4 border-ink bg-ink shadow-comic">
          <div className="flex items-center gap-2 border-b-4 border-ink bg-candle px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-ember" />
            <span className="h-3 w-3 rounded-full bg-white" />
            <span className="h-3 w-3 rounded-full bg-ink" />
          </div>
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-[#231814] p-8">
            <div className="absolute inset-x-0 top-1/2 h-24 -translate-y-1/2 bg-candle/20 chart-line" />
            <div className="relative z-10 text-center">
              <p className="font-display text-5xl text-white [text-shadow:3px_3px_0_#d71919] sm:text-7xl">
                Chart embed coming soon
              </p>
              <p className="mt-4 font-bold text-white/70">The candles are warming up.</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          {chartLinks.map((link) => (
            <a className="btn-secondary" href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
