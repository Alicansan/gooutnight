import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { faqItems } from "@/constants/faqItems";

const FaqPage = () => {
  return (
    <>
      <section className="m-auto flex w-[1000px] items-center justify-center">
        <div className="my-28 min-h-[calc(100vh_-_24rem)] w-full px-4 py-24">
          <h1 className="mb-8 text-center text-3xl font-extrabold sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <Accordion type="single" className="mx-auto">
            {faqItems.map((item) => (
              <AccordionItem
                key={item.value}
                value={item.value}
                className="border-none"
              >
                <AccordionTrigger className="hover:text-whitehover:!no-underline text-start font-bold text-indigo-300 hover:text-black dark:hover:text-white sm:my-2 sm:text-2xl">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="mb-2 ml-8 sm:w-[800px] sm:text-xl">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default FaqPage;
