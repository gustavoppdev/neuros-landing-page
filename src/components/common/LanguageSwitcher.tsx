"use client";

// Next.js & Next-Intl
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

// Lucide Icons & Assets
import { ChevronDown, ChevronRight } from "lucide-react";

type Props = {
  layout?: "dropdown" | "accordion";
};

export default function LanguageSwitcher({ layout = "dropdown" }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Others.LanguageSwitcher");

  const handleLocaleChange = (newLocale: "pt" | "en") => {
    const newPath = `/${newLocale}${pathname.substring(3)}`;
    router.push(newPath);
  };

  const languageOptions = [
    {
      labelKey: "title",
      items: [
        {
          locale: "pt",
          titleKey: "languages.pt.title",
          descriptionKey: "languages.pt.description",
        },
        {
          locale: "en",
          titleKey: "languages.en.title",
          descriptionKey: "languages.en.description",
        },
      ],
    },
  ];

  return layout === "dropdown" ? (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="cursor-pointer w-fit gap-2 hover:bg-transparent hover:text-current/90"
        >
          {locale === "pt" ? "Português" : "English"}
          <ChevronDown className="size-4 text-neutral-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="text-muted-foreground">
        <DropdownMenuItem onClick={() => handleLocaleChange("pt")}>
          Português
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  ) : (
    <AccordionItem value={`item-language`}>
      <AccordionTrigger>{t("title")}</AccordionTrigger>
      <AccordionContent className="space-y-6">
        {languageOptions.flatMap((opt) =>
          opt.items.map((item, index) => (
            <div
              key={index}
              onClick={() => handleLocaleChange(item.locale as "pt" | "en")}
            >
              <h3 className="font-medium">{t(item.titleKey)}</h3>
              <span className="flex items-center gap-4 mt-2">
                <p className="text-muted-foreground">
                  {t(item.descriptionKey)}
                </p>
                <ChevronRight className="size-5" />
              </span>
            </div>
          ))
        )}
      </AccordionContent>
    </AccordionItem>
  );
}
