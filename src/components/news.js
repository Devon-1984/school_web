import React from "react";
import { news } from "../../sanity/schemas/news";
import Image from "next/image";
import Link from "next/link";

export default function News({ data }) {
  const newsArrays = data.news;
  return (
    <>
      <div className="flex flex-col md:flex-row mt-[120px] mb-[-1.5] md:pl-12 md:pr-12 pl-6 pr-6">
        <h1 className="text-4xl md:text-5xl tracking-tight p900 to-primary-900 font-semibold">
          {data.newsTitle}
        </h1>
        <div className="news-para-wrapper max-w-[40ch] ml-auto">
          <p></p>
          <button className="button py-2.5 px-4">
            <Link href={"/event"}>View All Events</Link>
          </button>
        </div>
      </div>
      {/* <div className="flex flex-col md:flex-row md:pl-12 md:pr-12 pl-6 pr-6 justify-between gap-6 mb-6 md:mb-12 ">
        {newsArrays.map((news, index) => (
          <div className="" key={index}>
            <Image
              className="aspect-video rounded gap-0 object-fill"
              src={news.newsImg}
              width={900}
              height={900}
            />
            <article className="article-wrapper text-primary-900">
              <div className="flex text-base font-semibold my-2.5">
                <div className="text-center font-body">{news.title}</div>
                <date className="ml-auto text-xs text-center">
                  <p className="text-primary-900 text-sm">
                    {new Date(news.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </date>
              </div>
              <p className="">{news.description}</p>
            </article>
          </div>
        ))}
      </div> */}
    </>
  );
}
