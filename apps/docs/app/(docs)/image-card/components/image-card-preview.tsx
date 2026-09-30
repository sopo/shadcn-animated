import {
  ImageCard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "shadcn-animated"
import { BackImage, FrontImage } from "../../../../../../packages/ui/src/components/image-card"

const ImageCardPreview=()=>{
    return(
        <ImageCard className="w-xl">
               <BackImage>
                {/* <img 
                className="object-cover"
                src="https://plus.unsplash.com/premium_photo-1789990372226-2b073696f52b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8" /> */}
            </BackImage>

            {/* <FrontImage>
                <img 
                className="w-30"
                src="https://plus.unsplash.com/premium_photo-1786868126588-39f864726bd9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8" />
            </FrontImage> */}

         
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          action
        </CardAction>
      </CardHeader>
      <CardContent>
        contenet
      </CardContent>
      <CardFooter className="flex-col gap-2">
       footer
      </CardFooter>
    </ImageCard>
    )
}
export default ImageCardPreview