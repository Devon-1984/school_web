import React from "react";
import Link from "next/link";
import Logo from "@/icons/Logo";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [admissions, setAdmissions] = useState(true);

  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) return setColor(true);
      return setColor(false);
    };

    window.addEventListener("scroll", changeColor);

    return () => window.removeEventListener("scroll", changeColor);
  }, []);

  function remove() {
    setAdmissions(false);
  }

  return (
    <>
      <div className="header-admission-wrapper z-50 fixed max-w-full top-0 left-0">
        {admissions && (
          <div className="admission-wrapper flex justify-center bg-primary-500 text-white p-1 text-[11px] font-bold max-w-full relative">
            <p className="admission">Admissions are open</p>
            <button onClick={remove}>
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="#F5FCFA"
                  strokeWidth="4"
                />
              </svg>
            </button>
          </div>
        )}
        <header
          className={color ? "header-wrapper header-bg" : "header-wrapper"}
        >
          <div className="img-label">
            <Logo width={60} height={60} />
            <label className="font-heading max-w-[22ch] leading-[1.15] text-[12px]">
              SAHUDANGI HAT <br />
              P. K. ROY HIGH SCHOOL
            </label>
          </div>
          <ul className="header-list">
            <Link href={"/about"}>About</Link>
            <Link href={"/event"}>Events</Link>
            <Link href={"/admission"}>Admissions</Link>
            <li>Contact</li>
          </ul>
        </header>
      </div>
    </>
  );
}
