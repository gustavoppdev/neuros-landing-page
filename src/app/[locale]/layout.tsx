// Next.js & Next-Intl
import type { Metadata } from "next";
import { DM_Sans, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { routing } from "@/i18n/routing";

// Components
import { Navbar } from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import ScrollToTop from "@/components/common/ScrollToTop";

// Css & Types
import "./globals.css";
import { MetadataMessages } from "@/types";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const messages = await getMessages();

  const metadata = messages.metadata as MetadataMessages;

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    // metadataBase: new URL("https://gustavoppdev.vercel.app"),
    icons: {
      icon: metadata.favicon,
      shortcut: metadata.favicon,
      apple: metadata.favicon,
    },

    authors: [{ name: "Gustavo Henrique" }],
    creator: "Gustavo Henrique",
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function RootLayout({ children, params }: Props) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${dmSans.variable} ${inter.variable} antialiased `}>
        <NextIntlClientProvider>
          <ThemeProvider
            attribute={"class"}
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <ScrollToTop />
            {children}
            <Footer />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
