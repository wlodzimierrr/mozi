import { CONTRACT_ADDRESS, socialLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="section-shell py-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.3fr_1fr] lg:items-start">
          <div>
            <a href="#" className="font-display text-6xl text-candle [text-shadow:3px_3px_0_#fff]">
              MOZI
            </a>
            <p className="mt-3 font-bold text-white/[0.65]">The red candle menace.</p>
          </div>

          <div>
            <p className="text-sm font-black uppercase text-white/50">Contract address</p>
            <p className="mt-2 break-all font-mono text-sm font-black text-white">{CONTRACT_ADDRESS}</p>
            <p className="mt-5 max-w-2xl text-sm font-bold leading-6 text-white/[0.58]">
              $MOZI is a meme coin with no intrinsic value or expectation of
              financial return. Crypto is volatile. Do your own research.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:justify-end">
            {socialLinks.map((link) => (
              <a
                className="rounded-md border-2 border-white px-3 py-2 text-sm font-black uppercase transition hover:bg-white hover:text-ink"
                href={link.href}
                key={link.label}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
