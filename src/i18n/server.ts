// path: src/i18n/server.ts
// this file is responsible for providing the translation messages to the application
import { Locale, defaultLocale, intlConfig } from "./config";

export async function getMessages(locale: string) {
    if (!intlConfig.locales.includes(locale as any)) {
      locale = intlConfig.defaultLocale;
    }
  
    try {
      return (await import(`./locales/${locale}.json`)).default;
    } catch {
      return (await import(`./locales/${intlConfig.defaultLocale}.json`)).default;
    }
  }