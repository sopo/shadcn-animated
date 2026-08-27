import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "shadcn-animated";

const RadioGroupPreview = () => {
  return (
    <RadioGroup defaultValue="comfortable" className="w-fit">
      <div className="flex items-center gap-3">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1" className="font-normal">
          Default
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="comfortable" id="r2" />
        <Label htmlFor="r2" className="font-normal">
          Comfortable
        </Label>
      </div>
      <div className="flex items-center gap-3">
        <RadioGroupItem value="compact" id="r3" />
        <Label htmlFor="r3" className="font-normal">
          Compact
        </Label>
      </div>
    </RadioGroup>
  );
};
export default RadioGroupPreview;
