import type { Metadata } from "next";
import {
  Barlow,
  Barlow_Condensed,
  Bellefair,
  Geist,
  Geist_Mono,
} from "next/font/google";
import "./globals.css";
import NavMenu from "./nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], // Loads all font weights
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
});

const barlow = Barlow({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-barlow",
});

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

export const metadata: Metadata = {
  title: "Space Tourism",
  description: "Space Tourism Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${barlowCondensed.className} ${barlow.variable} ${bellefair.variable} ${geistSans.variable} ${geistMono.variable} antialiased min-h-svh max-w-screen bg-blue-900 flex flex-col overflow-hidden`}
      >
        <NavMenu />
        <main className="flex gap-2 flex-1">{children}</main>
      </body>
    </html>
  );
}
