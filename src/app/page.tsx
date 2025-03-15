import { db } from "@/infrastructure/firebase/firebaseClient";
import { getDocs, collection } from "firebase/firestore";


export default async function Home() {
  try {
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
  return (
    <div>
      <h1>🚀 Welcome to FeedbackDZ!</h1>
      <p>Next.js + TypeScript setup is complete.</p>
      <div className="flex min-h-screen items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">🚀 Tailwind CSS يعمل بنجاح!</h1>
      </div>
    </div>
  );
}
