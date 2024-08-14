import React from "react";
import Image from "next/image";

export default function Events({ data }) {
  const newsData = data.news;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-12 text-primary-900">
        {newsData.map((news, index) => (
          <div className="bg-white overflow-hidden" key={index}>
            {/* <img
              src={news.newsImg}
              alt={news.title}
              className="w-full aspect-video rounded-lg object-cover"
            /> */}
            <Image
              className="aspect-video rounded-[0.6rem] gap-0 object-fill"
              src={news.newsImg}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
            <div className="p-4">
              <div className="flex">
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
                href={news.slug.current}
                className="text-primary-900 hover:text-primary-500 font-semibold mt-4 inline-block"
              >
                Learn More →
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
