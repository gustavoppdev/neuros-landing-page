// Next-Intl
import { useTranslations } from "next-intl";

// Constants & Assets
import { testimonialsArrayDuplicate } from "@/constants";

// Components
import TestimonyCard from "./TestimonyCard";

export const Testimonials = () => {
  const t = useTranslations("Pages.Home.Testimonials");
  return (
    <section className="container-section my-15 md:mt-[128px] md:mb-[112px]">
      <div className="mb-[48px] space-y-4 text-center max-w-[586px] lg:max-w-[860px] mx-auto">
        <h2 className="font-bold text-3xl md:text-4xl">{t("headline")}</h2>
        <p className="text-muted-foreground">{t("paragraph")}</p>
      </div>

      <div className="relative overflow-hidden group">
        <div className="fade-mask">
          <ul className="flex w-max animate-scroll-reverse gap-6">
            {testimonialsArrayDuplicate.map((testimonial, index) => (
              <TestimonyCard key={index} testimonial={testimonial} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
