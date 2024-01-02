"use client";

import React from "react";
import Button from "./Button";
import { Poppins } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { useClerk } from "@clerk/clerk-react";

import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Header({}) {
  const { signOut } = useClerk();
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center bg-white h-[80px] p-2 sm:px-10">
      <Link href={"/"}>
        <h1 className="text-[28px] sm:text-3xl md:text-3xl font-bold tracking-wider ">
          Aakriti 2k24
        </h1>
      </Link>
      {isSignedIn ? (
        pathname === "/dashboard" ? (
          <Link href="/" onClick={() => signOut()}>
            <Button text={"Logout"} bg="yellow-500" />
          </Link>
        ) : (
          <Link href={"/dashboard"}>
            <Button text={"Profile"} bg="yellow-500" />
          </Link>
        )
      ) : (
        <Link href={"/dashboard"}>
          <Button text={"Login"} bg="yellow-500" />
        </Link>
      )}
    </nav>
  );
}
