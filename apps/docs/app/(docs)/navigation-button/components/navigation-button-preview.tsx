import { NavigationButton } from "shadcn-animated";

const NavigationButtonPreview = () => {
  return (
    <NavigationButton
      variant="default"
      iconVariant="icon-before"
      className="rounded-full h-10 px-6 hover:bg-primary "
    >
      Hover me
    </NavigationButton>
  );
};
export default NavigationButtonPreview;
