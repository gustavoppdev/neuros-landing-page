// Next.js
import Image from "next/image";

// Componenets
import { Button } from "@/components/ui/button";

// Assets
import { aiIcon } from "@/assets";

type Props = {
  label: string;
};

const TrialBtn = ({ label }: Props) => {
  return (
    <Button
      size={"lg"}
      className="bg-gradient-to-br from-white/16 to-white/29 hover:bg-gradient-to-br hover:from-white/10 hover:to-white/23 font-bold md:text-base w-full sm:w-fit text-white"
    >
      {label}
      <Image
        src={aiIcon}
        alt="Illustration"
        width={20}
        height={20}
        className="invert brightness-0"
      />
    </Button>
  );
};

export default TrialBtn;
