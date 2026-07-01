export function Manifesto() {
  return (
    <section className="border-b-4 border-ink bg-ink text-white">
      <div className="section-shell">
        <div className="relative overflow-hidden rounded-lg border-4 border-white bg-candle p-8 shadow-[8px_8px_0_#ffcc4d] sm:p-12">
          <div className="chart-line absolute inset-x-[-10%] top-8 h-20 bg-white/15" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="mb-4 inline-flex rounded-full border-2 border-white bg-ink px-4 py-1 text-sm font-black uppercase">
                Manifesto
              </span>
              <p className="font-display text-5xl leading-[0.95] [text-shadow:4px_4px_0_#17100d] sm:text-8xl">
                No suits.
                <br />
                No boring roadmap.
                <br />
                No fake utility essays.
                <br />
                Just smoke, candles, memes, and community.
              </p>
            </div>
            <a className="btn-secondary bg-ember" href="#community">
              Join the MOZI Army
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
