// Next-Intl
import { useTranslations } from "next-intl";

// Components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Constants
import { faqArray } from "@/constants";

const AccordionFAQ = () => {
  const t = useTranslations("Pages.Home.FAQ");
  return (
    <Accordion type="single" defaultValue="item-0" collapsible>
      {faqArray.map((faq, index) => (
        <AccordionItem
          key={index}
          value={`item-${index}`}
          className="hover:border-b-[#387FF5] py-4 transition-colors duration-300 ease"
        >
          <AccordionTrigger className="text-xl font-bold hover:no-underline cursor-pointer">
            <div className="flex gap-4 h-full">
              <span className="min-w-1 bg-[#387FF5] block h-full rounded"></span>
              {t(faq.question)}
            </div>
          </AccordionTrigger>
          <AccordionContent className="text-muted-foreground leading-relaxed ">
            {t(faq.anwser)}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionFAQ;
