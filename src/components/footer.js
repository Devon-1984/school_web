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
          <figcaption className="footer-school-name">
            EKTLASAL TILESWARI ADHIKARY HIGH SCHOOL
          </figcaption>
        </figure>
        <label className="socials-mine">© 2024 | Developed by Debangan</label>
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
          <li>2499, Martha Allen Drive, New York, USA.</li>
          <li>321-464223482</li>
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
