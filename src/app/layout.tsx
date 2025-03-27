//path src/app/layout.tsx
import "./globals.css";

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // استخراج اللغة المطلوبة
  const { locale } =  params;



  return (
    <html lang={locale}>
      <body>
        {children}
      </body>
    </html>
  );
}
