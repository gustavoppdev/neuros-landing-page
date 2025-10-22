// Next.js
import Image from "next/image";

// Types
import { Partner } from "@/types";

type Props = {
  duplicatedPartners: Partner[];
  reverse?: boolean;
};
const LogosAnimated = ({ duplicatedPartners, reverse = false }: Props) => {
  return (
    <div className="fade-mask">
      <ul
        className={`flex w-max gap-10 py-4 ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {duplicatedPartners.map((logo, index) => (
          <li
            key={`scroll-1-${index}`}
            className="relative w-[163px] h-[39px] flex-shrink-0"
          >
            <Image
              src={logo.image}
              alt={logo.alt}
              fill
              sizes="163px"
              className="object-contain dark:invert dark:brightness-10"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LogosAnimated;
