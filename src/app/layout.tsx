import type { Metadata } from "next";
import { Outfit, Inter, Patrick_Hand } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
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
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${patrickHand.variable} antialiased h-full`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-primary selection:bg-mint/30">
        {children}
      </body>
    </html>
  );
}
