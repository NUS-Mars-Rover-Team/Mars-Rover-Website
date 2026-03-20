import teamData from "../../data/team/members.json";

type Member = {
  name: string;
  role: string;
  major: string;
  year: string;
  intro: string;
  contact: { email: string; linkedin: string };
  photo: string;
};

function PhotoPlaceholder({ src, name }: { src: string; name: string }) {
  return (
    <div
      className="relative overflow-hidden bg-[#1a1a1a]"
      style={{ aspectRatio: "1/1" }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url('/team/${src}')`,
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      />
      {/* Fallback initial if image missing */}
      <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-[#333] pointer-events-none select-none">
        {name.charAt(0)}
      </div>
    </div>
  );
}

export default function MeetTheTeam() {
  const { teamLead, members } = teamData as { teamLead: Member; members: Member[] };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Hero ── */}
      <section className="relative flex items-end justify-start pt-14" style={{ minHeight: "90vh" }}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/team/hero-bg.png')",
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
            The People Behind the Rover
          </p>
          <h1 className="font-extrabold leading-none mb-4" style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}>
            Meet the Team
          </h1>
          <p className="text-gray-400 max-w-md text-base leading-relaxed">
            30+ students from across NUS, united by a passion for robotics and space exploration.
          </p>
        </div>
      </section>

      {/* ── Team Lead ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase mb-8" style={{ color: "#e05a1a" }}>
            Team Lead
          </p>
          <div
            className="rounded-2xl overflow-hidden border grid grid-cols-1 md:grid-cols-3"
            style={{ borderColor: "#e05a1a33", backgroundColor: "#111" }}
          >
            {/* Photo */}
            <div className="md:col-span-1">
              <PhotoPlaceholder src={teamLead.photo} name={teamLead.name} />
            </div>
            {/* Info */}
            <div className="md:col-span-2 p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-2xl font-bold text-white">{teamLead.name}</h2>
                <span
                  className="text-xs font-semibold px-2 py-0.5 rounded-full"
                  style={{ backgroundColor: "#1a0d05", color: "#e05a1a", border: "1px solid #e05a1a33" }}
                >
                  {teamLead.role}
                </span>
              </div>
              <p className="text-sm text-gray-500 mb-4">{teamLead.major} · {teamLead.year}</p>
              <p className="text-gray-400 leading-relaxed mb-6">{teamLead.intro}</p>
              <div className="flex gap-3">
                <a
                  href={`mailto:${teamLead.contact.email}`}
                  className="text-xs px-4 py-2 rounded-lg border transition-colors text-[#888] border-[#2a2a2a] hover:text-[#e05a1a] hover:border-[#e05a1a]/30"
                >
                  Email
                </a>
                {teamLead.contact.linkedin !== "#" && (
                  <a
                    href={teamLead.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs px-4 py-2 rounded-lg border transition-colors text-[#888] border-[#2a2a2a] hover:text-[#e05a1a] hover:border-[#e05a1a]/30"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Members Grid ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0d0d0d" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase mb-8" style={{ color: "#e05a1a" }}>
            Members
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {members.map((member, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border border-white/5"
                style={{ backgroundColor: "#111" }}
              >
                {/* Photo */}
                <PhotoPlaceholder src={member.photo} name={member.name} />
                {/* Info */}
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold">{member.name}</h3>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0"
                      style={{ backgroundColor: "#1a0d05", color: "#e05a1a", border: "1px solid #e05a1a33" }}
                    >
                      {member.role}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">{member.major} · {member.year}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{member.intro}</p>
                  <div className="flex gap-2">
                    <a
                      href={`mailto:${member.contact.email}`}
                      className="text-xs px-3 py-1.5 rounded-lg border transition-colors text-[#666] border-[#222] hover:text-[#e05a1a] hover:border-[#e05a1a]/30"
                    >
                      Email
                    </a>
                    {member.contact.linkedin !== "#" && (
                      <a
                        href={member.contact.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs px-3 py-1.5 rounded-lg border transition-colors text-[#666] border-[#222] hover:text-[#e05a1a] hover:border-[#e05a1a]/30"
                      >
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>
              </div>
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
