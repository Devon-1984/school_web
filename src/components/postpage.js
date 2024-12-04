import React from "react";
import Image from "next/image";

export default function Postpage({ data }) {
  const { title, description, date, newsImg } = data;

  return (
    <div className="text-primary-900 md:pl-12 md:pr-12 pl-6 pr-6">
      <div className="flex flex-col max-w-4xl mx-auto mt-[170px]">
        <div className="flex flex-col items-center">
          <h1 className="text-5xl font-heading font-bold text-center text-primary-900">
            {title}
          </h1>
          <p className="text-justify text-lg text-primary-900 mt-2">
            {new Date(date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          {newsImg && (
            <div className="mt-8 ">
              <Image
                src={newsImg}
                alt={title}
                width={800}
                height={450}
                className="w-full rounded-lg object-cover"
              />
            </div>
          )}
          <div className="mt-8 text-justify leading-relaxed">
            <p className="text-lg">{description}</p>
          </div>
        </div>
        <div className=" mb-5 mt-28 md:flex text-primary-900">
          <div className="w-full">
            <div className="mb-10">
              <h1 className="text-5xl tracking-tight p900 to-primary-900 font-semibold">
                Gallery
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
