import { Statistics } from "./Statistics";
import pilot from "../assets/pilot.png";

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={pilot}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  About{" "}
                </span>
                Company
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
At Prizz Task Management, we're dedicated to redefining how teams tackle their projects. Our vision is to equip organizations with intuitive, efficient, and customizable tools that streamline task workflows and drive unparalleled success. With a steadfast commitment to innovation and excellence, we continuously push boundaries to exceed expectations, offering cutting-edge solutions tailored to meet the unique needs of every user. Join us on our journey to transform task management into a seamless, collaborative, and rewarding experience for all.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
