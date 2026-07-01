import { SectionHeading } from "./SectionHeading";

const features = [
  {
    title: "Red Candle Energy",
    icon: "▮",
    copy: "For every trader who watched a chart bleed and still found a meme in the wreckage.",
  },
  {
    title: "Built for Degens",
    icon: "◉",
    copy: "Fast-moving, loud, and allergic to boring whitepapers with tiny serif footnotes.",
  },
  {
    title: "Community Powered",
    icon: "✕",
    copy: "Raids, jokes, stickers, chart screams, and the kind of timeline chaos money cannot buy.",
  },
];

export function About() {
  return (
    <section className="border-b-4 border-ink" id="about">
      <div className="section-shell">
        <SectionHeading
          copy="MOZI is a meme coin for traders who got smoked by red candles and came back laughing. No suits. No boring essays. Just chart chaos, memes, and community."
          eyebrow="About"
          title="What is MOZI?"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <article className="rough-panel p-6 transition hover:-translate-y-1" key={feature.title}>
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-ink bg-candle font-display text-5xl text-white shadow-[4px_4px_0_#17100d]">
                {feature.icon}
              </div>
              <h3 className="font-display text-4xl leading-none">{feature.title}</h3>
              <p className="mt-4 font-bold leading-7 text-ink/75">{feature.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
