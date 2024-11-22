import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/utils/sanity";
import Link from "next/link";

export default function Events({ data }) {
  const newsWithImageProps = data.news.map((news) => ({
    ...news,
    imageProps: useNextSanityImage(client, news.newsImg),
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-12 text-primary-900">
      {newsWithImageProps.map((news, index) => (
        <div className="bg-white overflow-hidden" key={index}>
          <div className="">
            <Image
              {...news.imageProps}
              className="aspect-video rounded-lg object-cover"
              alt={news.title || "News image"}
              placeholder="blur"
              blurDataURL={news.newsImg.asset.metadata?.lqip}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className="md:pt-4 pt-2">
            <div className="md:flex pb-2">
              <h3 className="text-lg font-semibold text-primary-900">
                {news.title}
              </h3>
              <p className="text-primary-900 text-sm font-semibold ml-auto">
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
      ))}
    </div>
  );
}
