import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="max-w-4xl grid grid-cols-2 mx-auto mt-20 gap-4 w-full px-4">
      {/* <h2 className="text-xl fomt-medium text-secondary-foreground">Handcrafted motion</h2>
            <nav className="flex flex-col gap-2">
                <p className="text-xs font-medium">Links</p>
                <Link to="/docs" className="text-xs text-secondary-foreground hover:underline">Docs</Link>

                
            </nav> */}

      <section className="max-w-4xl mx-auto flex p-4 justify-between">
        <nav className="flex flex-col gap-2">
            <p className="text-xs font-medium">Sitemap</p>
          <Link
            to={"/"}
            className="text-secondary-foreground text-sm hover:text-primary"
          >
            Home
          </Link>
          <Link
            to={"/introduction"}
            className="text-secondary-foreground text-sm hover:text-primary"
          >
            Docs
          </Link>
          <Link
            to={"/button"}
            className="text-secondary-foreground text-sm hover:text-primary"
          >
            Components
          </Link>
        </nav>
        <div>
        <Link
          to={""}
          className="rounded-full px-4 py-2 text-sm bg-[#3383EF]/5 text-[#3383EF] hover:bg-[#3383EF]/10 font-normal active:scale-99"
        >
          GitHub
        </Link>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
