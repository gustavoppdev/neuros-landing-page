// Next.js & Next-Intl
import { useTranslations } from "next-intl";

// Components
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import AccordionMobile from "./AccordionMobile";

// Lucide & Constants
import { Menu, X } from "lucide-react";
import { childlessNavigationLinks } from "@/constants";

export const NavbarMobile = () => {
  const t = useTranslations("Layout.Navbar");
  const tAria = useTranslations("Others.Aria");

  return (
    <div className="block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="group transition-all duration-200"
          >
            {/* Ícone de menu visível quando fechado */}
            <Menu
              className="size-5 group-data-[state=open]:hidden"
              aria-label={tAria("openMenuMobile")}
            />

            {/* Ícone de X visível quando aberto */}
            <X
              className="size-5 hidden group-data-[state=open]:block"
              aria-label={tAria("closeMenuMobile")}
            />
          </Button>
        </SheetTrigger>

        <SheetContent className="w-full sm:max-w-none min-h-[calc(100dvh-65px)] md:min-h-[calc(100dvh-73px)] mt-[65px] md:mt-[73px] bg-neuros-background px-6">
          <SheetHeader className="sr-only">
            <SheetTitle className="sr-only"></SheetTitle>
            <SheetDescription className="sr-only"></SheetDescription>
          </SheetHeader>

          <AccordionMobile />

          <ul className="-mt-4 border-t">
            {childlessNavigationLinks.map((link) => (
              <li
                key={t(link.labelKey)}
                className="border-b last:border-b-0 py-3 text-sm font-medium"
              >
                {t(link.labelKey)}
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </div>
  );
};
