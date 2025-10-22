// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Componenents
import TrialCard from "./TrialCard";
import TrialBtn from "./TrialBtn";

// Assets & Constants
import { trialMask } from "@/assets";
import { trialBenefits } from "@/constants";

export const Trial = () => {
  const t = useTranslations("Pages.Home.Trial");
  return (
    <section className="md:container md:mx-auto md:px-8 xl:px-[118px] my-15 md:my-20">
      <div className="relative bg-[#387FF5] dark:bg-[#1e5ac2] md:rounded-4xl">
        <Image
          src={trialMask}
          alt="Background"
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={trialMask.src}
          className="object-cover"
        />
        <div className="relative grid gap-8 grid-cols-1 lg:grid-cols-2 p-8 md:p-15">
          <div className="space-y-4 lg:space-y-8">
            <h2 className="max-w-[500px] text-3xl md:text-4xl lg:text-5xl font-bold text-white">
              {t("headline")}
            </h2>
            <TrialBtn label={t("freeTrialBtn")} />
          </div>
          <ul className="flex flex-col gap-4">
            {trialBenefits.map((benefit, index) => (
              <TrialCard key={index} benefit={benefit} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
