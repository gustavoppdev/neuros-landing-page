import {
  creditcardIcon,
  globeIcon,
  logo1,
  logo10,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
  rateIcon,
  solutionIcon0,
  solutionIcon1,
  solutionIcon2,
  solutionIcon3,
  solutionIcon4,
  solutionIcon5,
  solutionIcon6,
  solutionIcon7,
  solutionIcon8,
  value1BgDark,
  value1BgLight,
  value1Stat1Dark,
  value1Stat1Light,
  value2BgDark,
  value2BgLight,
  value2Stat1Dark,
  value2Stat1Light,
  value2Stat2Dark,
  value2Stat2Light,
  value3BgDark,
  value3BgLight,
  value3Stat1Dark,
  value3Stat1Light,
  value4BgDark,
  value4BgLight,
  value4Stat1Dark,
  value4Stat1Light,
  value4Stat2Dark,
  value4Stat2Light,
} from "@/assets";
import {
  ChildlessNavigationLink,
  FAQ,
  NavigationLinkWithChildren,
  Partner,
  Solution,
  Testimony,
  ThemeOption,
  TranslationKey,
  TrialBenefit,
  ValueType,
} from "@/types";

export const aboutUs: TranslationKey[] = [
  "story",
  "team",
  "mission",
  "contact",
];

export const navigationLinksWithChildren: NavigationLinkWithChildren[] = [
  {
    labelKey: "navigationLinksWithChildren.features.title",
    items: [
      {
        labelKey: "navigationLinksWithChildren.features.links.0.label",
        descriptionKey:
          "navigationLinksWithChildren.features.links.0.description",
      },
      {
        labelKey: "navigationLinksWithChildren.features.links.1.label",
        descriptionKey:
          "navigationLinksWithChildren.features.links.1.description",
      },
      {
        labelKey: "navigationLinksWithChildren.features.links.2.label",
        descriptionKey:
          "navigationLinksWithChildren.features.links.2.description",
      },
    ],
  },
  {
    labelKey: "navigationLinksWithChildren.caseStudies.title",
    items: [
      {
        labelKey: "navigationLinksWithChildren.caseStudies.links.0.label",
        descriptionKey:
          "navigationLinksWithChildren.caseStudies.links.0.description",
      },
      {
        labelKey: "navigationLinksWithChildren.caseStudies.links.1.label",
        descriptionKey:
          "navigationLinksWithChildren.caseStudies.links.1.description",
      },
    ],
  },
];

export const childlessNavigationLinks: ChildlessNavigationLink[] = [
  {
    labelKey: "childlessNavigationLinks.pricing",
  },
  {
    labelKey: "childlessNavigationLinks.applications",
  },
];

export const partners: Partner[] = [
  { image: logo1, alt: "Logo 1" },
  { image: logo2, alt: "Logo 2" },
  { image: logo3, alt: "Logo 3" },
  { image: logo4, alt: "Logo 4" },
  { image: logo5, alt: "Logo 5" },
  { image: logo6, alt: "Logo 6" },
  { image: logo7, alt: "Logo 7" },
  { image: logo8, alt: "Logo 8" },
  { image: logo9, alt: "Logo 9" },
  { image: logo10, alt: "Logo 10" },
];

export const duplicatedPartners: Partner[] = [...partners, ...partners];

export const values: ValueType[] = [
  {
    key: 0,
    titleKey: "values.0.title",
    descriptionKey: "values.0.description",
    images: {
      light: {
        bg: value1BgLight,
        stats: [value1Stat1Light],
      },
      dark: {
        bg: value1BgDark,
        stats: [value1Stat1Dark],
      },
    },
  },
  {
    key: 1,
    titleKey: "values.1.title",
    descriptionKey: "values.1.description",
    images: {
      light: {
        bg: value2BgLight,
        stats: [value2Stat1Light, value2Stat2Light],
      },
      dark: {
        bg: value2BgDark,
        stats: [value2Stat1Dark, value2Stat2Dark],
      },
    },
  },
  {
    key: 2,
    titleKey: "values.2.title",
    descriptionKey: "values.2.description",
    images: {
      light: {
        bg: value3BgLight,
        stats: [value3Stat1Light],
      },
      dark: {
        bg: value3BgDark,
        stats: [value3Stat1Dark],
      },
    },
  },
  {
    key: 3,
    titleKey: "values.3.title",
    descriptionKey: "values.3.description",
    images: {
      light: {
        bg: value4BgLight,
        stats: [value4Stat1Light, value4Stat2Light],
      },
      dark: {
        bg: value4BgDark,
        stats: [value4Stat1Dark, value4Stat2Dark],
      },
    },
  },
];
export const testimonialsArray: Testimony[] = [
  {
    testimony: "testimonials.0.testimony",
    author: "testimonials.0.author",
    role: "testimonials.0.role",
  },
  {
    testimony: "testimonials.1.testimony",
    author: "testimonials.1.author",
    role: "testimonials.1.role",
  },
  {
    testimony: "testimonials.2.testimony",
    author: "testimonials.2.author",
    role: "testimonials.2.role",
  },
  {
    testimony: "testimonials.3.testimony",
    author: "testimonials.3.author",
    role: "testimonials.3.role",
  },
];

