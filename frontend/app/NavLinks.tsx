"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", href: "/homepage" },
  { label: "About Us", href: "/aboutus" },
  { label: "Our Rovers", href: "/rovers" },
  { label: "Events", href: "/events" },
  { label: "Meet the Team", href: "/team" },
  { label: "Publications", href: "/publications" },
  { label: "Contact Us", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-0.5 overflow-x-auto">
      {navLinks.map((link) => {
        const active = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className="relative px-3 h-14 flex items-center text-xs font-medium transition-colors whitespace-nowrap shrink-0"
            style={{ color: active ? "#e05a1a" : "#888" }}
          >
            {link.label}
            {active && (
              <span
                className="absolute bottom-0 left-0 right-0 h-0.5"
                style={{ background: "#e05a1a" }}
              />
            )}
          </Link>
        );
      })}
    </div>
  );
}
