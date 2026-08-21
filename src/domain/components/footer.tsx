import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { LINKS } from "../static";

const Footer = () => {
  return (
    <footer className=" w-full border-t border-neutral-200 mt-20">
      <nav className="flex flex-col items-start sm:flex-row gap-6 text-xs px-4 lg:px-0 max-w-4xl py-8 mx-auto ">
        <Link
          to={"/"}
          className="text-secondary-foreground text-sm hover:text-primary hover:underline"
        >
          Home
        </Link>
        <Link
          to={LINKS.DOCS}
          className="text-secondary-foreground text-sm hover:text-primary hover:underline"
        >
          Docs
        </Link>
        <Link
          to={LINKS.COMPONENTS}
          className="text-secondary-foreground text-sm hover:text-primary hover:underline"
        >
          Components
        </Link>
        <a
          target="blank"
          href={LINKS.GITHUB}
          className="text-secondary-foreground text-sm hover:text-primary hover:underline flex items-center"
        >
          GitHub
          <ArrowUpRight size={16} />
        </a>
        <a
          target="blank"
          href={LINKS.ISSUES}
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
