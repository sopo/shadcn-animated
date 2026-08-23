"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { LINKS } from "@/lib/links";
import { Sheet, SheetContent, SheetTrigger } from "shadcn-animated";
import { Equal, X } from "lucide-react";
import { sections } from "./sidenav";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: LINKS.DOCS, label: "Docs" },
  { href: LINKS.COMPONENTS, label: "Components" },
];

const Header = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header
      className={`fixed top-0 left-0 z-100 w-full backdrop-blur-md ${open ? "bg-background" : "bg-background/20"}`}
    >
      <section className="max-w-4xl mx-auto flex p-4 justify-between items-center">
        <div className="sm:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger className={`text-sm flex items-center gap-1`}>
              {open ? <X /> : <Equal />}
              Menu
            </SheetTrigger>
            <SheetContent
              side="top"
              className="inset-y-0 bg-background"
              showCloseButton={false}
            >
              <nav className="flex flex-col gap-8 overflow-x-auto px-5 pt-17">
                <div className="flex flex-col gap-4">
                  <Link
                    href={"/"}
                    className={`text-sm text-secondary-foreground`}
                    onClick={() => setOpen(false)}
                  >
                    {`Home`}
                  </Link>
                  {sections.map((section) => (
                    <div
                      key={section.title}
                      className="flex flex-col gap-3 min-w-fit"
                    >
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
                            className={`text-sm transition-colors  ${
                              isActive
                                ? "text-foreground"
                                : "text-secondary-foreground hover:text-foreground"
                            }`}
                            onClick={() => setOpen(false)}
                          >
                            {link.label}
                          </Link>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <nav className="hidden sm:flex gap-4 items-center">
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
