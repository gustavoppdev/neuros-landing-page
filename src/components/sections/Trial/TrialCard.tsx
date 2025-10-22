// Next.js & Next-Intl
import Image from "next/image";

// Types
import { TrialBenefit } from "@/types";
import { useTranslations } from "next-intl";

type Props = {
  benefit: TrialBenefit;
};

const TrialCard = ({ benefit }: Props) => {
  const t = useTranslations("Pages.Home.Trial");
  return (
    <li className="bg-gradient-to-r from-white/12 to-white/18 backdrop-blur-xl p-4 rounded-2xl overflow-hidden flex gap-4 items-center hover:scale-[1.01] transition-all duration-200 group">
      <div className="bg-gradient-to-r from-white/10 to-white/19 size-12 min-w-12 p-1 grid place-content-center rounded-2xl ">
        <Image
          src={benefit.icon}
          alt={t(benefit.titleKey)}
          width={24}
          height={24}
          className="min-w-6"
        />
      </div>

      <div>
        <p className="font-semibold text-white">{t(benefit.titleKey)}</p>
        <p className="text-white/70">{t(benefit.descriptionKey)}</p>
      </div>
    </li>
  );
};

export default TrialCard;
