import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const minecraftFive = localFont({
  src: "../public/fonts/minecraft-five-bold.otf",
  weight: "700",
  style: "normal",
  variable: "--font-minecraft",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OR Beyond",
  description: "Official website for the Origin Realms Beyond modpack",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${minecraftFive.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
