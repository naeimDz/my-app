import { NextRequest, NextResponse } from "next/server";
import { locales, defaultLocale } from "@/i18n/config";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // تحقق مما إذا كان المسار يحتوي على لغة مدعومة
  const hasLocale = locales.some((locale) => pathname.startsWith(`/${locale}`));

  // إذا لم يكن هناك لغة، أعد التوجيه إلى اللغة الافتراضية
  if (!hasLocale) {
    return NextResponse.redirect(new URL(`/${defaultLocale}${pathname}`, req.url));
  }

  return NextResponse.next();
}

// تطبيق Middleware فقط على الصفحات وليس الـ API أو الملفات الثابتة
export const config = {
  matcher: "/((?!_next|api|favicon.ico|assets).*)",
};
    
    