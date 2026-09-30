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
  ImageArea,
} from "shadcn-animated"

const ImageCardPreview = () => {
  return (
    <div className="flex p-10">
  
       <Card className="max-w-md">
<ImageArea>
       <BackImage>
        <img 
        className="rounded-2xl shadow-xl"
        src="https://plus.unsplash.com/premium_photo-1786868126588-39f864726bd9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8"/>
       </BackImage>

        <FrontImage>
        <img 
        className="rounded-2xl shadow-xl"
        src="https://plus.unsplash.com/premium_photo-1789990372226-2b073696f52b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8"
        />
       </FrontImage>

</ImageArea>
      <CardContent >
        <CardHeader className="text-center">
      

          <CardTitle className="text-2xl">
            Design systems meetup
          </CardTitle>

          <CardDescription className="text-xl">
            A practical talk on component APIs, accessibility, and shipping
            faster.
          </CardDescription>
        </CardHeader>
      </CardContent>

    </Card>
    </div>
  )
}

export default ImageCardPreview