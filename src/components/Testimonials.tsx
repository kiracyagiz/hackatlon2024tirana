import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image: string;
  name: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    image: "https://example.com/avatar1.png",
    name: "John Doe",
    comment: "Prizz helped us streamline our project management process and boosted our team's productivity. Highly recommended!",
  },
  {
    image: "https://example.com/avatar2.png",
    name: "Jane Smith",
    comment:
      "We've been using Prizz for a few months now, and it has truly transformed the way we collaborate on tasks. It's intuitive, efficient, and has become an essential tool for our team.",
  },
  {
    image: "https://example.com/avatar3.png",
    name: "David Johnson",
    comment:
      "Prizz's customizable workflows have allowed us to tailor the platform to fit our team's unique needs perfectly. It's flexible, adaptable, and has made a significant difference in our project management approach.",
  },
  {
    image: "https://example.com/avatar4.png",
    name: "Emily Wilson",
    comment:
      "The real-time collaboration features in Prizz have made it easy for our team to stay connected and work together effectively, regardless of our location. It's a game-changer!",
  },
  {
    image: "https://example.com/avatar5.png",
    name: "Michael Brown",
    comment:
      "Prizz's user-friendly interface and advanced reporting tools have provided us with valuable insights into our project progress and performance. It's helped us make data-driven decisions and drive continuous improvement.",
  },
  {
    image: "https://example.com/avatar6.png",
    name: "Sarah Lee",
    comment:
      "We love Prizz's dark/light theme option, which allows us to customize the platform to match our preferences. It's a small feature but makes a big difference in our user experience.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold">
        Discover Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          People Love{" "}
        </span>
        Prizz Task Management
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Hear what our customers have to say about their experience with Prizz.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, name, comment }: TestimonialProps, index: number) => (
            <Card
              key={index}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  <AvatarImage alt="" src={image} />
                  <AvatarFallback>{name[0]}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
