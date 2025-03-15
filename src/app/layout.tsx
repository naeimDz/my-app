
import I18nProvider from "@/i18n/provider";
import "./globals.css";
import { Locale } from "@/i18n/config";

export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };

}>) {
  return (
    <html>
      <body >
      <I18nProvider locale={params.locale}>{children}</I18nProvider>
        {children}
      </body>
    </html>
  );
}
