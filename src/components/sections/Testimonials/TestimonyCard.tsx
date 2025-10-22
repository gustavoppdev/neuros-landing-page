// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Assets & Types
import { avatar } from "@/assets";
import { Testimony } from "@/types";

type Props = {
  testimonial: Testimony;
};

const TestimonyCard = ({ testimonial }: Props) => {
  const t = useTranslations("Pages.Home.Testimonials");
  return (
    <li className="relative flex flex-col justify-between border rounded-xl py-8 px-10 text-center h-[524px] w-[352px]">
      <p className="mt-30">{t(testimonial.testimony)}</p>

      <div className="flex flex-col items-center">
        <Image
          src={avatar}
          alt="Avatar"
          width={32}
          height={32}
          className="object-contain min-h-8"
        />

        <p className="font-semibold mt-4">{t(testimonial.author)}</p>
        <p className="text-muted-foreground">{t(testimonial.role)}</p>
      </div>
    </li>
  );
};

export default TestimonyCard;
