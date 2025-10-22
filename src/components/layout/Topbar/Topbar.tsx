// Next-Intl
import { useTranslations } from "next-intl";

// Components
import About from "./About";
import LanguageSwitcher from "@/components/common/LanguageSwitcher";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ModeToggle";

export const Topbar = () => {
  const t = useTranslations("Layout.Topbar");
  return (
    <div className="hidden lg:flex items-center justify-between text-muted-foreground py-2">
      <div className="space-x-2">
        <LanguageSwitcher />
        <Button variant={"link"} size={"sm"} className="text-muted-foreground">
          {t("support")}
        </Button>
      </div>

      <div className="space-x-2">
        <ModeToggle />
        <About />
      </div>
    </div>
  );
};
