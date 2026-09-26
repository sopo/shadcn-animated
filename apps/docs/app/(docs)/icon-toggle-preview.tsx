import { Check, Copy } from "lucide-react";
import { IconToggle } from "shadcn-animated";


const IconTogglePreview = () => {
 

  return (
  <IconToggle
  autoReset
  start={<Copy />}
  end={<Check />}
/>

  );
};
export default IconTogglePreview