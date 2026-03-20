import pubData from "../../data/publications/publications.json";

const typeBadge: Record<string, { bg: string; text: string }> = {
  SAR:   { bg: "#0d1a0d", text: "#22c55e" },
  PDR:   { bg: "#1a1205", text: "#f59e0b" },
  Other: { bg: "#111",    text: "#888" },
};

export default function Publications() {
  const years = [...new Set(pubData.reports.map((r) => r.year))].sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Hero ── */}
      <section className="relative flex items-end justify-start pt-14" style={{ minHeight: "90vh" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/publications/hero-bg.png')",
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
            Research &amp; Documentation
          </p>
          <h1 className="font-extrabold leading-none mb-4" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
            Publications
          </h1>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            Our competition reports, design reviews, and open-source code.
          </p>
        </div>
      </section>

      {/* ── GitHub CTA ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">
          <div
            className="rounded-2xl p-8 border flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            style={{ backgroundColor: "#111", borderColor: "#e05a1a33" }}
          >
            <div>
              <p className="text-sm font-medium tracking-widest uppercase mb-2" style={{ color: "#e05a1a" }}>
                Open Source
              </p>
              <h2 className="text-2xl font-bold text-white mb-2">View Our Code on GitHub</h2>
              <p className="text-gray-500 text-sm max-w-lg">
                All of our software — from autonomous navigation to robotic arm control — is open-source and available on our GitHub organisation.
              </p>
            </div>
            <a
              href={pubData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-colors hover:opacity-90"
              style={{ backgroundColor: "#e05a1a" }}
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* ── Reports by Year ── */}
      <section className="pb-16 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto space-y-12">
          {years.map((year) => {
            const yearReports = pubData.reports.filter((r) => r.year === year);
            return (
              <div key={year}>
                <h2 className="text-xl font-bold text-white mb-6 pb-3 border-b border-white/5">{year}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {yearReports.map((report) => {
                    const badge = typeBadge[report.type] ?? typeBadge.Other;
                    return (
                      <div
                        key={report.title}
                        className="rounded-xl p-6 border border-white/5 flex flex-col gap-3"
                        style={{ backgroundColor: "#111" }}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className="text-xs font-semibold px-2 py-0.5 rounded-full"
                            style={{ backgroundColor: badge.bg, color: badge.text, border: `1px solid ${badge.text}33` }}
                          >
                            {report.type}
                          </span>
                          <h3 className="text-white font-semibold">{report.title}</h3>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed flex-1">{report.description}</p>
                        {report.link ? (
                          <a
                            href={report.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium self-start px-4 py-2 rounded-lg border transition-colors text-[#888] border-[#2a2a2a] hover:text-[#e05a1a] hover:border-[#e05a1a]/30"
                          >
                            View / Download ↗
                          </a>
                        ) : (
                          <span className="text-xs text-[#444] self-start">Coming Soon</span>
                        )}
                      </div>
                    );
                  })}
                </div>
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
