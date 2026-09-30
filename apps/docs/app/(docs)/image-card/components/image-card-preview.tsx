import {
 Card ,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "shadcn-animated"

const ImageCardPreview = () => {
  return (
    <Card className="relative overflow-visible pt-0 group">

      {/* Image area */}
     
        
        {/* First image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1786868126588-39f864726bd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"
          alt="Event cover"
          className="
            absolute
            left-1/2
            top-4
            z-20
            w-[80%]
            -translate-x-1/2
            aspect-video
            object-cover
            -rotate-2
            transition-transform
            duration-300
            ease-out
            group-hover:-translate-x-[calc(50%+2rem)]
            group-hover:-rotate-6
          "
        />

        {/* Second image */}
        <img
          src="https://plus.unsplash.com/premium_photo-1789990372226-2b073696f52b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWVkfHx8ZW58MHx8fHx8"
          alt="Event cover"
          className="
            absolute
            left-1/2
            top-4
            z-30
            w-[80%]
            -translate-x-1/2
            aspect-video
            object-cover
            rotate-2
            transition-transform
            duration-300
            ease-out
            group-hover:translate-x-[calc(-50%+2rem)]
            group-hover:rotate-6
          "
        />
  

      {/* Card content */}
      <CardContent >
        <CardHeader>
          <CardAction>
            badge
          </CardAction>

          <CardTitle>
            Design systems meetup
          </CardTitle>

          <CardDescription>
            A practical talk on component APIs, accessibility, and shipping
            faster.
          </CardDescription>
        </CardHeader>
      </CardContent>

      <CardFooter>
        butt
      </CardFooter>

    </Card>
  )
}

export default ImageCardPreview