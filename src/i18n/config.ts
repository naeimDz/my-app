// Definition of the locales and the default locale
// Path: src/i18n/config.ts

export const locales = ["en", "ar"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";


// ⚡ حل المشكلة: تمرير الإعدادات مباشرة إلى next-intl
export const intlConfig = {
    locales,
    defaultLocale,
  };