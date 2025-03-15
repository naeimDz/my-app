import { useTranslation } from "@/i18n/useTranslation";

export default function Home() {
  const t = useTranslation();

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 text-center">
      <div>
        <h1 className="text-3xl font-bold">{t("home.title")}</h1>
        <p className="text-gray-600 mt-2">{t("home.description")}</p>
      </div>
    </div>
  );
}
