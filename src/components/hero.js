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
        <div className="hero-content white">
          <p className="h3">10,000+</p>
          <p className="p">Students</p>
        </div>
        <div className="hero-content white">
          <p className="h3">30+</p>
          <p className="p">Classrooms</p>
        </div>
        <div className="hero-content white">
          <p className="h3">40+</p>
          <p className="p">Faculty</p>
        </div>
      </div>
    </>
  );
}
