// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// React
import React from "react";

// Types
import { Solution } from "@/types";

type Props = {
  solution: Solution;
};

const SolutionCard = ({ solution }: Props) => {
  const t = useTranslations("Pages.Home.Solutions");
  const tTag = useTranslations("Pages.Home.Solutions.Tags");
  return (
    <li className="border rounded-[12px] p-8 flex flex-col gap-4 hover:border-neuros-primary transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-md hover:shadow-neuros-primary/30">
      <Image
        src={solution.icon}
        alt={t(solution.titleKey)}
        width={32}
        height={32}
        className="min-w-8 dark:invert dark:brightness-60 dark:opacity-50"
      />

      <h3 className="font-bold">{t(solution.titleKey)}</h3>
      <p className="text-muted-foreground line-clamp-3">
        {t(solution.descriptionKey)}
      </p>

      <p className="text-neuros-primary">
        {solution.tags.map((tag, index) => (
          <React.Fragment key={index}>
            <span className="hover:underline underline-offset-4 cursor-pointer">
              {tTag(tag)}
            </span>

            {index < solution.tags.length - 1 && ", "}
          </React.Fragment>
        ))}
      </p>
    </li>
  );
};

export default SolutionCard;
