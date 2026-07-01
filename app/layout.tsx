import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOZI — The Red Candle Menace",
  description:
    "MOZI is a meme coin born from red candles, degen chaos, cigar smoke, and community memes.",
  openGraph: {
    title: "MOZI — The Red Candle Menace",
    description:
      "MOZI is a meme coin born from red candles, degen chaos, cigar smoke, and community memes.",
    images: [
      {
        url: "/mozi-hero.jpeg",
        width: 1200,
        height: 630,
        alt: "MOZI red candle meme coin hero art",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MOZI — The Red Candle Menace",
    description:
      "MOZI is a meme coin born from red candles, degen chaos, cigar smoke, and community memes.",
    images: ["/mozi-hero.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
