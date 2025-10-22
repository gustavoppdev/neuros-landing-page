import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { aboutUs } from "@/constants";

import { ChevronDown } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("Layout.Topbar.aboutUs");
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm">
          {t("title")}
          <ChevronDown className="size-4 text-neutral-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="text-muted-foreground">
        {aboutUs.map((label, index) => (
          <DropdownMenuItem key={index}>{t(label)}</DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default About;
