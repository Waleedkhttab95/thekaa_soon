import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Locales } from "../types/locale.types";
import { pingAR } from "@/config/fonts";
import "./globals.css";

export async function generateMetadata() {
  const locale = (await getLocale()) as keyof typeof metadataTranslations;
  const metadataTranslations = {
    en: {
      title: "Welcome to Thekaa",
    },
    ar: { title: "أهلاً بك في ذكاء" },
  };
  return metadataTranslations[locale];
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale === Locales.ar ? "rtl" : "ltr"}>
      <body className={`${pingAR.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
