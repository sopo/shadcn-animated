import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

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
            to={"/introduction"}
            className="text-secondary-foreground text-sm hover:text-primary hover:underline"
          >
            Docs
          </Link>
          <Link
            to={"/button"}
            className="text-secondary-foreground text-sm hover:text-primary hover:underline"
          >
            Components
          </Link>
            <Link
             target="blank"
            to={"/button"}
            className="text-secondary-foreground text-sm hover:text-primary hover:underline flex items-center"
          >
            
            GitHub
            <ArrowUpRight size={16}/>
          </Link>
              <Link
             target="blank"
            to={"/button"}
            className="text-secondary-foreground text-sm hover:text-primary hover:underline flex items-center"
          >
            
            Issues
            <ArrowUpRight size={16}/>
          </Link>
        </nav>


    </footer>
  );
};
export default Footer;
