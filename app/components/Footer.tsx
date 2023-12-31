import React from "react";
import Icon from "./Icon";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="p-4 bg-black text-white">
      <h1 className="text-3xl font-medium">Canara Engineering College</h1>
      <p className="text-sm">
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
        <h2 className="text-lg border-white bg-[#FF6B6B] text-black w-max mb-2 p-1 px-2 border-4 font-semibold rounded-md">
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
    </footer>
  );
}
