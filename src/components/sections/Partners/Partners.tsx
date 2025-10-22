// Next-Intl
import { useTranslations } from "next-intl";

// Components
import LogosAnimated from "./LogosAnimated";

// Constants
import { duplicatedPartners } from "@/constants";

export const Partners = () => {
  const t = useTranslations("Pages.Home.Partners");
  return (
    <section className="container-section py-12">
      <p className="text-center mb-8 text-muted-foreground text-lg">
        {t("headline")}
      </p>

      {/* Linha 1 - Scroll da esquerda para direita */}
      <div className="relative overflow-hidden">
        <LogosAnimated duplicatedPartners={duplicatedPartners} />
      </div>

      {/* Linha 2 - Scroll da direita para esquerda */}
      <div className="relative overflow-hidden mt-8">
        <LogosAnimated duplicatedPartners={duplicatedPartners} reverse={true} />
      </div>
    </section>
  );
};
