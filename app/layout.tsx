import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import NavLinks from "./NavLinks";
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
  title: "NUS Mars Rover Team",
  description: "Engineering autonomous planetary exploration systems for the University Rover Challenge",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav
          className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 border-b border-white/5"
          style={{ backdropFilter: "blur(12px)" }}
        >
          <div className="max-w-6xl mx-auto px-6 flex items-center h-14">
            {/* Brand */}
            <Link href="/homepage" className="flex items-center gap-3 shrink-0 mr-4">
              <div
                className="w-8 h-8 rounded-md flex items-center justify-center text-white font-bold text-xs"
                style={{ background: "linear-gradient(135deg, #e05a1a, #b84210)" }}
              >
                NUS
              </div>
              <span className="font-semibold text-white text-sm">Mars Rover Team</span>
            </Link>

            {/* Divider */}
            <div className="w-px h-5 bg-white/10 mr-2 shrink-0" />

            {/* Page tabs */}
            <NavLinks />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
