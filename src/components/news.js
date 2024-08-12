import React from "react";
import { news } from "../../sanity/schemas/news";
import Image from "next/image";
import Link from "next/link";

export default function News({ data }) {
  const newsArrays = data.news;
  console.log(newsArrays);
  return (
    <>
      <div className="news-wrapper flex mt-[120px] mb-14 pl-12 pr-12">
        <h1 className="text-5xl tracking-tight p900 to-primary-900 font-semibold">
          {data.newsTitle}
        </h1>
        <div className="news-para-wrapper ml-auto">
          <p></p>
          <button className="button">
            <Link href={"/event"}>View All Events</Link>
          </button>
        </div>
      </div>
      <div className="card-wrapper md:pl-12 md:pr-12 pl-6 pr-6 flex justify-between gap-6 mb-6 md:mb-12 ">
        {newsArrays.map((news, index) => (
          <div className="card" key={index}>
            <Image
              className="card-img aspect-video rounded gap-0 object-fill"
              src={news.newsImg}
              width={1200}
              height={1200}
            />
            <article className="article-wrapper">
              <div className="title-wrapper">
                <div>{news.title}</div>
                <date>{news.date}</date>
              </div>
              <p>{news.description}</p>
            </article>
          </div>
        ))}
      </div>
    </>
  );
}
