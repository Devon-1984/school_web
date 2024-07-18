import React from "react";
import hero from "../../public/hero-img.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ data }) {
  const stats = data.heroStats.map((stat) => stat.stat_description);

  return (
    <>
      <div className="hero-img-wrapper">
        <Image
          className="hero-img"
          src={data.heroImgUrl}
          width={1200}
          height={1200}
        />
        <div className="hero-heading-wrapper">
          <h4 className="hero-heading h4">{data.heroTitle}</h4>
          <p>{data.heroSubtitle}</p>
        </div>
      </div>
      <div className="stats">
        {stats.map((stat) => (
          <div key={stat[0]} className="hero-content white">
            <p className="h3">{stat[0]}</p>
            <p className="p">{stat[1]}</p>
          </div>
        ))}
      </div>
    </>
  );
}
