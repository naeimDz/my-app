//path: src/app/[locale]/layout.tsx
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';


export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // استخراج اللغة المطلوبة
  const { locale } = await params;

  // التحقق مما إذا كانت اللغة مدعومة
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }



  return (
    <NextIntlClientProvider >{children}</NextIntlClientProvider>
  );
}
