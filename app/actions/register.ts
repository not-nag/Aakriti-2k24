"use server";
import { app } from "@/firebaseConfig";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { auth } from "@clerk/nextjs";

export default async function register(data) {
  try {
    const { sessionClaims } = auth();
    const email = sessionClaims?.email;
    const uid = sessionClaims?.id;

    const db = getFirestore(app);
    data.email = email;

    const userRef = doc(db, `users/${uid}`);

    await setDoc(userRef, data);

    return { success: true, message: "Details uploaded successfully!" };
  } catch (err) {
    console.error("Firebase error:", err);
    return { success: false, message: "Details could not be added" };
  }
}
