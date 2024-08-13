import React from "react";
import Image from "next/image";

export default function Postpage({ data }) {
  const { title, description, date, newsImg } = data;

  return (
    <div className="text-primary-900 md:pl-12 md:pr-12 pl-6 pr-6">
      <div className="max-w-3xl mx-auto mt-20">
        <h1 className="text-5xl font-heading font-bold text-center text-primary-900">
          {title}
        </h1>
        <p className="text-center text-lg text-primary-900 mt-2">
          {new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <div className="mt-8 text-justify leading-relaxed">
          <p>{description}</p>
        </div>
        {newsImg && (
          <div className="mt-8 mb-16">
            <Image
              src={newsImg}
              alt={title}
              width={800}
              height={450}
              className="w-full rounded-lg object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
}
