import React from "react";
import Image from "next/image";

export default function Intro({ data }) {
  console.log(data);
  return (
    <>
      <div className="">
        <div>
          <div>{data.title}</div>
          <div>{data.description}</div>
        </div>
        <Image className="card-img" src={data.heroImgUrl} sizes="100vw" />
      </div>
    </>
  );
}
