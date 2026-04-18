import contactData from "../../data/contact/contact.json";

const MailIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 7l10 7 10-7" />
  </svg>
);

const InstagramIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4.5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const YouTubeIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const socialLinks = [
  {
    label: "Instagram",
    href: contactData.instagram,
    display: "@nusroverteam",
    Icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: contactData.linkedin,
    display: "NUS Mars Rover Team",
    Icon: LinkedInIcon,
  },
  {
    label: "YouTube",
    href: contactData.youtube,
    display: "@nusmarsroverteam",
    Icon: YouTubeIcon,
  },
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

          {/* Email — display only, not a link */}
          <div
            className="rounded-xl p-6 border border-white/5 text-left mb-4 flex items-center gap-4"
            style={{ backgroundColor: "#111" }}
          >
            <span className="text-[#555]"><MailIcon /></span>
            <div>
              <p className="text-xs font-medium tracking-widest uppercase mb-1 text-[#555]">Email</p>
              <p className="text-white font-medium text-sm">{contactData.email}</p>
            </div>
          </div>

          {/* Social links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {socialLinks.map(({ label, href, display, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl p-6 border text-left transition-colors group border-white/5 hover:border-[#e05a1a]/30 flex items-center gap-4"
                style={{ backgroundColor: "#111" }}
              >
                <span className="text-[#555] group-hover:text-[#e05a1a] transition-colors"><Icon /></span>
                <div>
                  <p className="text-xs font-medium tracking-widest uppercase mb-1 text-[#555] group-hover:text-[#e05a1a] transition-colors">
                    {label}
                  </p>
                  <p className="text-white font-medium text-sm">{display}</p>
                </div>
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
