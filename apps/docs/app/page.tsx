import AccordionPreview from "@/app/(docs)/accordion/components/accordion-preview";
import { ButtonProps } from "@/app/(docs)/button/components/button";
import ButtonPreview from "@/app/(docs)/button/components/button-preview";
import { CheckboxProps } from "@/app/(docs)/checkbox/components/checkbox";
import CheckboxPreview from "@/app/(docs)/checkbox/components/checkbox-preview";
import Hero from "@/components/hero";
import { RadioGroupProps } from "@/app/(docs)/radio-group/components/radio";
import RadioGroupPreview from "@/app/(docs)/radio-group/components/radio-group-preview";
import Shell from "@/components/shell";
import { TabsProps } from "@/components/tabs/tabs";
import TabsPreview from "@/components/tabs/tabs-preview";
import { AccordionProps } from "./(docs)/accordion/components/accordion";

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
            <Shell props={AccordionProps}>
              <div className="min-h-50 ">
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
