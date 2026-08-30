import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn-animated";

const AccordionPreview = () => {
  return (
    <div className="py-18 px-4">
   
  <Accordion defaultValue={["shipping"]} className="w-65 max-w-lg md:w-lg rounded-2xl bg-white p-4 h-auto">
      <AccordionItem value="shipping"  className={``}>
        <AccordionTrigger  className={`hover:no-underline text-lg font-medium **:data-[slot=accordion-trigger-icon]:size-5`}>What are your shipping options?</AccordionTrigger>
        <AccordionContent className={`text-secondary-foreground`}>
          We offer standard (5-7 days), express (2-3 days), and overnight
          shipping. Free shipping on international orders.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns" >
        <AccordionTrigger className={`hover:no-underline text-lg font-medium **:data-[slot=accordion-trigger-icon]:size-5`}>What is your return policy?</AccordionTrigger>
        <AccordionContent className={`text-secondary-foreground`}>
          Returns accepted within 30 days. Items must be unused and in original
          packaging. Refunds processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger className={`hover:no-underline text-lg font-medium **:data-[slot=accordion-trigger-icon]:size-5`}>How can I contact customer support?</AccordionTrigger>
        <AccordionContent className={`text-secondary-foreground`}>
          Reach us via email, live chat, or phone. We respond within 24 hours
          during business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
    </div>

  );
};
export default AccordionPreview;