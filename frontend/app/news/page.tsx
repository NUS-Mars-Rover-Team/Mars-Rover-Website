"use client";

import { useEffect } from "react";
import { createImageMap, resolveImageUrl } from "../lib/imageUtils";
import events from "../../data/news/news.json";

const newsImageMap = createImageMap(require.context("../../data/news", false, /\.(png|jpe?g|svg|webp)$/));

type NewsEvent = {
  title: string;
  date: string;
  description: string;
  images: (string | null)[];
  link?: string;
  linkLabel?: string;
};

export default function News() {
  const sorted = [...(events as NewsEvent[])].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const eventId = (title: string) =>
    title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "");

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (!hash) return;
    const target = document.getElementById(hash);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Hero ── */}
      <section className="relative flex items-end justify-start pt-14 min-h-[55vh] md:min-h-[100vh]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${resolveImageUrl(newsImageMap, "hero-bg.png")})`,
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
            In the Field
          </p>
          <h1 className="font-extrabold leading-none mb-4" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
            News
          </h1>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            Showcases, competitions, and outreach events from the NUS Mars Rover Team.
          </p>
        </div>
      </section>

      {/* ── News List ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto space-y-16">
          {sorted.map((event) => {
            const validImages = event.images.filter((img): img is string => img !== null);
            return (
              <div key={event.title} id={eventId(event.title)} className="scroll-mt-24">
                <div className="mb-6">
                  <span
                    className="text-xs font-medium px-2 py-0.5 rounded-full inline-block mb-3"
                    style={{ backgroundColor: "#1a0d05", color: "#e05a1a", border: "1px solid #e05a1a33" }}
                  >
                    {new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                  </span>
                  <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
                  <p className="text-gray-400 max-w-2xl leading-relaxed">{event.description}</p>
                  {event.link && (
                    <a
                      href={event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-[#e05a1a] font-semibold underline decoration-[#e05a1a]/70 underline-offset-2 hover:text-orange-300"
                    >
                      {event.linkLabel ?? "Learn more"} ↗
                    </a>
                  )}
                </div>

                {validImages.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {validImages.map((img, i) => (
                      <div
                        key={i}
                        className="rounded-xl overflow-hidden border border-white/5"
                        style={{ aspectRatio: "4/3", backgroundColor: "#111" }}
                      >
                        <img
                          src={resolveImageUrl(newsImageMap, img)}
                          alt={`${event.title} ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-16 border-t border-white/5" />
              </div>
            );
          })}
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
