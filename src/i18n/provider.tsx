// Code: i18n provider
// path: src/i18n/provider.tsx
// this file is responsible for providing the translation messages to the application
"use client";

import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import { Locale } from "./config";

interface Props {
  children: ReactNode;
  locale: Locale;
  messages: Record<string, string>;

}

export default async function I18nProvider({ children, locale, messages }: Props) {

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
