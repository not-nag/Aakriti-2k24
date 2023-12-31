"use client";

import React from "react";
import Button from "./Button";
import { Poppins } from "next/font/google";
import { useAuth } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Header({}) {
  const { isSignedIn } = useAuth();
  const pathname = usePathname();

  return (
    <nav className="flex justify-between items-center bg-white h-[80px] p-2">
      <Link href={"/"}>
        <h1 className="text-[28px] sm:text-3xl md:text-3xl font-bold tracking-wider ">
          Aakriti 2k24
        </h1>
      </Link>
      {isSignedIn ? (
        pathname === "/dashboard" ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Link href={"/dashboard"}>
            <Button text={"Profile"} />
          </Link>
        )
      ) : (
        <Link href={"/dashboard"}>
          <Button text={"Login"} />
        </Link>
      )}
    </nav>
  );
}
