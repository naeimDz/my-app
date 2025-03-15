"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { Locale, defaultLocale } from "./config";

interface Props {
  children: ReactNode;
  locale: Locale;
}

export default async function I18nProvider({ children, locale }: Props) {
  let messages;
  try {
    messages = (await import(`./locales/${locale}.json`)).default;
  } catch (error) {
    messages = (await import(`./locales/${defaultLocale}.json`)).default;
  }

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
