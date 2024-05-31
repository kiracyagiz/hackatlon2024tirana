import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import image3 from "../assets/reflecting.png";
import image4 from "../assets/looking-ahead.png";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Intuitive Task Organization",
    description:
      " Easily organize your tasks with Prizz's intuitive interface, allowing you to categorize, prioritize, and assign tasks effortlessly. Stay on top of your workload and streamline your workflow with simple drag-and-drop functionality.",
    image: image4,
  },
  {
    title: "Real-Time Collaboration",
    description:
      "Foster seamless collaboration among team members with Prizz's real-time communication tools. Share updates, files, and feedback instantly, ensuring everyone stays informed and aligned. Break down communication barriers and boost productivity with collaborative features designed to enhance teamwork.",
    image: image3,
  },
  {
    title: "Customizable Task Workflows",
    description:
      "Prizz  fit your team's unique workflow with customizable task management features. Adapt task lists, statuses, and workflows to match your team's preferred processes and methodologies. Increase efficiency and collaboration by aligning Prizz with your team's specific needs, ensuring a seamless integration into your existing workflow.",
    image: image,
  },
];

const featureList: string[] = [
  "Task Management",
  "Real-time Collaboration",
  "Customizable Workflows",
  "Integration Options",
  "User-friendly Interface",
  "Advanced Reporting",
];


export const Features = () => {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
