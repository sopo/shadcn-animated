import { FABMenu } from "shadcn-animated";
import { FABMenuContent, FABMenuItem, FABMenuTrigger } from "shadcn-animated";
import { Bell, Mail, MessageSquare } from "lucide-react";


const FABMenuPreview = () => {
  return (
  
     <FABMenu>
      <FABMenuTrigger />

      <FABMenuContent align="center">
        <FABMenuItem>
          <Mail />
        📧  Send an email
        </FABMenuItem>

        <FABMenuItem>
          <Bell />
         ☀️ Make a reminder
        </FABMenuItem>

        <FABMenuItem>
          <MessageSquare />
          Send a message
        </FABMenuItem>

        
      </FABMenuContent>
    </FABMenu>

  );
};
export default FABMenuPreview;