export const testimonialsArrayDuplicate: Testimony[] = [
  ...testimonialsArray,
  ...testimonialsArray,
];

export const trialBenefits: TrialBenefit[] = [
  {
    icon: creditcardIcon,
    titleKey: "benefits.0.title",
    descriptionKey: "benefits.0.description",
  },
  {
    icon: rateIcon,
    titleKey: "benefits.1.title",
    descriptionKey: "benefits.1.description",
  },
  {
    icon: globeIcon,
    titleKey: "benefits.2.title",
    descriptionKey: "benefits.2.description",
  },
];

export const solutionsArray: Solution[] = [
  {
    icon: solutionIcon0,
    titleKey: "benefits.0.title",
    descriptionKey: "benefits.0.description",
    tags: ["finance", "retail", "ecommerce"],
  },
  {
    icon: solutionIcon1,
    titleKey: "benefits.1.title",
    descriptionKey: "benefits.1.description",
    tags: ["tech", "healthcare", "manufacturing"],
  },
  {
    icon: solutionIcon2,
    titleKey: "benefits.2.title",
    descriptionKey: "benefits.2.description",
    tags: ["marketing", "sales", "operation"],
  },
  {
    icon: solutionIcon3,
    titleKey: "benefits.3.title",
    descriptionKey: "benefits.3.description",
    tags: ["ecommerce", "logistics", "supplyChain"],
  },
  {
    icon: solutionIcon4,
    titleKey: "benefits.4.title",
    descriptionKey: "benefits.4.description",
    tags: ["finance", "healthcare", "legal"],
  },
  {
    icon: solutionIcon5,
    titleKey: "benefits.5.title",
    descriptionKey: "benefits.5.description",
    tags: ["design", "development", "projectManagement"],
  },
  {
    icon: solutionIcon6,
    titleKey: "benefits.6.title",
    descriptionKey: "benefits.6.description",
    tags: ["allIndustries"],
  },
  {
    icon: solutionIcon7,
    titleKey: "benefits.7.title",
    descriptionKey: "benefits.7.description",
    tags: ["retail", "marketing", "sales"],
  },
  {
    icon: solutionIcon8,
    titleKey: "benefits.8.title",
    descriptionKey: "benefits.8.description",
    tags: ["startups", "SMEs", "enterprises"],
    //
  },
  {
    icon: solutionIcon0,
    titleKey: "benefits.0.title",
    descriptionKey: "benefits.0.description",
    tags: ["finance", "retail", "ecommerce"],
  },
  {
    icon: solutionIcon1,
    titleKey: "benefits.1.title",
    descriptionKey: "benefits.1.description",
    tags: ["tech", "healthcare", "manufacturing"],
  },
  {
    icon: solutionIcon2,
    titleKey: "benefits.2.title",
    descriptionKey: "benefits.2.description",
    tags: ["marketing", "sales", "operation"],
  },
];

export const faqArray: FAQ[] = [
  {
    question: "faqs.0.question",
    anwser: "faqs.0.anwser",
  },
  {
    question: "faqs.1.question",
    anwser: "faqs.1.anwser",
  },
  {
    question: "faqs.2.question",
    anwser: "faqs.2.anwser",
  },
  {
    question: "faqs.3.question",
    anwser: "faqs.3.anwser",
  },
  {
    question: "faqs.4.question",
    anwser: "faqs.4.anwser",
  },
  {
    question: "faqs.5.question",
    anwser: "faqs.5.anwser",
  },
];

export const footerBottom: TranslationKey[] = ["terms", "privacy", "security"];

export const themesOptions: ThemeOption[] = [
  {
    theme: "light",
    titleKey: "modes.light.title",
    descriptionKey: "modes.light.description",
  },
  {
    theme: "dark",
    titleKey: "modes.dark.title",
    descriptionKey: "modes.dark.description",
  },
  {
    theme: "system",
    titleKey: "modes.system.title",
    descriptionKey: "modes.system.description",
  },
];
