import React from "react";
import hero from "../../public/hero-img.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <>
      <div className="hero-img-wrapper">
        <Image className="hero-img" src={hero} />
        <div className="hero-heading-wrapper">
          <h4 className="hero-heading h4">
            Sahudangi Hat <br />
            P.K. Roy High School
          </h4>
          <p>Your journey of knowledge begins here</p>
        </div>
      </div>
      <div className="stats">
        <div className="h4 white">10,000+</div>
        <div className="h4 white">30+</div>
        <div className="h4 white">40+</div>
      </div>
    </>
  );
}
