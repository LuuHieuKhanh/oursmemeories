import type { Metadata } from "next";
import { Be_Vietnam_Pro, Literata, Patrick_Hand } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["vietnamese", "latin"],
  weight: ["400", "500", "600", "700"],
});

const literata = Literata({
  variable: "--font-literata",
  subsets: ["vietnamese", "latin"],
  style: ["italic", "normal"],
});

const patrickHand = Patrick_Hand({
  variable: "--font-patrick-hand",
  weight: "400",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "Digital Graduation Album",
  description: "A premium digital graduation album for five friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${literata.variable} ${patrickHand.variable} antialiased h-full`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-primary selection:bg-mint/30">
        {children}
      </body>
    </html>
  );
}
