// Next-Intl
import { useTranslations } from "next-intl";

// Constants & Types
import { footerBottom } from "@/constants";
import { NavigationLinkFooter } from "@/types";

// Components
import NeurosLogo from "@/components/common/NeurosLogo";

const Footer = () => {
  const t = useTranslations("Layout.Footer");

  const footerLinks: NavigationLinkFooter[] = t.raw("navigationLinks");

  return (
    <footer className="container-section mt-15 mb-10 md:mt-20 p-4">
      <div className="flex items-center gap-4">
        <NeurosLogo />
        <span className="w-full block bg-muted-foreground/20 h-px"></span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-muted-foreground font-medium my-15">
        {footerLinks.map((group) => (
          <ul key={group.title} className="flex flex-col gap-2">
            <li className="text-primary mb-2">{group.title}</li>
            {group.links.map((link) => (
              <li key={link}>{link}</li>
            ))}
          </ul>
        ))}
      </div>

      <div className="py-5 border-t flex flex-wrap gap-4 justify-between items-center text-muted-foreground">
        <p>{t("copyright")}</p>
        <ul className="flex flex-wrap gap-4">
          {footerBottom.map((link, index) => (
            <li key={index}>{t(link)}</li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
