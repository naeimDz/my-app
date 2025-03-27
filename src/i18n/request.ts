import { getRequestConfig } from 'next-intl/server';
import { hasLocale } from 'next-intl';
import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  // استخراج اللغة المطلوبة من الطلب
  const requested = await requestLocale;

  // التحقق مما إذا كانت اللغة المطلوبة مدعومة، وإلا يتم تعيين اللغة الافتراضية
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: (await import(`locales/${locale}.json`)).default
  };
});
