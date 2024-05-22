import React from "react";
import hero from "../../public/hero-img.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ data }) {
  let stats = data.heroStats.map((stat) => stat.stat_description);

  return (
    <>
      <div className="hero-img-wrapper">
        <Image className="hero-img" src={data.heroImgUrl} />
        <div className="hero-heading-wrapper">
          <h4 className="hero-heading h4">{data.heroTitle}</h4>
          <p>{data.heroSubtitle}</p>
        </div>
      </div>
      <div className="stats">
        <div className="hero-content white">
          <p className="h3">{stats[0][0]}</p>
          <p className="p">{stats[0][1]}</p>
        </div>
        <div className="hero-content white">
          <p className="h3">{stats[1][0]}</p>
          <p className="p">{stats[1][1]}</p>
        </div>
        <div className="hero-content white">
          <p className="h3">{stats[2][0]}</p>
          <p className="p">{stats[2][1]}</p>
        </div>
      </div>
    </>
  );
}
