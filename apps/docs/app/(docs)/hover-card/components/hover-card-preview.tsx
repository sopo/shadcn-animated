'use client'
import {
  Button,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "shadcn-animated";
import {motion} from 'motion/react'

const HoverCardPreview = () => {
  return (
    <div className="p-20">
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
      
<HoverCardContent

  side="top"
  className="w-80 border-0 bg-transparent p-0 shadow-none ring-0"
>
  <div className="relative h-52 w-full ">

    {/* last card */}
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.75,
        rotate: 0,
        x: -80,
        y: 16,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 14,
        x: 0,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8,
      }}
      className="
        absolute left-44 bottom-4 z-0
        w-40
        rounded-lg
        bg-background p-2
        shadow-[0_8px_25px_rgba(0,0,0,0.25)]
      "
    >
      <img
        src="https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?w=900&auto=format&fit=crop&q=60"
        alt="London"
        className="h-40 w-full aspect-auto rounded object-cover"
      />
    </motion.div>




    {/* Right / Back card */}

    <motion.div
      initial={{
        opacity: 0,
        scale: 0.75,
        rotate: 0,
        x: -40,
        y: 8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 4,
        x: 0,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8,
      }}
      className="
        absolute left-24 bottom-8 z-5
        w-40
      
        rounded-lg
        bg-background p-2
        shadow-[0_8px_25px_rgba(0,0,0,0.25)]
      "
    >
      <img
      src={`https://images.unsplash.com/photo-1534011640498-530cfd0e854a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        alt="London trip"
        className="max-h-40 w-full rounded object-cover"
      />
    </motion.div>
 

    {/* Front / Left card */}
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.75,
        rotate: 0,
        x: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: -7,
        x: 0,
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        mass: 0.8,
      }}
      className="
        absolute left-4 bottom-4 z-10
        w-40
        rounded-lg
        bg-background p-2
        shadow-[0_8px_25px_rgba(0,0,0,0.25)]
      "
    >
      <img
        src="https://images.unsplash.com/photo-1569865867048-34cfce8d58fe?w=900&auto=format&fit=crop&q=60"
        alt="London"
        className="h-40 w-full aspect-auto rounded object-cover"
      />
    </motion.div>




    

  </div>
</HoverCardContent>





      </HoverCard>
    </div>
  );
};
export default HoverCardPreview;
