import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqItems } from "@/constants/faqItems";

export function FAQ() {
  return (
    <div className="mt-16">
      <h1 className="text-3xl text-center">FAQs</h1>
      <Accordion type="single" collapsible className="w-full">
        {faqItems.map((item) => (
          <AccordionItem key={item.value} value={item.value}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
