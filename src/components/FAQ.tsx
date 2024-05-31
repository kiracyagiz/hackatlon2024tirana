import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Is Prizz Task Management free to use?",
    answer: "Yes, Prizz offers a free version with limited features. You can upgrade to unlock additional functionalities.",
    value: "item-1",
  },
  {
    question: "Can I collaborate with my team using Prizz?",
    answer:
      "Absolutely! Prizz is designed for seamless team collaboration. You can share tasks, files, and updates with your team members in real-time.",
    value: "item-2",
  },
  {
    question:
      "How can I customize workflows in Prizz?",
    answer:
      "Prizz provides customizable workflows that allow you to tailor task lists, statuses, and processes to match your team's specific needs and preferences.",
    value: "item-3",
  },
  {
    question: "Is Prizz accessible on mobile devices?",
    answer: "Yes, Prizz is fully responsive and accessible on all devices, including smartphones and tablets.",
    value: "item-4",
  },
  {
    question:
      "How secure is my data on Prizz?",
    answer:
      "Prizz prioritizes data security and employs robust measures to ensure the safety and confidentiality of your information. Your data is encrypted and protected at all times.",
    value: "item-5",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container  sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
