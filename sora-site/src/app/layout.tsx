import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sora 2 | Unlimited Cinematic Video Generation",
  description:
    "Sora 2 delivers unrestricted, watermark-free video generation for creators who want cinematic visuals without compromises.",
  openGraph: {
    title: "Sora 2 — Watermark-free AI Video Generation",
    description:
      "Build immersive stories with unlimited exports, 4K-ready renders, and zero watermarks. Sora 2 gives you the creative canvas you deserve.",
    url: "https://agentic-e645cccc.vercel.app",
    images: [
      {
        url: "https://agentic-e645cccc.vercel.app/og-preview.png",
        width: 1200,
        height: 630,
        alt: "Sora 2 cinematic mockup",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sora 2 — Watermark-free AI Video Generation",
    description:
      "Direct your next story with unlimited exports and no watermarks. Sora 2 is your cinematic AI studio.",
    images: ["https://agentic-e645cccc.vercel.app/og-preview.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="relative flex min-h-screen flex-col bg-background">
          <div className="pointer-events-none fixed inset-0 -z-10 h-full w-full bg-[radial-gradient(circle_at_top,_rgba(112,89,255,0.25),_transparent_55%)]" />
          {children}
        </div>
      </body>
    </html>
  );
}
