import { Checkbox } from "shadcn-animated/checkbox";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";

const CheckboxPreview = () => {

  return (
      <FieldGroup className="mx-auto w-55 flex flex-col items-center gap-2">
        <Field orientation="horizontal" className="flex items-center">
          <Checkbox
            id="terms-checkbox-basic"
            name="terms-checkbox-basic"
            className="rounded"
          />
          <FieldLabel
            htmlFor="terms-checkbox-basic"
            className="flex-none! font-normal"
          >
            Accept terms and conditions
          </FieldLabel>
        </Field>

        <Field orientation="horizontal" className="flex items-center">
          <Checkbox
            id="terms-checkbox-basic-2"
            name="terms-checkbox-basic-2"
            className="rounded"
          />
          <FieldLabel
            htmlFor="terms-checkbox-basic-2"
            className="flex-none! font-normal"
          >
            Subscribe to newsletter
          </FieldLabel>
        </Field>
      </FieldGroup>
  );
};
export default CheckboxPreview;
