import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <div className=" flex items-center justify-center flex-col bg-primary-200 text-primary-900 p-container mt-8 md:mt-16">
      <p className="text-center leading-[1.2] h4">
        We’re here to help you shape the future.
      </p>
      <button className="button py-[10px] px-7 mt-5">
        <Link href={"/contact"}>Contact us</Link>
      </button>
    </div>
  );
}
