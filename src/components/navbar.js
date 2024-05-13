import React from "react";
import logo from "../../public/logo.svg";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="header-wrapper">
      <div className="img-label">
        <Image src={logo} />
        <label className="school-name">
          EKTLASAL TILESWARI ADHIKARY HIGH SCHOOL
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
