import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/utils/sanity";

export default function Hero({ data }) {
  const stats = data.heroStats.map((stat) => stat.stat_description);
  const imageProps = useNextSanityImage(client, data.heroImgUrl);

  return (
    <div className="w-100vw pos-rel">
      <div className="hero-img-wrapper">
        <div className="hero-img">
          <Image
            {...imageProps}
            alt={data.heroTitle}
            placeholder="blur"
            blurDataURL={data.heroImgUrl.asset.metadata.lqip}
            sizes="100vw"
          />
        </div>
        <div className="hero-heading-wrapper">
          <h4 className="hero-heading font-semibold">{data.heroTitle}</h4>
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
