import RegistrationForm from "../components/UserRegistration";
import { app } from "@/firebaseConfig";
import { auth } from "@clerk/nextjs";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export default async function Dashboard() {
  const { sessionClaims } = auth();
  const id = sessionClaims?.id;
  let userExists = false;
  try {
    const db = getFirestore(app);
    const userRef = doc(db, `users/${id}`);
    const docSnap = await getDoc(userRef);
    userExists = docSnap.exists();
  } catch (err) {
    console.error("Error checking user data:", err);
  }
  return (
    <div className=" bg-black">
      <div className="sm:w-1/2 mx-auto">
        {userExists ? (
          <h1 className="text-white">Exists</h1>
        ) : (
          <RegistrationForm />
        )}
      </div>
    </div>
  );
}
