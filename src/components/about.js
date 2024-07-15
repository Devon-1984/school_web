import React from "react";
import Image from "next/image";

export default function About(data) {
  return (
    <>
      <div className="about-wrapper">
        <div className="about">
          <div>About us</div>
          <div>Trusted, honest, experienced teachers</div>
          <button>Learn More</button>
        </div>
        <Image
          className="about-img"
          src={data.heroImgUrl}
          width={1200}
          height={1200}
        />
      </div>
    </>
  );
}
