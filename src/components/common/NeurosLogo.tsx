// Next.js
import Image from "next/image";

// Assets
import { neurosLogo, neurosLogoIcon } from "@/assets";
import { Link } from "@/i18n/navigation";

type Props = {
  styles?: string;
};

const NeurosLogo = ({ styles }: Props) => {
  return (
    <Link href={"/"} className={`flex items-center gap-1.5 ${styles}`}>
      <Image
        src={neurosLogo}
        alt="Neuros"
        width={93}
        height={22}
        priority
        className="min-w-[93px] min-h-[22px] invert dark:invert-0"
      />
      <Image
        src={neurosLogoIcon}
        alt="Neuros"
        width={16}
        height={17}
        priority
        className="min-w-[16px] min-h-[17px]"
      />
    </Link>
  );
};

export default NeurosLogo;
