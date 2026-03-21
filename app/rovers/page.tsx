"use client";

import { useState } from "react";
import rovers from "../../data/rovers/rovers.json";

type Rover = {
  year: number;
  name: string;
  status: string;
  writeup: string;
  sarVideo: string | null;
  images: string[];
  pdrReport: string | null;
  sarReport: string | null;
  upcomingFeatures: string[];
};

const statusColors: Record<string, { bg: string; text: string }> = {
  upcoming: { bg: "#1a1205", text: "#f59e0b" },
  current:  { bg: "#0d1a0d", text: "#22c55e" },
  past:     { bg: "#111", text: "#888" },
};

export default function OurRovers() {
  const [activeYear, setActiveYear] = useState<number>((rovers as Rover[])[0].year);
  const rover = (rovers as Rover[]).find((r) => r.year === activeYear)!;
  const status = statusColors[rover.status] ?? statusColors.past;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Hero ── */}
      <section className="relative flex items-end justify-start pt-14" style={{ minHeight: "90vh" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/rovers/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            backgroundColor: "#111",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.3) 100%), linear-gradient(to top, rgba(10,10,10,0.95) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8 pb-16 w-full">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#e05a1a" }}>
            Engineering Excellence
          </p>
          <h1 className="font-extrabold leading-none mb-4" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
            Our Rovers
          </h1>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            Every year we build a new rover from the ground up. Explore each generation below.
          </p>
        </div>
      </section>

      {/* ── Year Selector + Content ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">

          {/* Year tabs */}
          <div className="flex gap-2 flex-wrap mb-12">
            {(rovers as Rover[]).map((r) => (
              <button
                key={r.year}
                onClick={() => setActiveYear(r.year)}
                className="px-5 py-2 rounded-full text-sm font-semibold border transition-colors"
                style={
                  activeYear === r.year
                    ? { backgroundColor: "#e05a1a", borderColor: "#e05a1a", color: "#fff" }
                    : { backgroundColor: "transparent", borderColor: "#333", color: "#888" }
                }
              >
                {r.year}
              </button>
            ))}
          </div>

          {/* Rover name + status badge */}
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl font-bold text-white">{rover.name}</h2>
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full capitalize"
              style={{ backgroundColor: status.bg, color: status.text, border: `1px solid ${status.text}33` }}
            >
              {rover.status}
            </span>
          </div>

          {/* Writeup */}
          <p className="text-gray-400 leading-relaxed max-w-3xl mb-10">{rover.writeup}</p>

          {/* Upcoming features (for upcoming rovers) */}
          {rover.status === "upcoming" && rover.upcomingFeatures.length > 0 && (
            <div className="mb-10">
              <h3 className="text-white font-semibold mb-4">Planned Features</h3>
              <ul className="space-y-2">
                {rover.upcomingFeatures.map((feat) => (
                  <li key={feat} className="flex items-start gap-3 text-gray-400 text-sm">
                    <span style={{ color: "#e05a1a" }} className="mt-0.5 shrink-0">▸</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* SAR Video */}
          {rover.sarVideo && (
            <div className="mb-10">
              <h3 className="text-white font-semibold mb-4">SAR Video</h3>
              <div
                className="relative w-full rounded-2xl overflow-hidden border border-white/5"
                style={{ paddingTop: "56.25%", backgroundColor: "#111" }}
              >
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={rover.sarVideo}
                  title={`${rover.name} SAR Video`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Photo gallery */}
          {rover.status !== "upcoming" && rover.images.length > 0 && (
            <div className="mb-10">
              <h3 className="text-white font-semibold mb-4">Gallery</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {rover.images.map((img, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden border border-white/5 relative"
                    style={{ aspectRatio: "4/3", backgroundColor: "#111" }}
                  >
                    <div
                      className="absolute inset-0"
                      style={{
                        backgroundImage: `url('/rovers/${rover.year}/${img}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-700 pointer-events-none">
                      {img}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Report buttons */}
          <div className="flex gap-4 flex-wrap">
            {[
              { label: "PDR Report", link: rover.pdrReport },
              { label: "SAR Report", link: rover.sarReport },
            ].map(({ label, link }) => (
              link ? (
                <a
                  key={label}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 rounded-lg text-sm font-medium text-white border transition-colors hover:border-[#e05a1a] hover:text-[#e05a1a]"
                  style={{ borderColor: "#333", backgroundColor: "#111" }}
                >
                  {label} ↗
                </a>
              ) : (
                <span
                  key={label}
                  className="px-6 py-2.5 rounded-lg text-sm font-medium border cursor-not-allowed"
                  style={{ borderColor: "#222", color: "#444", backgroundColor: "#0d0d0d" }}
                >
                  {label} — Coming Soon
                </span>
              )
            ))}
          </div>

        </div>
      </section>

      {/* ── Footer ── */}
      <footer
        className="border-t py-8 px-6 text-center text-gray-600 text-sm"
        style={{ borderColor: "#1a1a1a", backgroundColor: "#0a0a0a" }}
      >
        <p>© 2025 NUS Mars Rover Team · National University of Singapore</p>
      </footer>

    </div>
  );
}
