// Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

// Lucide
import { Play } from "lucide-react";

const CTAButtons = () => {
  const t = useTranslations("Pages.Home.Hero");
  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-fit">
      <Button
        variant={"neuros_default"}
        size={"lg"}
        className="w-full sm:w-fit"
      >
        {t("freeTrialBtn")}
      </Button>
      <Button
        variant={"outline"}
        size={"lg"}
        className="w-full sm:w-fit dark:bg-neuros-background"
      >
        <Play className="size-4 fill-current" />
        {t("watchVideoBtn")}
      </Button>
    </div>
  );
};

export default CTAButtons;
