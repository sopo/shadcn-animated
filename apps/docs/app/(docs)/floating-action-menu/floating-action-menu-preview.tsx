import { FloatingActionMenu } from "shadcn-animated";
import { FloatingActionMenuContent, FloatingActionMenuItem, FloatingActionMenuTrigger } from "../../../../../packages/ui/src/components/floating-action-menu";
import { Bell, Mail, MessageSquare } from "lucide-react";


const FloatingActionMenuPreview = () => {
  return (
     <FloatingActionMenu>
      <FloatingActionMenuTrigger />

      <FloatingActionMenuContent>
        <FloatingActionMenuItem>
          <Mail />
          Send an email
        </FloatingActionMenuItem>

        <FloatingActionMenuItem>
          <Bell />
          Make reminder
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
