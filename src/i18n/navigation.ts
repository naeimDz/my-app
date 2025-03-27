import { createNavigation } from 'next-intl/navigation';
import { routing } from './routing';

// دوال ملاحة متوافقة مع i18n
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
