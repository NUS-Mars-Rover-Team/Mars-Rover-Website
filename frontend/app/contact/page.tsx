import contactData from "../../data/contact/contact.json";

const socials = [
  { label: "Email", href: `mailto:${contactData.email}`, display: contactData.email },
  { label: "Instagram", href: contactData.instagram, display: "@nusmarsteam" },
  { label: "LinkedIn", href: contactData.linkedin, display: "NUS Mars Rover Team" },
  { label: "YouTube", href: contactData.youtube, display: "NUS Mars Rover Team" },
];

export default function ContactUs() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Main Content ── */}
      <section className="flex-1 flex items-center justify-center pt-14 px-6 py-24">
        <div className="max-w-2xl w-full text-center">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#e05a1a" }}>
            Reach Out
          </p>
          <h1 className="font-extrabold mb-6" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}>
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed mb-14 max-w-lg mx-auto">
            {contactData.tagline}
          </p>

          {/* Contact cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="rounded-xl p-6 border text-left transition-colors group border-white/5 hover:border-[#e05a1a]/30"
                style={{ backgroundColor: "#111" }}
              >
                <p className="text-xs font-medium tracking-widest uppercase mb-2 text-[#555] group-hover:text-[#e05a1a] transition-colors">
                  {s.label}
                </p>
                <p className="text-white font-medium text-sm">{s.display}</p>
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
