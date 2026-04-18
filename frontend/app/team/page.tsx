"use client";

import { useState } from "react";
import heroBg from "../../data/team/hero-bg.png";
import allTeamData from "../../data/team/members.json";

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

type YearData = {
  year: number;
  leadership: Member[];
  subsystems: Subsystem[];
};

function MemberCard({ member, highlight }: { member: Member; highlight: boolean }) {
  const imgSrc = member.photo.startsWith("http") ? member.photo : member.photo ? `/team/${member.photo}` : "";
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{
        backgroundColor: "#111",
        borderColor: highlight ? "#e05a1a33" : "rgba(255,255,255,0.05)",
      }}
    >
      <div className="relative overflow-hidden bg-[#1a1a1a]" style={{ aspectRatio: "1/1" }}>
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
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-white font-semibold">{member.name}</h3>
          <span
            className="text-xs font-medium px-2 py-0.5 rounded-full shrink-0"
            style={
              highlight
                ? { backgroundColor: "#e05a1a", color: "#fff" }
                : { backgroundColor: "#1a0d05", color: "#e05a1a", border: "1px solid #e05a1a33" }
            }
          >
            {member.role}
          </span>
        </div>
        {member.major && <p className="text-xs text-gray-500 mb-3">{member.major}</p>}
        {member.intro && <p className="text-gray-500 text-sm leading-relaxed">{member.intro}</p>}
      </div>
    </div>
  );
}

export default function MeetTheTeam() {
  const [activeYear, setActiveYear] = useState<number>(2026);
  const yearData = (allTeamData as YearData[]).find((d) => d.year === activeYear)!;
  const isEmpty = yearData.leadership.length === 0 && yearData.subsystems.length === 0;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}>

      {/* ── Hero ── */}
      <section className="relative flex items-end justify-start pt-14 min-h-[55vh] md:min-h-[90vh]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroBg.src})`,
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

      {/* ── Year Selector + Content ── */}
      <section className="py-16 px-6" style={{ backgroundColor: "#0a0a0a" }}>
        <div className="max-w-6xl mx-auto">

          {/* Year tabs */}
          <div className="flex gap-2 flex-wrap mb-12">
            {(allTeamData as YearData[]).map((d) => (
              <button
                key={d.year}
                onClick={() => setActiveYear(d.year)}
                className="px-5 py-2 rounded-full text-sm font-semibold border transition-colors"
                style={
                  activeYear === d.year
                    ? { backgroundColor: "#e05a1a", borderColor: "#e05a1a", color: "#fff" }
                    : { backgroundColor: "transparent", borderColor: "#333", color: "#888" }
                }
              >
                {d.year}
              </button>
            ))}
          </div>

          {/* Empty state */}
          {isEmpty && (
            <p className="text-gray-600 text-sm">Team roster for {activeYear} coming soon.</p>
          )}

          {/* Leadership */}
          {yearData.leadership.length > 0 && (
            <div className="mb-16">
              <p className="text-sm font-medium tracking-widest uppercase mb-8" style={{ color: "#e05a1a" }}>
                Leadership
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {yearData.leadership.map((leader, i) => (
                  <MemberCard key={i} member={leader} highlight={!!leader.isLead} />
                ))}
              </div>
            </div>
          )}

          {/* Subsystems */}
          {yearData.subsystems.map((subsystem, si) => (
            <div
              key={si}
              className="mb-16 pb-16"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
            >
              <p className="text-sm font-medium tracking-widest uppercase mb-8" style={{ color: "#e05a1a" }}>
                {subsystem.name}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {subsystem.members.map((member, i) => (
                  <MemberCard key={i} member={member} highlight={!!member.isLead} />
                ))}
              </div>
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
