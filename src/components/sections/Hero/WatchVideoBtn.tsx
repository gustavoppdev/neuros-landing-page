// Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";

// Lucide
import { Play } from "lucide-react";

const WatchVideoBtn = () => {
  const t = useTranslations("Pages.Home.Hero");
  const tAria = useTranslations("Others.Aria");

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#C3D1FF]/35 p-2 rounded-full ">
      <Button
        variant={"neuros_watch_video"}
        className="hover:scale-[1.02] transition-transform duration-300 size-20 md:h-18 md:w-fit"
      >
        <Play
          className="size-8 fill-[#387FF5] text-[#387FF5]"
          aria-label={tAria("watchVideoBtn")}
        />

        <div className="hidden md:block ml-2">
          <p>{t("watchIntroductionVideoBtn")}</p>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">{t("time")}</span>
            <span className="size-1 rounded-full bg-muted-foreground block"></span>
            <span className="text-[#387FF5] font-medium">{t("play")}</span>
          </div>
        </div>
      </Button>
    </div>
  );
};

export default WatchVideoBtn;
