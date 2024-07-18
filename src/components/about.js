import React from "react";
import Image from "next/image";

export default function About({ data }) {
  return (
    <>
      <div className="about-wrapper">
        <div className="about w-50">
          <div className="about-heading">{data.about[0]}</div>
          <div className="about-subheading h5">{data.about[1]}</div>
          <button className="button">Learn More</button>
        </div>
        <div className="pos-rel image-wrapper w-50 ratio-1-1 overflow">
          <Image
            className="about-img"
            src={data.aboutImgUrl}
            sizes="40vw"
            fill
          />
        </div>
      </div>
    </>
  );
}
