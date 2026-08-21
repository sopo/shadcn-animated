"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LINKS } from "@/lib/links";

const navItems = [
  { href: "/", label: "Home" },
  { href: LINKS.DOCS, label: "Docs" },
  { href: LINKS.COMPONENTS, label: "Components" },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-background/20 backdrop-blur-md">
      <section className="max-w-4xl mx-auto flex p-4 justify-between">
        <nav className="flex gap-4  items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm hover:text-primary ${
                  isActive ? "text-primary" : "text-secondary-foreground"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <a
          target="_blank"
          href={LINKS.GITHUB}
          rel="noreferrer"
          className="btnClass scale-default"
        >
          GitHub
        </a>
      </section>
    </header>
  );
};
export default Header;
