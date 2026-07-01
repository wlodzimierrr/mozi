type CandleProps = {
  className?: string;
};

export function Candle({ className = "" }: CandleProps) {
  return (
    <span
      aria-hidden="true"
      className={`relative inline-block h-14 w-5 rounded-sm border-2 border-ink bg-candle shadow-[3px_3px_0_#17100d] ${className}`}
    >
      <span className="absolute left-1/2 top-[-18px] h-4 w-0.5 -translate-x-1/2 bg-ink" />
      <span className="absolute bottom-[-18px] left-1/2 h-4 w-0.5 -translate-x-1/2 bg-ink" />
      <span className="absolute left-1 top-1 h-9 w-1 rounded-full bg-white/50" />
    </span>
  );
}
