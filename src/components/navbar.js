import React from "react";
import Link from "next/link";
import Logo from "@/icons/Logo";
import { useState } from "react";

export default function navbar() {
  const [admissions, setAdmissions] = useState(true);

  function remove() {
    setAdmissions(false);
  }

  return (
    <>
      <div className="header-admission-wrapper z-50 fixed max-w-full top-0 left-0">
        {admissions && (
          <div className="admission-wrapper">
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
        <header className="header-wrapper">
          <div className="img-label">
            <Logo width={60} height={60} />
            <label className="school-name font-heading">
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
