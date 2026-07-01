import { Candle } from "./Candle";
import { SectionHeading } from "./SectionHeading";

const steps = [
  {
    title: "Create a wallet",
    copy: "Grab a wallet, secure the keys, and prepare your finest panic-buying thumb.",
  },
  {
    title: "Buy the chain's gas token",
    copy: "You need gas before the candle can cough smoke. Keep a little extra for swaps.",
  },
  {
    title: "Swap for $MOZI",
    copy: "Paste the official contract, check the ticker twice, and swap into the chaos.",
  },
  {
    title: "Join the chaos",
    copy: "Pull up to the community, raid the timeline, and bring memes with volume.",
  },
];

export function HowToBuy() {
  return (
    <section className="relative border-b-4 border-ink bg-[#fff4df]" id="buy">
      <Candle className="candle-float absolute right-8 top-12 hidden md:inline-block" />
      <div className="section-shell">
        <SectionHeading eyebrow="How to Buy" title="Four steps. Zero suits." />
        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article className="rough-panel p-6" key={step.title}>
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-md border-4 border-ink bg-ember font-display text-4xl shadow-[4px_4px_0_#17100d]">
                {index + 1}
              </div>
              <h3 className="font-display text-4xl leading-none">{step.title}</h3>
              <p className="mt-4 font-bold leading-7 text-ink/[0.74]">{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
