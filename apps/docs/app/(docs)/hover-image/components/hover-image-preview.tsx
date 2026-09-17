import {
  Button,
  HoverCard,
  HoverCardTrigger,
  HoverImage,
} from "shadcn-animated";

const HoverCardPreview = () => {
  return (
    <div className="p-20 text-center">
      <HoverCard>
        <span className="text-3xl font-medium text-secondary-foreground">
          I grabbed a ☕ coffee, explored the sights 🏙️, and took plenty of{" "}
        </span>
        <HoverCardTrigger
          delay={10}
          closeDelay={100}
          render={
            <Button variant="link">
              <span className="text-3xl font-medium">📸 photos</span>
            </Button>
          }
        />
        <span className="text-3xl font-medium text-secondary-foreground">
          {" "}
          around London 🇬🇧 before catching my ✈️ flight home tonight.
        </span>

        <HoverImage>
          <img
            src="https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?w=900"
            alt="London"
            className="h-40 w-full rounded object-cover"
          />

          <img
            src="https://images.unsplash.com/photo-1454793147212-9e7e57e89a4f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvbmRvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="London"
            className="max-h-40 w-full rounded object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1534011640498-530cfd0e854a?q=80&w=987"
            alt="London trip"
            className="max-h-40 w-full rounded object-cover"
          />
        </HoverImage>
      </HoverCard>
    </div>
  );
};
export default HoverCardPreview;
