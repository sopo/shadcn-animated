import {
  BackImage,
 Card ,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  FrontImage,
} from "shadcn-animated"

const ImageCardPreview = () => {
  return (
    <Card className="">

      {/* Image area */}
     
        
        {/* First image */}
       <BackImage>
        <img 
        src="https://plus.unsplash.com/premium_photo-1786868126588-39f864726bd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"/>
       </BackImage>

        <FrontImage>
        <img 
        src="https://plus.unsplash.com/premium_photo-1789990372226-2b073696f52b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
        />
       </FrontImage>

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