import React from "react";
import facebook from "../../public/facebook.png";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/icons/Logo";

export default function Footer() {
  return (
    <footer className="footer-wrapper pl-12 pr-12">
      <div className="footer-block-wrapper">
        <figure className="footer-img-label">
          <div className="pos-rel footer-logo-wrapper">
            <Logo width={67.5} height={60} className="footer-logo" />
          </div>
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
          <Link href={"/notice"}>Notices</Link>
          <Link href={"/contact"}>Contact</Link>
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
