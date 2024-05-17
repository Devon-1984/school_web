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
      <div className="header-admission-wrapper">
        {admissions && (
          <div className="admission-wrapper">
            <p className="admission">Admissions are open </p>
            <button onClick={remove}> x </button>
          </div>
        )}
        <header className="header-wrapper">
          <div className="img-label">
            <Logo width={60} height={60} />
            <label className="school-name h5">
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
