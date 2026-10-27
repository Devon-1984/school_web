import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/utils/sanity";
import Link from "next/link";

export default function About({ data }) {
  return (
    <>
      <div className="about-wrapper p40">
        <div className="about w-50 p40">
          <div className="about-heading">{data.about[0]}</div>
          <div className="about-subheading h5">{data.about[1]}</div>
          <button className="button secondary">
            {" "}
            <Link href={"/about"}>Learn More</Link>
          </button>
        </div>
        <div className="pos-rel image-wrapper w-50 ratio-1-1 overflow">
          {data.aboutImgUrl?.asset && <AboutImage image={data.aboutImgUrl} />}
        </div>
      </div>
    </>
  );
}

function AboutImage({ image }) {
  const imageProps = useNextSanityImage(client, image);
  const blurDataURL = image.asset.metadata?.lqip;

  return (
    <Image
      {...imageProps}
      className="about-img w-full h-full object-cover"
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      sizes="40vw"
      objectFit="cover"
    />
  );
}
