import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function HomePage() {
  const t = useTranslations();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>

      <button>{t('buttons.submit')}</button>
      <button>{t('buttons.cancel')}</button>

    </div>
  );
}
