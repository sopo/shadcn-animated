import { Check, Copy } from "lucide-react";
import { IconToggle } from "shadcn-animated";

const IconTogglePreview = () => {
  return (
    <IconToggle
    variant="ghost"
      className={`p-8 rounded-full hover:bg-backgound`}
      start={<Copy className="size-6" />}
      end={<Check className="size-6" />}
    />
  );
};
export default IconTogglePreview;
