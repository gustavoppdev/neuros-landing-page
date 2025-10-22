// Next-Intl
import { useTranslations } from "next-intl";

// Components
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { ModeToggle } from "@/components/ModeToggle";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Constants
import { navigationLinksWithChildren } from "@/constants";

const AccordionMobile = () => {
  const t = useTranslations("Layout.Navbar");
  return (
    <Accordion type="single" collapsible defaultValue="item-0">
      {navigationLinksWithChildren.map((link, index) => (
        <AccordionItem key={t(link.labelKey)} value={`item-${index}`}>
          <AccordionTrigger>{t(link.labelKey)}</AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-4">
              {link.items.map((item) => (
                <li key={t(item.labelKey)}>
                  <h3 className="font-semibold">{t(item.labelKey)}</h3>
                  <p className="text-muted-foreground">
                    {t(item.descriptionKey)}
                  </p>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}

      <LanguageSwitcher layout="accordion" />
      <ModeToggle layout="accordion" />
    </Accordion>
  );
};

export default AccordionMobile;
