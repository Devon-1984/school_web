import React from "react";
import Image from "next/image";

export default function Intro({ data }) {
  console.log(data);
  return (
    <>
      <div className="mt-32 mb-96 pl-6 pr-6">
        <Image className="" src={data.heroImgUrl} width={1200} height={1200} />
        <div>
          <div>{data.title}</div>
          <div>{data.description}</div>
        </div>
      </div>
    </>
  );
}
