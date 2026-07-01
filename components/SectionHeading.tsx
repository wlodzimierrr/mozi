type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className="kicker">{eyebrow}</span>
      <h2 className="font-display text-5xl leading-none text-candle [text-shadow:3px_3px_0_#17100d] sm:text-7xl">
        {title}
      </h2>
      {copy ? <p className="mt-5 text-lg font-bold leading-8 text-ink/[0.78]">{copy}</p> : null}
    </div>
  );
}
