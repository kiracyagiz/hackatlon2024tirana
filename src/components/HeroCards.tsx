import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { buttonVariants } from "./ui/button";
import { Linkedin } from "lucide-react";
import { LightBulbIcon } from "./Icons";
export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarImage
              alt=""
              src="data:image/png;base64,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"
            />
            <AvatarFallback>SH</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">InnovateTech Solutions</CardTitle>
          </div>
        </CardHeader>

        <CardContent>Manajinx has truly streamlined our project coordination.</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
            src="data:image/png;base64,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"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-12 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Stellar Innovations Inc.</CardTitle>
          <CardDescription className="font-normal text-primary">
            Innovations Creator
          </CardDescription>
        </CardHeader>

        <CardContent className=" pb-2">
          <p>
          Manajinx, our go-to platform! Customizable, integrated. A game-changer!
          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
      <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhmTe2iqKzMHz7Y9C-YJaFl1fU8NfblNxdyw&s"
            alt="user avatar"
            className="absolute grayscale-[0%] -top-8 rounded-full w-24 h-24 aspect-square object-cover"
          />
          <CardTitle className="text-center">Tesla</CardTitle>
          <CardDescription className="font-normal text-primary">
            Innovations Creator
          </CardDescription>
        </CardHeader>

        <CardContent className=" pb-2">
          <p>
          Manajinx will elevate your experience"




          </p>
        </CardContent>

        <CardFooter>
          <div>
            <a
              rel="noreferrer noopener"
              href="https://github.com/leoMirandaa"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Github icon</span>
              <GitHubLogoIcon className="w-5 h-5" />
            </a>
            <a
              rel="noreferrer noopener"
              href="https://twitter.com/leo_mirand4"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">X icon</span>
              <svg
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-foreground w-5 h-5"
              >
                <title>X</title>
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
              </svg>
            </a>

            <a
              rel="noreferrer noopener"
              href="https://www.linkedin.com/"
              target="_blank"
              className={buttonVariants({
                variant: "ghost",
                size: "sm",
              })}
            >
              <span className="sr-only">Linkedin icon</span>
              <Linkedin size="20" />
            </a>
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px]  drop-shadow-xl shadow-black/10 dark:shadow-white/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Light & dark mode</CardTitle>
            <CardDescription className="text-md mt-2">
            Illuminate Your Day, Empower Your Night with Light and Dark Mode!
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
