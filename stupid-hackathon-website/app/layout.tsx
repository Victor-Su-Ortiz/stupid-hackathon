import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Stupid Hackathon | Build Something Gloriously Useless",
  description: "Join the most absurd hackathon ever. Build dumb things, win a Labubu, and celebrate the joy of pointless programming. In collaboration with AI Valley.",
  keywords: ["hackathon", "stupid hackathon", "AI Valley", "EF", "programming", "comedy", "tech event"],
  authors: [{ name: "AI Valley", url: "https://aivalley.io" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://stupidhackathon.com",
    title: "The Stupid Hackathon | Build Something Gloriously Useless",
    description: "Join the most absurd hackathon ever. Build dumb things, win a Labubu, and celebrate the joy of pointless programming. In collaboration with AI Valley.",
    siteName: "The Stupid Hackathon",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Stupid Hackathon - In collaboration with AI Valley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Stupid Hackathon | Build Something Gloriously Useless",
    description: "Join the most absurd hackathon ever. In collaboration with AI Valley.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
