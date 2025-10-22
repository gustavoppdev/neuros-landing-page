// Next-Intl
import { useTranslations } from "next-intl";

// Components
import ValueCard from "./ValueCard";
import ButtonWithIcon from "@/components/common/ButtonWithIcon";

// Constants
import { values } from "@/constants";

export const Values = () => {
  const t = useTranslations("Pages.Home.Values");
  return (
    <section className="container-section my-15 md:mt-[128px] md:mb-[112px] overflow-hidden">
      <div className="mb-[48px] md:mb-20 space-y-4 text-center max-w-[586px] lg:max-w-[860px] mx-auto">
        <ButtonWithIcon label={t("introductionBtn")} />
        <h2 className="font-bold text-3xl md:text-4xl">{t("headline")}</h2>
        <p className="text-muted-foreground">{t("paragraph")}</p>
      </div>

      <div className="flex flex-col gap-[64px] lg:gap-[112px]">
        {values.map((value, index) => (
          <ValueCard key={index} value={value} />
        ))}
      </div>
    </section>
  );
};
