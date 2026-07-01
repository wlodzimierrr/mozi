import { tokenomics } from "@/lib/constants";
import { SectionHeading } from "./SectionHeading";

export function Tokenomics() {
  return (
    <section className="border-b-4 border-ink" id="tokenomics">
      <div className="section-shell">
        <SectionHeading
          copy="Simple placeholders for launch day. Keep the facts loud, clean, and true."
          eyebrow="Tokenomics"
          title="Numbers with teeth"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tokenomics.map((item) => (
            <article className="rough-panel bg-candle p-6 text-white" key={item.label}>
              <p className="text-sm font-black uppercase text-white/75">{item.label}</p>
              <h3 className="mt-4 break-words font-display text-5xl leading-none [text-shadow:3px_3px_0_#17100d]">
                {item.value}
              </h3>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-lg border-4 border-ink bg-ember p-4 text-center font-black shadow-comic">
          Update these values before launch. Only show claims that are true.
        </p>
      </div>
    </section>
  );
}
