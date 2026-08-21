import { Link } from "react-router";

const Installation = () => {
  return (
    <div className=" flex flex-col gap-8">
      <h1 className="text-3xl">Installation</h1>
      <section className="flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <p className="font-medium text-secondary-foreground">1</p>
          </div>
          <p className="font-medium text-lg text-secondary-foreground">
            Install{" "}
            <Link
            target="blank"
              to={"https://tailwindcss.com/docs/installation/using-vite"}
              className="underline text-primary"
            >
              Tailwind
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <p className="font-medium text-secondary-foreground">2</p>
          </div>
          <p className="font-medium text-lg text-secondary-foreground">
            Install{" "}
            <Link
            target="blank"
              to={"https://ui.shadcn.com/docs/installation"}
              className="underline text-foreground"
            >
              shadcn/ui
            </Link>
          </p>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <p className="font-medium text-secondary-foreground">3</p>
          </div>
          <p className="font-medium text-lg text-secondary-foreground">Install</p>
        </div>

              <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-card flex items-center justify-center">
            <p className="font-medium text-secondary-foreground">4</p>
          </div>
          <p className="font-medium text-lg text-secondary-foreground">Use</p>
        </div>
              <div className="flex flex-col gap-4 py-6 border-t border-neutral-200 my-6 ">
        <p className="text-lg font-medium text-secondary-foreground">Next</p>
        <div>
      <Link to={"/button"}  className="inline-flex items-center justify-center bg-black/3 text-foreground py-4 px-8 rounded-2xl font-normal text-md hover:bg-black/5 hover:scale-101 active:scale-99 transition-transform ease-in">Components</Link>
      </div>
      </div>
      </section>

  
    </div>
  );
};
export default Installation;
