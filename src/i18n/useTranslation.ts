//path: src/i18n/useTranslation.ts
// this file is responsible for providing the translation messages to the application
// benefits of using this file is to avoid importing the useTranslations from next-intl in every file
import { useTranslations } from "next-intl";

export const useTranslation = (locale?: string) => {
    return useTranslations(locale);
  };