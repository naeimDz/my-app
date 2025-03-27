import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar'], // اللغات المدعومة
  defaultLocale: 'en' // اللغة الافتراضية
});
