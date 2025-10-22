// Next-Intl
import { useTranslations } from "next-intl";

// Components
import ButtonWithIcon from "@/components/common/ButtonWithIcon";
import AccordionFAQ from "./AccordionFAQ";

export const FAQ = () => {
  const t = useTranslations("Pages.Home.FAQ");
  return (
    <section className="container-section my-15 md:mt-[128px] md:mb-[112px] grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="max-w-[412px] space-y-4">
        <ButtonWithIcon label={t("introductionBtn")} />
        <h2 className="font-bold text-3xl md:text-4xl">{t("headline")}</h2>
        <p className="text-muted-foreground leading-relaxed">
          {t("paragraph")}
        </p>
      </div>

      <AccordionFAQ />
    </section>
  );
};
