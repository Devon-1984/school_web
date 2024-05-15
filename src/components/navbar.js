import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/icons/Logo";

const Navbar = () => {
  return (
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
  );
};

export default Navbar;
