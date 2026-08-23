import type { PropsWithChildren } from "react";

const DocsSection: React.FC<PropsWithChildren> = ({ children }) => {
  return <section className="flex flex-col gap-4">{children}</section>;
};
export default DocsSection;
