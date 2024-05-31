import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "User-Friendly Interface",
    description:
      "Navigate Prizz's intuitive interface effortlessly, making task management a breeze for all users.",
  },
  {
    icon: <MapIcon />,
    title: "Seamless Collaboration",
    description:
      "Enable real-time collaboration among team members, allowing them to share updates, files, and feedback seamlessly.",
  },
  {
    icon: <PlaneIcon />,
    title: "Scalable Solution",
    description:
      "Grow your projects with ease, as Prizz is designed to scale alongside your team's evolving needs and projects of any size.",
  },
  {
    icon: <GiftIcon />,
    title: "Engaging Gamification",
    description:
      "Motivate your team members with gamification elements, turning task completion into a fun and rewarding experience.",
  },
];


export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container text-center py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold ">
        How It{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Works{" "}
        </span>
        Step-by-Step Guide
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-8 text-xl text-muted-foreground">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
        dolor pariatur sit!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card
            key={title}
            className="bg-muted/50"
          >
            <CardHeader>
              <CardTitle className="grid gap-4 place-items-center">
                {icon}
                {title}
              </CardTitle>
            </CardHeader>
            <CardContent>{description}</CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
