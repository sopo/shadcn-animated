import {
  FABMenu,
  FABMenuContent,
  FABMenuItem,
  FABMenuTrigger,
} from "shadcn-animated";

const FABMenuPreview = () => {
  return (
    <FABMenu>
      <FABMenuTrigger />
      <FABMenuContent align="center">
        <FABMenuItem>📧 Send an email</FABMenuItem>
        <FABMenuItem>💬 Send a message</FABMenuItem>
        <FABMenuItem>☀️ Make a reminder</FABMenuItem>
      </FABMenuContent>
    </FABMenu>
  );
};
export default FABMenuPreview;
