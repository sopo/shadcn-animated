import type { Metadata } from "next";

import ButtonDocs from "@/components/button/button-docs";

export const metadata: Metadata = {
  title: "Button",
};

export default function ButtonPage() {
  return <ButtonDocs />;
}
