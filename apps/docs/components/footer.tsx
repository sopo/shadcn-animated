import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { LINKS } from "@/lib/links";

const Footer = () => {
  return (
    <footer className=" w-full border-t border-neutral-200 mt-20">
      <nav className="flex items-start gap-6 text-xs px-4 lg:px-0 max-w-4xl py-8 mx-auto ">
        <Link
          href="/"
          className="hidden sm:block text-secondary-foreground text-sm hover:text-primary hover:underline"
        >
          Home
        </Link>
        <Link
          href={LINKS.DOCS}
          className="hidden sm:block text-secondary-foreground text-sm hover:text-primary hover:underline"
        >
          Docs
        </Link>
        <Link
          href={LINKS.COMPONENTS}
          className="hidden sm:block text-secondary-foreground text-sm hover:text-primary hover:underline"
        >
          Components
        </Link>
        <a
          target="_blank"
          href={LINKS.GITHUB}
          rel="noreferrer"
          className="text-secondary-foreground text-sm hover:text-primary hover:underline flex items-center"
        >
          GitHub
          <ArrowUpRight size={16} />
        </a>
        <a
          target="_blank"
          href={LINKS.ISSUES}
          rel="noreferrer"
          className="text-secondary-foreground text-sm hover:text-primary hover:underline flex items-center"
        >
          Issues
          <ArrowUpRight size={16} />
        </a>
      </nav>
    </footer>
  );
};
export default Footer;
