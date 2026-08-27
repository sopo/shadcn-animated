"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export const sections = [
  {
    title: "Docs",
    links: [
      { href: "/introduction", label: "Introduction" },
      { href: "/installation", label: "Installation" },
    ],
  },
  {
    title: "Components",
    links: [
      { href: "/button", label: "Button" },
      { href: "/checkbox", label: "Checkbox" },
      { href: "/radio-group", label: "Radio group" },
      { href: "/tabs", label: "Tabs" },
    ],
  },
];

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-8 overflow-x-auto">
      {sections.map((section) => (
        <div key={section.title} className="flex flex-col gap-3 min-w-fit">
          <h2 className="text-xs uppercase text-secondary-foreground">
            {section.title}
          </h2>
          {section.links.map((link) => {
            const isActive = pathname === link.href;

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-secondary-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      ))}
    </nav>
  );
}
