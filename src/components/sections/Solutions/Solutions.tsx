"use client";

// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Componenets
import { Button } from "@/components/ui/button";
import SolutionCard from "./SolutionCard";
import ButtonWithIcon from "@/components/common/ButtonWithIcon";

// React
import { useState } from "react";

// Constants
import { solutionsArray } from "@/constants";

export const Solutions = () => {
  const t = useTranslations("Pages.Home.Solutions");
  // Mostra inicialmente apenas 9 cards
  const [visibleCount, setVisibleCount] = useState(9);
  const isAllVisible = visibleCount >= solutionsArray.length;

  // Exibe mais 6 a cada clique
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 3);
  };
  return (
    <section className="container-section mt-[128px] mb-[112px] space-y-15">
      <div className="max-w-[760px] mx-auto text-center space-y-4">
        <ButtonWithIcon label={t("introductionBtn")} />
        <h2 className="font-bold text-3xl md:text-4xl">{t("headline")}</h2>
        <p className="text-muted-foreground">{t("paragraph")}</p>
      </div>

      <div className="relative">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutionsArray.slice(0, visibleCount).map((solution, index) => (
            <SolutionCard key={index} solution={solution} />
          ))}
        </ul>

        {/* Fade no final da grade */}
        {!isAllVisible && (
          <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-neuros-background via-neuros-background/90 to-transparent rounded-b-[12px]" />
        )}
      </div>
      {/* Botão "Ver mais" */}
      {!isAllVisible && (
        <div className="flex justify-center">
          <Button
            onClick={handleShowMore}
            size="lg"
            variant={"outline"}
            className="font-semibold"
          >
            {t("exploreMoreBtn")}
          </Button>
        </div>
      )}
    </section>
  );
};
