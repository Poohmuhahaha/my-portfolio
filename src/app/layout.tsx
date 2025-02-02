import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Inter } from 'next/font/google'
import ReactLenis from "lenis/react";

const inter = Inter({
  subsets: ['latin'],
  weight: '100',
  variable: '--font-inter'
});
const inter2 = Inter({ 
  subsets: ['latin'],
  weight: '200',
  variable: '--font-inter2'
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
  title: "PHUWADON THONTRA Portfolio",
  description: "Pooh's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <ReactLenis root>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}>{children}
      </body>
      </ReactLenis>
    </html>

  );
}
