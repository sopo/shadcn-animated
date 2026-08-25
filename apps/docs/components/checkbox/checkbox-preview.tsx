
import { Checkbox } from "shadcn-animated/checkbox";
import {
  Field,
  FieldGroup,
  FieldLabel,

} from "@/components/ui/field"

const CheckboxPreview = () => {

  return (

<FieldGroup className="mx-auto w-70">
      <Field orientation="horizontal" className="flex items-center justify-center">
        <Checkbox id="terms-checkbox-basic" name="terms-checkbox-basic" className={`size-5 `}/>
        <FieldLabel htmlFor="terms-checkbox-basic" className="flex-none! text-md">
          Accept terms and conditions
        </FieldLabel>
      </Field>
    </FieldGroup>
 

  );
};
export default CheckboxPreview;
