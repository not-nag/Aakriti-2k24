import RegistrationForm from "../components/UserRegistration";
import { app } from "@/firebaseConfig";
import { auth } from "@clerk/nextjs";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import Dashboard from "../components/Dashboard";

type DataType = {
  address: string;
  branch: string;
  college: string;
  degree: string;
  email: string;
  gender: string;
  mobile: string;
  name: string;
};

export default async function Home() {
  const { sessionClaims } = auth();
  const id = sessionClaims?.id;
  let userExists = false;
  let userData: DataType | null = null;

  try {
    const db = getFirestore(app);
    const userRef = doc(db, `users/${id}`);
    const docSnap = await getDoc(userRef);

    if (docSnap.exists()) {
      userExists = true;
      userData = docSnap.data() as DataType;
    }
  } catch (err) {
    console.error("Error checking user data:", err);
  }

  return (
    <div className={`${userExists ? "bg-[#c4a1ff]" : "bg-black"}`}>
      <div className="sm:w-1/2 mx-auto p-4">
        {userExists ? <Dashboard userData={userData} /> : <RegistrationForm />}
      </div>
    </div>
  );
}
