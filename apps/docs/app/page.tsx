import { buttonProps } from "@/components/button/button";
import ButtonPreview from "@/components/button/button-preview";
import Hero from "@/components/hero";
import Shell from "@/components/shell";
import { tabsProps } from "@/components/tabs/tabs";
import TabsPreview from "@/components/tabs/tabs-preview";

export default function HomePage() {
  return (
    <div className="px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Hero />
        <section className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Shell props={buttonProps}>
            <ButtonPreview />
          </Shell>
          <Shell props={tabsProps}>
            <TabsPreview />
          </Shell>
        </section>
      </div>
    </div>
  );
}
