import React from "react";
import Image from "next/image";

export default function About({ data }) {
  return (
    <>
      <div className="about-wrapper">
        <div className="about w-50">
          <div>About us</div>
          <div>Trusted, honest, experienced teachers</div>
          <button>Learn More</button>
        </div>
        <div className="pos-rel image-wrapper w-50 ratio-1-1 overflow">
          <Image
            className="about-img"
            src={data.heroImgUrl}
            sizes="40vw"
            fill
          />
        </div>
      </div>
    </>
  );
}
