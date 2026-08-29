import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "shadcn-animated";

const AccordionPreview = () => {
  return (
  <Accordion defaultValue={["shipping"]} className="w-65 max-w-lg sm:w-lg rounded-2xl bg-white p-4 h-auto">
      <AccordionItem value="shipping"  className={``}>
        <AccordionTrigger className={`hover:no-underline `}>What are your shipping options?</AccordionTrigger>
        <AccordionContent>
          We offer standard (5-7 days), express (2-3 days), and overnight
          shipping. Free shipping on international orders.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="returns" >
        <AccordionTrigger className={`hover:no-underline `}>What is your return policy?</AccordionTrigger>
        <AccordionContent>
          Returns accepted within 30 days. Items must be unused and in original
          packaging. Refunds processed within 5-7 business days.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="support">
        <AccordionTrigger className={`hover:no-underline `}>How can I contact customer support?</AccordionTrigger>
        <AccordionContent>
          Reach us via email, live chat, or phone. We respond within 24 hours
          during business days.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionPreview;