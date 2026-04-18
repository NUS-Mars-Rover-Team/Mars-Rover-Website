import Link from "next/link";
import heroBg from "../../data/aboutus/hero-bg.png";
import content from "../../data/aboutus/content.json";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Hero ── */}
      <section className="relative flex items-end justify-start pt-14 min-h-[55vh] md:min-h-[90vh]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#111",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.3) 100%), linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 max-w-6xl mx-auto px-8 pb-16 w-full">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#e05a1a" }}>
            Who We Are
          </p>
          <h1 className="font-extrabold leading-none mb-4" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
            Our Mission<br />&amp; Vision
          </h1>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            The principles and goals that drive the NUS Mars Rover Team forward.
          </p>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase mb-6" style={{ color: "#e05a1a" }}>
            Mission
          </p>
          <blockquote
            className="text-2xl font-medium leading-relaxed text-white pl-6"
            style={{ borderLeft: "3px solid #e05a1a" }}
          >
            {content.mission}
          </blockquote>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase mb-6" style={{ color: "#e05a1a" }}>
            Vision
          </p>
          <blockquote
            className="text-xl font-medium leading-relaxed text-gray-300 pl-6"
            style={{ borderLeft: "3px solid #e05a1a33" }}
          >
            {content.vision}
          </blockquote>
        </div>
      </section>

      {/* ── Outreach Goals ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-4xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase mb-3" style={{ color: "#e05a1a" }}>
            Outreach
          </p>
          <h2 className="text-3xl font-bold text-white mb-12">Outreach Goals</h2>
          <div className="flex flex-col gap-12">
            {content.outreachGoals.map((goal) => {
              const validImages = goal.images.filter((img): img is string => img !== null);
              return (
                <div key={goal.title} className="border-t border-white/5 pt-10">
                  <div className="w-8 h-1 rounded-full mb-4" style={{ backgroundColor: "#e05a1a" }} />
                  <h3 className="text-white font-semibold text-xl mb-3">{goal.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-6 max-w-2xl">{goal.description}</p>
                  {validImages.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {validImages.slice(0, 3).map((img, i) => (
                        <div
                          key={i}
                          className="rounded-xl overflow-hidden border border-white/5"
                          style={{ aspectRatio: "4/3", backgroundColor: "#111" }}
                        >
                          <img
                            src={img}
                            alt={`${goal.title} ${i + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Support Us CTA ── */}
      <section className="py-20 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#e05a1a" }}>
            Get Involved
          </p>
          <h2 className="text-3xl font-bold text-white mb-4">Support Our Journey</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-8">
            Interested in sponsoring, collaborating, or joining the team? We&apos;d love to connect.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 rounded-lg text-sm font-semibold text-white transition-colors"
            style={{ backgroundColor: "#e05a1a" }}
          >
            Contact Us
          </Link>
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
