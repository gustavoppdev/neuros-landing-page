// Next-Intl
import { useTranslations } from "next-intl";

// Components
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

// Constants
import {
  childlessNavigationLinks,
  navigationLinksWithChildren,
} from "@/constants";

const NavigationBar = () => {
  const t = useTranslations("Layout.Navbar");
  return (
    <NavigationMenu viewport={false} className="hidden lg:flex">
      <NavigationMenuList>
        {navigationLinksWithChildren.map((link) => (
          <NavigationMenuItem key={t(link.labelKey)}>
            <NavigationMenuTrigger className="data-[state=open]:text-[#387FF5] data-[state=open]:underline underline-offset-4 cursor-pointer text-muted-foreground">
              {t(link.labelKey)}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[300px] p-4 gap-2">
                {link.items.map((item) => (
                  <NavigationMenuLink href="#" key={t(item.labelKey)}>
                    <li className="cursor-pointer hover:bg-accent">
                      <h3 className="font-semibold">{t(item.labelKey)}</h3>
                      <p className="text-muted-foreground">
                        {t(item.descriptionKey)}
                      </p>
                    </li>
                  </NavigationMenuLink>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        {childlessNavigationLinks.map((link) => (
          <NavigationMenuItem key={t(link.labelKey)}>
            <NavigationMenuLink
              href="#"
              className="hover:text-[#387FF5] font-medium bg-transparent hover:bg-transparent cursor-pointer text-muted-foreground"
            >
              {t(link.labelKey)}
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationBar;
