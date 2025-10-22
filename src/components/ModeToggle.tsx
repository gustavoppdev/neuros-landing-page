"use client";

// Next-intl
import { useTranslations } from "next-intl";

// Next-themes
import { useTheme } from "next-themes";

// Components
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

// Lucide & Constants
import { themesOptions } from "@/constants";
import { ChevronDown, ChevronRight } from "lucide-react";

type Props = {
  layout?: "dropdown" | "accordion";
};

export function ModeToggle({ layout = "dropdown" }: Props) {
  const { setTheme } = useTheme();
  const t = useTranslations("Others.ModeToggle");

  return layout === "dropdown" ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="text-muted-foreground">
          {t("title")}
          <ChevronDown className="size-4 text-neutral-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          {t("modes.light.title")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          {t("modes.dark.title")}
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          {t("modes.system.title")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <AccordionItem value={`item-theme`}>
      <AccordionTrigger className="">{t("title")}</AccordionTrigger>
      <AccordionContent className="space-y-6">
        {themesOptions.map((opt, index) => (
          <div key={index} onClick={() => setTheme(opt.theme)}>
            <h3 className="font-medium">{t(opt.titleKey)}</h3>
            <span className="flex items-center gap-4 mt-2">
              <p className="text-muted-foreground">{t(opt.descriptionKey)}</p>
              <ChevronRight className="size-5 text-muted-foreground/70" />
            </span>
          </div>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
}
