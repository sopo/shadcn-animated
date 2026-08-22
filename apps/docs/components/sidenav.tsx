"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const sections = [
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
      { href: "/tabs", label: "Tabs*" },
    ],
  },
];

export default function Sidenav() {
  const pathname = usePathname();

  return (
    <aside>
      <nav className="flex gap-4 overflow-x-auto md:flex-col">
        {sections.map((section) => (
          <div key={section.title} className="flex min-w-fit flex-col">
            <h2 className="px-4 py-2 text-xs uppercase text-secondary-foreground">
              {section.title}
            </h2>
            {section.links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-lg px-4 py-2 text-sm transition-colors ${
                    isActive
                      ? "text-neutral-900"
                      : "text-secondary-foreground hover:bg-black/3"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        ))}
      </nav>
    </aside>
  );
}
