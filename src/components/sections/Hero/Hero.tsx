// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components
import ButtonWithIcon from "@/components/common/ButtonWithIcon";
import WatchVideoBtn from "./WatchVideoBtn";
import CTAButtons from "./CTAButtons";

// Assets & Lucide Icons
import { heroBanner, heroBannerDark } from "@/assets";

export const Hero = () => {
  const t = useTranslations("Pages.Home.Hero");

  return (
    <section className="container-section py-[60px] md:pt-[112px] md:pb-[80px] grid grid-cols-1 gap-y-8 md:gap-y-15">
      <div className="flex gap-5 flex-col items-center text-center max-w-[586px] lg:max-w-[860px] mx-auto">
        <ButtonWithIcon label={t("introductionBtn")} />

        <h1 className="font-bold text-4xl md:text-5xl ">{t("headline")}</h1>
        <p className="text-muted-foreground max-w-[700px]">{t("paragraph")}</p>
        <CTAButtons />
      </div>
      <div className="relative aspect-[380/267] md:aspect-[373/240] lg:aspect-[301/120] rounded-4xl overflow-hidden">
        {/* Light SVG */}
        <Image
          src={heroBanner}
          alt="Illustration"
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={heroBanner.src}
          className="object-cover transition-opacity duration-500 ease-in-out dark:opacity-0"
        />

        {/* Dark SVG */}
        <Image
          src={heroBannerDark}
          alt="Illustration"
          fill
          sizes="100vw"
          placeholder="blur"
          blurDataURL={heroBannerDark.src}
          className="object-cover opacity-0 transition-opacity duration-500 ease-in-out dark:opacity-100"
        />

        <WatchVideoBtn />
      </div>
    </section>
  );
};
