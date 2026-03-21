import teamData from "../../data/team/members.json";

type Member = {
  name: string;
  role: string;
  major: string;
  intro: string;
  photo: string;
  isLead?: boolean;
};

type Subsystem = {
  name: string;
  members: Member[];
};

function PhotoPlaceholder({ src }: { src: string }) {
  const imgSrc = src.startsWith("http") ? src : src ? `/team/${src}` : "";
  return (
    <div
      className="relative overflow-hidden bg-[#1a1a1a]"
      style={{ aspectRatio: "1/1" }}
    >
      {imgSrc && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${imgSrc}')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        />
      )}
    </div>
  );
}

export default function MeetTheTeam() {
  const { leadership, subsystems } = teamData as { leadership: Member[]; subsystems: Subsystem[] };

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

      {/* ── Leadership ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase mb-8" style={{ color: "#e05a1a" }}>
            Leadership
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {leadership.map((leader, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden border"
                style={{ borderColor: "#e05a1a33", backgroundColor: "#111" }}
              >
                <PhotoPlaceholder src={leader.photo} />
                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-semibold">{leader.name}</h3>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0"
                      style={{ backgroundColor: "#e05a1a", color: "#fff" }}
                    >
                      {leader.role}
                    </span>
                  </div>
                  {leader.major && (
                    <p className="text-xs text-gray-500 mb-3">{leader.major}</p>
                  )}
                  {leader.intro && (
                    <p className="text-gray-500 text-sm leading-relaxed">{leader.intro}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Subsystem Sections ── */}
      {subsystems.map((subsystem, si) => (
        <section
          key={si}
          className="py-16 px-6"
          style={{ backgroundColor: si % 2 === 0 ? "#0d0d0d" : "#0a0a0a" }}
        >
          <div className="max-w-6xl mx-auto">
            <p className="text-sm font-medium tracking-widest uppercase mb-8" style={{ color: "#e05a1a" }}>
              {subsystem.name}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {subsystem.members.map((member, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden border"
                  style={{
                    backgroundColor: "#111",
                    borderColor: member.isLead ? "#e05a1a33" : "rgba(255,255,255,0.05)",
                  }}
                >
                  <PhotoPlaceholder src={member.photo} />
                  <div className="p-5">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-white font-semibold">{member.name}</h3>
                      <span
                        className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0"
                        style={
                          member.isLead
                            ? { backgroundColor: "#e05a1a", color: "#fff" }
                            : { backgroundColor: "#1a0d05", color: "#e05a1a", border: "1px solid #e05a1a33" }
                        }
                      >
                        {member.role}
                      </span>
                    </div>
                    {member.major && (
                      <p className="text-xs text-gray-500 mb-3">{member.major}</p>
                    )}
                    {member.intro && (
                      <p className="text-gray-500 text-sm leading-relaxed">{member.intro}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

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
