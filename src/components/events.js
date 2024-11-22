import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/utils/sanity";

export default function Events({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-12 text-primary-900">
      {data.news.map((news, index) => (
        <EventCard news={news} key={index} />
      ))}
    </div>
  );
}

function EventCard({ news }) {
  const imageProps = useNextSanityImage(client, news.newsImg);
  return (
    <div className="bg-white overflow-hidden">
      <div className="">
        <Image
          {...imageProps}
          className="aspect-video rounded-lg object-cover"
          alt={news.title || "News image"}
          placeholder="blur"
          blurDataURL={news.newsImg.asset.metadata?.lqip}
          sizes="20vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="md:pt-4 pt-2">
        <div className="md:flex pb-2">
          <h3 className="text-lg font-semibold text-primary-900 text-balance leading-[1.2em]">
            {news.title}
          </h3>
          <p className="text-primary-900 text-sm font-semibold ml-auto min-w-max text-right">
            {new Date(news.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
        <p className="text-primary-900 truncate">{news.description}</p>
        <a
          href={news.slug?.current || "#"}
          className="text-primary-900 hover:text-primary-500 font-semibold mt-4 inline-block"
        >
          Learn More →
        </a>
      </div>
    </div>
  );
}
