import AccordionPreview from "@/components/accordion/accordion-preview";
import { ButtonProps } from "@/components/button/button";
import ButtonPreview from "@/components/button/button-preview";
import { CheckboxProps } from "@/components/checkbox/checkbox";
import CheckboxPreview from "@/components/checkbox/checkbox-preview";
import Hero from "@/components/hero";
import { RadioGroupProps } from "@/components/radio-group/radio";
import RadioGroupPreview from "@/components/radio-group/radio-group-preview";
import Shell from "@/components/shell";
import { TabsProps } from "@/components/tabs/tabs";
import TabsPreview from "@/components/tabs/tabs-preview";

export default function HomePage() {
  return (
    <div className="px-4">
      <div className="max-w-4xl mx-auto flex flex-col gap-20">
        <Hero />
        <section className="grid grid-cols-1 gap-2 md:grid-cols-2">
          <Shell props={ButtonProps}>
            <ButtonPreview />
          </Shell>
          <Shell props={TabsProps}>
            <TabsPreview />
          </Shell>
          <Shell props={CheckboxProps}>
            <CheckboxPreview />
          </Shell>
          <Shell props={RadioGroupProps}>
            <RadioGroupPreview />
          </Shell>

          <div className="md:col-span-2">
            <Shell props={RadioGroupProps}>
              <div className="h-50 px-4 lg:px-0">
              <div className="flex self-start overflow-y-auto">
                <AccordionPreview />
              </div>
              </div>
            </Shell>
          </div>
        </section>
      </div>
    </div>
  );
}
