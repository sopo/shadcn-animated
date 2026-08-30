import type { Metadata } from "next";

import ButtonDocs from "@/app/(docs)/button/components/button-docs";

export const metadata: Metadata = {
  title: "Button",
};

export default function ButtonPage() {
  return <ButtonDocs />;
}
