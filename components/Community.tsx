import { socialLinks } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

export function Community() {
  return (
    <section className="border-b-4 border-ink bg-[#fff4df]" id="community">
      <div className="section-shell">
        <SectionHeading
          align="center"
          copy="Raid. Meme. Smoke the chart."
          eyebrow="Community"
          title="Pull up loud"
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {socialLinks.map((link) => (
            <a
              className="rough-panel group flex min-h-40 items-center justify-center p-6 text-center transition hover:-translate-y-1 hover:bg-candle hover:text-white"
              href={link.href}
              key={link.label}
            >
              <span className="font-display text-5xl leading-none [text-shadow:2px_2px_0_rgba(23,16,13,0.18)]">
                {link.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
