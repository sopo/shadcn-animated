import type { Metadata } from "next";
import AccordionDocs from "./components/accordion-docs";



export const metadata: Metadata = {
  title: "Accordion",
};

export default function ButtonPage() {
  return <AccordionDocs />;
}
