import { FloatingActionMenu } from "shadcn-animated";
import { FloatingActionMenuContent, FloatingActionMenuItem, FloatingActionMenuTrigger } from "shadcn-animated";
import { Bell, Mail, MessageSquare } from "lucide-react";


const FloatingActionMenuPreview = () => {
  return (
  
     <FloatingActionMenu>
      <FloatingActionMenuTrigger />

      <FloatingActionMenuContent align="center">
        <FloatingActionMenuItem>
          <Mail />
        📧  Send an email
        </FloatingActionMenuItem>

        <FloatingActionMenuItem>
          <Bell />
         ☀️ Make a reminder
        </FloatingActionMenuItem>

        <FloatingActionMenuItem>
          <MessageSquare />
          Send a message
        </FloatingActionMenuItem>

        
      </FloatingActionMenuContent>
    </FloatingActionMenu>

  );
};
export default FloatingActionMenuPreview;
