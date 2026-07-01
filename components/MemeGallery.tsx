import { SectionHeading } from "./SectionHeading";

const memes = ["X banners", "Telegram stickers", "Profile pictures", "Community memes"];

export function MemeGallery() {
  return (
    <section className="border-b-4 border-ink bg-[#fff4df]" id="memes">
      <div className="section-shell">
        <SectionHeading
          align="center"
          copy="A launch needs ammunition. Fill these slots with community art, raid banners, sticker packs, and every cursed chart reaction that survives the group chat."
          eyebrow="Memes"
          title="Meme Factory"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {memes.map((meme, index) => (
            <article className="rough-panel group overflow-hidden" key={meme}>
              <div className="relative flex aspect-[4/3] items-center justify-center bg-paper">
                <div className="chart-line absolute left-0 top-1/3 h-16 w-full bg-candle/25 transition group-hover:scale-110" />
                <div className="relative z-10 rounded-md border-4 border-ink bg-candle px-5 py-4 font-display text-4xl text-white shadow-comic [text-shadow:2px_2px_0_#17100d]">
                  {index % 2 === 0 ? "MOZI" : "$MOZI"}
                </div>
              </div>
              <div className="border-t-4 border-ink p-5">
                <h3 className="font-display text-4xl leading-none">{meme}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
