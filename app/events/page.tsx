import events from "../../data/events/events.json";

export default function Events() {
  const sorted = [...events].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Hero ── */}
      <section className="relative flex items-end justify-start pt-14" style={{ minHeight: "90vh" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/events/hero-bg.png')",
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
            Events
          </h1>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            Showcases, competitions, and outreach events from the NUS Mars Rover Team.
          </p>
        </div>
      </section>

      {/* ── Events List ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto space-y-16">
          {sorted.map((event) => (
            <div key={event.title}>
              {/* Event header */}
              <div className="mb-6">
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full inline-block mb-3"
                  style={{ backgroundColor: "#1a0d05", color: "#e05a1a", border: "1px solid #e05a1a33" }}
                >
                  {new Date(event.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <h2 className="text-2xl font-bold text-white mb-2">{event.title}</h2>
                <p className="text-gray-400 max-w-2xl leading-relaxed">{event.description}</p>
              </div>

              {/* Photo grid */}
              {event.images.length > 0 && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {event.images.map((img, i) => (
                    <div
                      key={i}
                      className="rounded-xl overflow-hidden border border-white/5 relative"
                      style={{ aspectRatio: "4/3", backgroundColor: "#111" }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `url('/events/${img}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-700 pointer-events-none">
                        {img.split("/").pop()}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Divider */}
              <div className="mt-16 border-t border-white/5" />
            </div>
          ))}
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
