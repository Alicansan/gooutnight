import { FunctionComponent } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqItems } from "@/constants/faqItems";

const FaqPage: FunctionComponent = () => {
  return (
    <>
      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-3xl px-4">
          <h1 className="mb-8 text-center text-3xl">FAQs</h1>
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqPage;
