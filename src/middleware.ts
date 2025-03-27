import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // تجنب تطبيق التوجيه على API والملفات الداخلية
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};
