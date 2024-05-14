import React from "react";
import logo from "../../public/logo.svg";
import facebook from "../../public/facebook.png";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="footer-block-wrapper">
        <figure className="footer-img-label">
          <Image className="footer-img" src={logo} />
          <figcaption className="footer-school-name h5">
            SAHUDANGI HAT <br />
            P. K. ROY HIGH SCHOOL
          </figcaption>
        </figure>
        <a
          href="https://www.linkedin.com/in/debangan-banerjee/"
          className="socials-mine"
        >
          © 2024 | Developed by Debangan
        </a>
      </div>
      <label className="footer-list-wrapper">
        <p className="h5">Our School</p>
        <ul className="footer-list">
          <Link href={"/about"}>About</Link>
          <Link href={"/event"}>Events</Link>
          <Link href={"/admission"}>Admissions</Link>
          <li>Contact</li>
        </ul>
      </label>
      <label className="footer-list-wrapper">
        <p className="h5">Contact us</p>
        <ul className="footer-list">
          <li>
            Vill + P.O Sahudangi, <br />
            Jalpaiguri - 735135
          </li>
          <li>sdhpkr@gmailcom</li>
          <li>
            <div className="socials">
              Socials:
              <a href="#" className="fb-wrap">
                <Image className="fb" src={facebook} />
                Facebook
              </a>
            </div>
          </li>
        </ul>
      </label>
    </footer>
  );
}
