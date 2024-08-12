import React from "react";
import Link from "next/link";

export default function Cta() {
  return (
    <div className="cta p-container">
      <p className="cta-text h4">We’re here to help you shape the future.</p>
      <button className="button">
        <Link href={"/contact"}>Contact us</Link>
      </button>
    </div>
  );
}
