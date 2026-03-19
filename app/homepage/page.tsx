import events from "../../data/homepage/events";

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Hero ── */}
      <section
        className="relative flex items-end justify-start pt-14"
        style={{ minHeight: "90vh" }}
      >
        {/* Background rover image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/hero-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
            backgroundColor: "#111",
          }}
        />
        {/* Gradient overlay — dark on left and bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,10,10,0.92) 40%, rgba(10,10,10,0.2) 100%), linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)",
          }}
        />
        {/* Text */}
        <div className="relative z-10 max-w-6xl mx-auto px-8 pb-20 w-full">
          <p className="text-sm font-medium tracking-widest uppercase mb-4" style={{ color: "#e05a1a" }}>
            National University of Singapore
          </p>
          <h1
            className="font-extrabold leading-none mb-6"
            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
          >
            NUS Mars<br />Rover Team
          </h1>
          <p className="text-gray-300 max-w-md text-lg leading-relaxed mb-8">
            A multidisciplinary student team competing in the University Rover Challenge —
            building the next generation of autonomous planetary exploration systems.
          </p>
          <div className="flex gap-8">
            {[
              { label: "Members", value: "30+" },
              { label: "Years Active", value: "5+" },
            ].map((s) => (
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
              Who We Are
            </p>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">
              Engineers, Researchers,<br />and Explorers
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              The NUS Mars Rover Team is a student-run organisation at the National University of Singapore,
              dedicated to designing and building a fully functional Mars rover from the ground up.
              Our team spans disciplines from mechanical and electrical engineering to computer science and biology,
              bringing diverse expertise to every challenge.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              We compete annually in the <span className="text-white font-medium">University Rover Challenge (URC)</span> in
              Utah, USA — one of the most prestigious student robotics competitions in the world. As we constantly
              push boundaries every year, each iteration brings a more rugged chassis, more versatile robotic arm,
              cutting-edge autonav, more reliable GNSS and comms, advanced drones and sophisticated science systems
              that take our exploration further.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              {[
                { title: "Autonav", desc: "Autonomous GPS + terrain navigation" },
                { title: "Robotic Arm", desc: "6-DOF precision manipulator" },
                { title: "Science Mission", desc: "Soil & life detection systems" },
                { title: "Drone", desc: "Aerial reconnaissance unit" },
                { title: "GNSS & Comms", desc: "Navigation and communications systems" },
                { title: "Chassis", desc: "Rugged structural platform" },
              ].map((item) => (
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
                backgroundImage: "url('/rover-photo.png')",
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
            {/* Orange accent line */}
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
              System Acceptance Review
            </p>
            <h2 className="text-4xl font-bold text-white">Our 2025 SAR Video</h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              Watch our full System Acceptance Review submission for URC 2025 — showcasing every subsystem,
              our rover's capabilities, and the team behind it.
            </p>
          </div>
          {/* Video embed */}
          <div
            className="relative w-full rounded-2xl overflow-hidden border border-white/5"
            style={{ paddingTop: "56.25%", backgroundColor: "#111" }}
          >
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/RMnJwoxsRVg"
              title="NUS Mars Rover Team — SAR 2025"
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
                {event.link && (
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
              Our 2026 Submission
            </p>
            <h2 className="text-4xl font-bold text-white">igNUS 2026</h2>
            <p className="text-gray-400 mt-3 max-w-xl">
              A closer look at our 2026 rover — purpose-built for the extreme conditions of the Utah desert
              and the demands of the URC competition tasks.
            </p>
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
                  backgroundImage: "url('/rover-photo.png')",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              />
            </div>
            {/* Side smaller slots */}
            <div className="flex flex-col gap-4">
              {["rover-photo-2.png", "rover-photo-3.png"].map((img, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-2xl overflow-hidden border border-white/5 flex items-center justify-center"
                  style={{ backgroundColor: "#111", minHeight: "140px" }}
                >
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `url('/${img}')`,
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
            {["rover-photo-4.png", "rover-photo-5.png", "rover-photo-6.png", "rover-photo-7.png"].map((img, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden border border-white/5 relative"
                style={{ aspectRatio: "1/1", backgroundColor: "#111" }}
              >
                <div
                  className="w-full h-full absolute inset-0"
                  style={{
                    backgroundImage: `url('/${img}')`,
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
            Get Involved
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">Join Us on Our Journey</h2>
          <p className="text-gray-400 max-w-md mx-auto mb-10">
            Follow our progress, reach out to collaborate, or join the team — we&apos;re always looking for passionate people.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: "Email", href: "mailto:nusmarsteam@gmail.com" },
              { label: "Instagram", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "YouTube", href: "#" },
            ].map((social) => (
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
