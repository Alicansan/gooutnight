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
      <section className="container flex justify-center">
        <div className="min-h-[calc(100vh_-_24rem)] w-full px-4 py-24">
          <h1 className="mb-8 text-center text-3xl">FAQs</h1>
          <Accordion type="multiple" className="mx-auto w-[70%]">
            {faqItems.map((item) => (
              <AccordionItem key={item.value} value={item.value}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
