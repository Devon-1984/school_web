import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/utils/sanity";

export default function Intro({ data }) {
  return (
    <>
      <div className="mt-[135px] md:mb-40 mb-8 pl-6 pr-6 gap-5 text-primary-900 md:flex md:flex-row-reverse md:pl-12 md:pr-12">
        {data.aboutImg?.asset && <IntroImage image={data.aboutImg} />}
        <div className="mr-auto mt-auto mb-auto">
          <div className="mt-6 mb-6 font-heading font-medium text-4xl md:text-6xl md:mb-14">
            {data.title}
          </div>
          <div className="font-body text-lg max-w-[50rem]">
            {data.description}
          </div>
        </div>
      </div>
    </>
  );
}

function IntroImage({ image }) {
  const imageProps = useNextSanityImage(client, image);
  const blurDataURL = image.asset.metadata?.lqip;

  return (
    <Image
      {...imageProps}
      className="md:max-w-[30rem] mt-20 w-full h-full object-cover"
      placeholder={blurDataURL ? "blur" : "empty"}
      blurDataURL={blurDataURL}
      sizes="40vw"
      alt=""
    />
  );
}
