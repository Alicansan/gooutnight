import Navbar from "@/components/navbar/Navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants/faqItems";
import { FunctionComponent } from "react";

const FaqPage: FunctionComponent = () => {
  return (
    <>
      <Navbar />
      <div className="mt-16 flex justify-center">
        <div className="w-full max-w-3xl px-4">
          <h1 className="text-3xl text-center mb-8">FAQs</h1>
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
