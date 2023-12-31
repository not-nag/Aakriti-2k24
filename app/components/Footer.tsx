import React from "react";
import Icon from "./Icon";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="p-4 bg-black text-white">
      <h1 className="text-3xl font-medium tracking-wider">
        Canara Engineering College
      </h1>
      <p className="text-sm tracking-widest">
        Benjanapadavu, Bantwal Taluk, Mangaluru, Dakshina Kannada, Karnataka,
        India - 574219.
      </p>
      <div className="flex justify-center mt-1">
        <Icon
          hex={"9723C9"}
          type={"college"}
          url={"https://www.canaraengineering.in/"}
        />
        <Icon
          hex={"F4D738"}
          type={"instagram"}
          url={"https://www.canaraengineering.in/"}
        />
        <Icon
          hex={"FF69B4"}
          type={"facebook"}
          url={"https://www.canaraengineering.in/"}
        />
        <Icon
          hex={"BAFCA2"}
          type={"youtube"}
          url={"https://www.canaraengineering.in/"}
        />
        <Icon
          hex={"69D2E7"}
          type={"shirt"}
          url={"https://www.canaraengineering.in/"}
        />
      </div>
      <div className="mt-5 tracking-wide">
        <h2 className="text-lg  bg-[#F4D738] text-black w-max mb-2 p-1 px-2  font-semibold rounded-md">
          Technical Support
        </h2>
        <div className="flex items-center text-lg">
          <IoCallSharp />
          <p className="ml-4">+91 9353243321</p>
        </div>
        <div className="flex items-center text-lg">
          <MdEmail />
          <p className="ml-4">aakriti@canaraengineering.in</p>
        </div>
      </div>
      <div className="bg-white text-black mt-4 p-3 text-md font-medium tracking-wide sm:w-1/2 rounded-lg">
        <h1 className="text-xl font-bold">Links</h1>
        <Link href={"https://www.canaraengineering.in/"} target="_blank">
          <p className="underline">Privacy Policy</p>
        </Link>
        <Link href={"https://www.canaraengineering.in/"} target="_blank">
          <p className="underline">Refund & Cancellation Policy</p>
        </Link>
        <Link href={"https://www.canaraengineering.in/"} target="_blank">
          <p className="underline">Terms & Conditions</p>
        </Link>
        <Link href={"https://www.canaraengineering.in/"} target="_blank">
          <p className="underline">Shipping Policy</p>
        </Link>
      </div>
    </footer>
  );
}
