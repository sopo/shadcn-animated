import {
  FabMenu,
  FabMenuContent,
  FabMenuItem,
  FabMenuTrigger,
} from "shadcn-animated";

const FabMenuPreview = () => {
  return (
    <FabMenu>
      <FabMenuTrigger />
      <FabMenuContent align="center">
        <FabMenuItem>📧 Send an email</FabMenuItem>
        <FabMenuItem>💬 Send a message</FabMenuItem>
        <FabMenuItem>☀️ Make a reminder</FabMenuItem>
      </FabMenuContent>
    </FabMenu>
  );
};
export default FabMenuPreview;
