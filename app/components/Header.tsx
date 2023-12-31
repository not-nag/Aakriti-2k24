import React from "react";
import Button from "./Button";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export default function Header({}) {
  return (
    <nav className="flex justify-between items-center bg-[#C4A1FF] h-[80px] p-2">
      <h1 className="text-3xl sm:text-3xl md:text-3xl font-semibold tracking-wider ">
        Aakriti 2k24
      </h1>
      <Button text={"Login"} />
    </nav>
  );
}
