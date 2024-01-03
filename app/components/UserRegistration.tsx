"use server";

import RegistrationTemplate from "./RegistrationTemplate";
import { auth } from "@clerk/nextjs";

export default async function RegistrationForm() {
  const { sessionClaims } = auth();
  const email = sessionClaims?.email;

  return <RegistrationTemplate email={email} />;
}
