import React from "react";
import hero from "../../public/hero-img.png";
import Image from "next/image";
import Link from "next/link";

export default function Hero({ data }) {
  const stats = data.heroStats.map((stat) => stat.stat_description);

  return (
    <div className="w-100vw pos-rel">
      <div className="hero-img-wrapper">
        <Image className="hero-img" src={data.heroImgUrl} sizes="100vw" fill />
        <div className="hero-heading-wrapper">
          <h4 className="hero-heading">{data.heroTitle}</h4>
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
    </div>
  );
}

/*
.stats {
  position: relative;
  z-index: 5;
  border-radius: 6px;
  background: var(--primary-900);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 80px;
  max-width: fit-content;
  padding: 33px 100px;
  margin-inline: auto;
  margin-top: -4.25%;
}


.hero-heading {
  font-family: var(--font-heading);
  font-size: 60px;
  font-weight: 400;
  line-height: 54px;
  letter-spacing: -0.01em;
  text-align: center;
  padding: 25px 0;
  max-width: 18ch;
}

*/
