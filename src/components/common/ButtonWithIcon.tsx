import Image from "next/image";
import { Button } from "../ui/button";
import { aiIcon } from "@/assets";

type Props = {
  label: string;
};

const ButtonWithIcon = ({ label }: Props) => {
  return (
    <Button
      variant={"outline"}
      className="rounded-full shadow shadow-[#B6D1FB]/40 hover:shadow-[#B6D1FB]/50 hover:scale-[1.02] hover:bg-background whitespace-normal h-auto"
    >
      <Image
        src={aiIcon}
        alt="Ai Icon"
        width={20}
        height={20}
        className="min-h-5 min-w-5"
      />
      {label}
    </Button>
  );
};

export default ButtonWithIcon;
