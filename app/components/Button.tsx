import React from "react";

export default function Button({ text, bg }) {
  return (
    <button className="rounded-md bg-black">
      <span
        className={`block -translate-x-1 -translate-y-1 rounded-md border-2 border-black ${bg} p-2 text-lg hover:-translate-y-2 
        active:translate-x-0 active:translate-y-0
        transition-all font-semibold min-w-[130px] tracking-wide`}
      >
        {text}
      </span>
    </button>
  );
}
