import { StaticImageData } from "next/image";

export type ValueType = {
  key: number;
  titleKey: string;
  descriptionKey: string;
  images: {
    light: {
      bg: StaticImageData;
      stats: StaticImageData[];
    };
    dark: {
      bg: StaticImageData;
      stats: StaticImageData[];
    };
  };
};

export type TranslationKey = string;

export type Partner = {
  image: StaticImageData;
  alt: string;
};

export type Testimony = {
  testimony: TranslationKey;
  author: TranslationKey;
  role: TranslationKey;
};

export type TrialBenefit = {
  icon: StaticImageData;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
};

export type Solution = {
  icon: StaticImageData;
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
  tags: TranslationKey[];
};

export type FAQ = {
  question: TranslationKey;
  anwser: TranslationKey;
};

export type NavigationLinkFooter = {
  title: string;
  links: string[];
};

export type MetadataMessages = {
  title: string;
  description: string;
  keywords: string[];
  favicon: string;
  openGraph: {
    title: string;
    description: string;
    type: string;
    url: string;
    image: string;
    locale: string;
    site_name: string;
  };
};
export type ThemeOption = {
  theme: "light" | "dark" | "system";
  titleKey: TranslationKey;
  descriptionKey: TranslationKey;
};

export type NavigationLinkWithChildren = {
  labelKey: TranslationKey;
  items: {
    labelKey: TranslationKey;
    descriptionKey: TranslationKey;
  }[];
};

export type ChildlessNavigationLink = {
  labelKey: TranslationKey;
};
