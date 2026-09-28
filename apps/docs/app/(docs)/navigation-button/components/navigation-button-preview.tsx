import { NavigationButton } from "shadcn-animated";

const NavigationButtonPreview = () => {
  return (
    <div className="flex flex-col gap-4">
      <NavigationButton
        variant="default"
        className="rounded-full h-10 px-6 hover:bg-primary "
      >
        Hover me
      </NavigationButton>
      <NavigationButton
        variant="default"
        iconVariant="before"
        className="rounded-full h-10 px-6 hover:bg-primary "
      >
        Hover me
      </NavigationButton>
    </div>
  );
};
export default NavigationButtonPreview;
