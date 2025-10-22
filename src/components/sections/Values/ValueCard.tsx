"use client";

// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Next-themes
import { useTheme } from "next-themes";

// Types
import { ValueType } from "@/types";

// React
import { useEffect, useState } from "react";

type Props = {
  value: ValueType;
};

const ValueCard = ({ value }: Props) => {
  const t = useTranslations("Pages.Home.Values");
  const { resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // Evita mismatch no SSR — só renderiza depois que o tema foi montado
  if (!mounted) return null;

  const themeImages =
    resolvedTheme === "dark" ? value.images.dark : value.images.light;

  const statStyles: Record<string, string> = {
    "0-0": "aspect-square w-2/3 -bottom-15 -left-15 sm:-bottom-25 sm:-left-25",
    "1-0": "aspect-square w-2/3 -top-10 -left-10 sm:-top-15 sm:-left-15",
    "1-1": "w-2/3 aspect-video top-20 -right-20 sm:top-40 sm:-right-30",
    "2-0": "aspect-[82/55] w-3/4 -bottom-10 -left-10 sm:-bottom-25 sm:-left-25",
    "3-0": "aspect-square w-3/5 -top-10 -left-10 sm:-top-15 sm:-left-25",
    "3-1":
      "aspect-square w-3/5 -bottom-10 -right-10 sm:-bottom-15 sm:-right-25",
  };

  const isReversed = value.key === 1 || value.key === 3;

  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-center justify-between max-lg:[&>*:first-child]:order-2 ${
        isReversed ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Texto */}
      <div className="space-y-3 lg:max-w-[380px] xl:max-w-[480px]">
        <h3 className="font-bold text-2xl md:text-3xl">{t(value.titleKey)}</h3>
        <p className="text-muted-foreground leading-relaxed line-clamp-4">
          {t(value.descriptionKey)}
        </p>
      </div>

      {/* Imagem principal + stats */}
      <div className="relative w-full p-6 sm:p-10 lg:p-0">
        <div
          className="relative mx-auto aspect-[157/111] md:aspect-[578/407] lg:aspect-[433/304] 
          hover:scale-[1.01] transition-transform duration-300"
        >
          <Image
            src={themeImages.bg}
            alt="Background"
            fill
            placeholder="blur"
            blurDataURL={themeImages.bg.src}
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
          />

          {themeImages.stats.map((stat, statIndex) => {
            const styleKey = `${value.key}-${statIndex}`;
            const specificClasses =
              statStyles[styleKey] || "w-1/4 h-auto aspect-square";
            const combinedClasses = `absolute ${specificClasses} transition-all duration-300 z-10 hover:rotate-6 hover:scale-[1.02]`;

            return (
              <div key={statIndex} className={combinedClasses}>
                <Image
                  src={stat}
                  alt="Stat"
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL={stat.src}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ValueCard;
