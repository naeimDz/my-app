"use client"
import { Button } from "@/components/ui/button";
import { useTranslation } from "@/i18n/useTranslation";
import { db } from "@/infrastructure/firebase/firebaseClient";
import { getDocs, collection } from "firebase/firestore";
import Link from "next/link";


export default async function Home() {
  const t = useTranslation();
  try {
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
  return (
    <>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">{t("welcome")}</h1>
      <div className="flex gap-4">
        <Link href="/?locale=en">
          <button className="px-4 py-2 bg-blue-500 text-white rounded">🇺🇸 English</button>
        </Link>
        <Link href="/?locale=ar">
          <button className="px-4 py-2 bg-green-500 text-white rounded">🇸🇦 العربية</button>
        </Link>
      </div>
    </div>
    <div>
      <h1>🚀 Welcome to FeedbackDZ!</h1>
      <p>Next.js + TypeScript setup is complete.</p>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">🚀 Tailwind CSS يعمل بنجاح!</h1>
      </div>
    </div><div className="flex min-h-screen items-center justify-center bg-gray-100">
        <Button variant="default" className="text-lg">
          🚀 زر يعمل من ShadCN UI!
        </Button>
      </div></>
  );
}
