// Next.js & Next-Intl
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { setRequestLocale } from "next-intl/server";

// Components
import { Button } from "@/components/ui/button";

// lucide Icons
import { ArrowLeft } from "lucide-react";

interface NotFoundPageProps {
  locale: string;
}

const NotFoundPage = ({ locale }: NotFoundPageProps) => {
  setRequestLocale(locale);

  const t = useTranslations("Others.NotFoundPage");

  return (
    <div className="min-h-[calc(100dvh-68px)] lg:min-h-[calc(100dvh-100px)] grid place-content-center text-center">
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] font-extrabold text-muted-foreground/50 leading-none tracking-tighter">
          404
        </h1>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight max-w-xl">
          {t("title")}
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mt-2">
          {t("description")}
        </p>

        <Link href={"/"} passHref className="mt-4">
          <Button size={"lg"} variant="neuros_default" className="gap-2">
            <ArrowLeft className="size-5" />
            {t("goBackHomeBtn")}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
