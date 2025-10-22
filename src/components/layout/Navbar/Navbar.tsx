// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Topbar } from "../Topbar";
import { NavbarMobile } from "../NavbarMobile";
import { Button } from "@/components/ui/button";
import NavigationBar from "./NavigationBar";

// Assets
import NeurosLogo from "@/components/common/NeurosLogo";

export const Navbar = () => {
  const t = useTranslations("Layout.Navbar");
  return (
    <header className="container-section">
      <Topbar />
      <nav className="flex items-center justify-between py-2 md:py-3 border-b">
        <div className="flex items-center">
          <NeurosLogo styles="mr-10" />

          <NavigationBar />
        </div>

        <div className="flex gap-2 items-center">
          <Button
            variant={"neuros_outline"}
            size={"lg"}
            className="hidden md:flex"
          >
            {t("demoBtn")}
          </Button>
          <Button
            variant={"neuros_default"}
            size={"lg"}
            className="hidden md:flex"
          >
            {t("freeTrialBtn")}
          </Button>
          {/*  */}
          <NavbarMobile />
        </div>
      </nav>
    </header>
  );
};
