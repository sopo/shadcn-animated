import { ChevronRight } from "lucide-react";
import Link from "next/link";

const NextSection = ({ title, link }: { title: string; link: string }) => {
  return (
    <section className="flex flex-col gap-2 py-6 border-t border-border my-6">
      <h3 className="text-lg font-medium text-secondary-foreground">Next</h3>
      <nav>
        <Link href={link} className="linkClass">
          {title}
          <ChevronRight size={16} />
        </Link>
      </nav>
    </section>
  );
};
export default NextSection;
