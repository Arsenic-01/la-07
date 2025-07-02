import { PlusIcon } from "lucide-react";
import { Accordion as AccordionPrimitive } from "radix-ui";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import SectionTitle from "../misc/SectionTitle";

const items = [
  {
    id: "1",
    title: "What is Exovia Exports?",
    content:
      "Exovia Exports is a company that provides fresh, imported products without chasing suppliers, minimum orders, or inconsistent stock.",
  },
  {
    id: "2",
    title: "How does Exovia Exports work?",
    content:
      "Exovia Exports works by connecting you with local farmers and suppliers who are committed to providing fresh, high-quality products at competitive prices.",
  },
  {
    id: "3",
    title: "What types of products does Exovia Exports offer?",
    content:
      "Exovia Exports offers a wide range of fresh, imported products, including fruits, vegetables, meats, seafood, and more.",
  },
  {
    id: "4",
    title: "Is Exovia Exports organic?",
    content:
      "Yes, Exovia Exports offers organic products from organic farmers and suppliers.",
  },
  {
    id: "5",
    title: "Is Exovia Exports sustainable?",
    content:
      "Yes, Exovia Exports is committed to sustainability and is working to reduce its carbon footprint.",
  },
  {
    id: "6",
    title: "Is Exovia Exports environmentally friendly?",
    content:
      "Yes, Exovia Exports is committed to environmental sustainability and is working to reduce its carbon footprint.",
  },
  {
    id: "7",
    title: "Is Exovia Exports fair trade?",
    content:
      "Yes, Exovia Exports is committed to fair trade and is working to reduce its carbon footprint.",
  },
];

export default function Faqs() {
  return (
    <div className="max-w-3xl xl:max-w-4xl mx-auto py-24">
      <div className="flex justify-center mt-5">
        <SectionTitle title="FAQs" />
      </div>
      <h2 className="text-4xl md:text-5xl 2xl:text-6xl font-medium text-center max-w-xl mx-auto">
        Questions? We&apos;ve got <span className="text-blue-600">answers</span>
      </h2>
      <Accordion
        type="single"
        collapsible
        className="w-full space-y-2 mt-12 sm:mt-20"
      >
        {items.map((item) => (
          <AccordionItem
            value={item.id}
            key={item.id}
            className="bg-background has-focus-visible:border-ring has-focus-visible:ring-ring/50 rounded-md border px-4 py-1 outline-none last:border-b has-focus-visible:ring-[3px]"
          >
            <AccordionPrimitive.Header className="flex">
              <AccordionPrimitive.Trigger className="hover:cursor-pointer focus-visible:ring-0 sm:px-2 flex flex-1 items-center justify-between rounded-md py-3 text-left 2xl:text-lg leading-6 font-semibold transition-all outline-none [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0">
                {item.title}
                <PlusIcon
                  size={16}
                  className="pointer-events-none shrink-0 transition-transform duration-200 text-blue-500"
                  aria-hidden="true"
                />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className="text-muted-foreground sm:px-2 pb-2 text-base">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
