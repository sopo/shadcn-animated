import { IconToggle } from "shadcn-animated";
import { Sun, Moon } from "lucide-react";

const IconTogglePreview = () => {
  return (
    <IconToggle
      className={`p-8 rounded-full hover:bg-backgound`}
      from={<Sun  className="size-6" />}
      to={<Moon className="size-6" />}
    />
  );
};
export default IconTogglePreview;
