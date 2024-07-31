import React from "react";
import Image from "next/image";

export default function Intro({ data }) {
  console.log(data);
  return (
    <>
      <div className="mt-32 mb-40 pl-6 pr-6 gap-5 text-primary-900 md:flex md:flex-row-reverse md:pl-12 md:pr-12">
        <Image
          className="md:max-w-md"
          src={data.aboutImg}
          width={1200}
          height={1200}
        />
        <div className="mr-auto mt-auto mb-auto">
          <div className="mt-6 mb-6 font-heading font-medium text-4xl md:text-6xl md:mb-14">
            {data.title}
          </div>
          <div className="font-body text-lg max-w-xl">{data.description}</div>
        </div>
      </div>
    </>
  );
}
