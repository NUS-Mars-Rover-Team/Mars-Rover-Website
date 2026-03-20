import content from "../../data/homepage/content.json";
import events from "../../data/homepage/events.json";

export default function Homepage() {
  const { hero, about, sarVideo, gallery, joinUs } = content;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Hero ── */}
      <section
        className="relative flex items-end justify-start pt-14"
        style={{ minHeight: "90vh" }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/homepage/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundColor: "#111",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.2) 100%), linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8 pb-20 w-full">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#e05a1a" }}>
            {hero.overline}
          </p>
          <h1
            className="font-extrabold leading-none mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            {hero.title.split(" ").slice(0, 2).join(" ")}<br />{hero.title.split(" ").slice(2).join(" ")}
          </h1>
          <p className="text-gray-300 max-w-md text-lg leading-relaxed mb-8">
            {hero.subtitle}
          </p>
          <div className="flex gap-8">
            {hero.stats.map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold" style={{ color: "#e05a1a" }}>{s.value}</div>
                <div className="text-sm text-gray-400 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the Team ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#e05a1a" }}>
              {about.overline}
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              {about.heading}
            </h2>
            {about.paragraphs.map((para, i) => (
              <p key={i} className="text-gray-400 leading-relaxed mb-4">
                {para}
              </p>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {about.subsystems.map((item) => (
                <div key={item.title} className="rounded-lg p-4 border border-white/5" style={{ backgroundColor: "#141414" }}>
                  <div className="text-sm font-semibold text-white mb-1">{item.title}</div>
                  <div className="text-xs text-gray-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
          {/* Rover image panel */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "4/3" }}>
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url('/homepage/${gallery.featuredImage}')`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundColor: "#111",
              }}
            />
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ boxShadow: "inset 0 0 60px rgba(0,0,0,0.4)" }}
            />
            <div
              className="absolute bottom-0 left-0 right-0 h-1"
              style={{ background: "linear-gradient(to right, #e05a1a, transparent)" }}
            />
          </div>
        </div>
      </section>

      {/* ── SAR Video ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#e05a1a" }}>
              {sarVideo.overline}
            </p>
            <h2 className="text-4xl font-bold text-white">{sarVideo.heading}</h2>
            <p className="text-gray-400 mt-3 max-w-xl">{sarVideo.description}</p>
          </div>
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-white/5"
            style={{ paddingTop: "56.25%", backgroundColor: "#111" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src={sarVideo.embedUrl}
              title={sarVideo.heading}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* ── Latest News & Updates ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#e05a1a" }}>
              What&apos;s Happening
            </p>
            <h2 className="text-4xl font-bold text-white">Latest News &amp; Updates</h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              Stay up to date with milestones, competition results, and team announcements.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.title}
                className="rounded-xl p-6 border border-white/5 flex flex-col gap-3"
                style={{ backgroundColor: "#111" }}
              >
                <span
                  className="text-xs font-medium px-2 py-0.5 rounded-full self-start"
                  style={{ backgroundColor: "#1a0d05", color: "#e05a1a", border: "1px solid #e05a1a33" }}
                >
                  {new Date(event.date).toLocaleDateString("en-GB", { month: "short", year: "numeric" })}
                </span>
                <h3 className="text-white font-semibold leading-snug">{event.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1">{event.description}</p>
                {"link" in event && event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium mt-1 self-start"
                    style={{ color: "#e05a1a" }}
                  >
                    Watch →
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Rover Gallery ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#e05a1a" }}>
              {gallery.overline}
            </p>
            <h2 className="text-4xl font-bold text-white">{gallery.heading}</h2>
            <p className="text-gray-400 mt-3 max-w-xl">{gallery.description}</p>
          </div>
          {/* Gallery grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Featured large image */}
            <div
              className="md:col-span-2 rounded-2xl overflow-hidden border border-white/5"
              style={{ aspectRatio: "16/9", backgroundColor: "#111" }}
            >
              <div
                className="w-full h-full"
                style={{
                  backgroundImage: `url('/homepage/${gallery.featuredImage}')`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </div>
            {/* Side smaller slots */}
            <div className="flex flex-col gap-4">
              {gallery.sideImages.map((img, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center"
                  style={{ backgroundColor: "#111", minHeight: "140px" }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url('/homepage/${img}')`,
                      backgroundSize: "contain",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center",
                      minHeight: "140px",
                    }}
                  />
                  <div className="absolute text-xs text-gray-600 pointer-events-none">
                    Add {img}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Bottom row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
            {gallery.bottomImages.map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-white/5 relative"
                style={{ aspectRatio: "1/1", backgroundColor: "#111" }}
              >
                <div
                  className="w-full h-full absolute inset-0"
                  style={{
                    backgroundImage: `url('/homepage/${img}')`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-xs text-gray-700 pointer-events-none">
                  Add {img}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join Us on Our Journey ── */}
      <section className="py-24 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#e05a1a" }}>
            {joinUs.overline}
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">{joinUs.heading}</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-10">{joinUs.description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {joinUs.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border text-sm font-medium transition-colors text-[#ccc] border-[#2a2a2a] bg-[#111] hover:text-[#e05a1a] hover:border-[#e05a1a]/30"
              >
                {social.label}
              </a>
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
