import React from "react";
import { news } from "../../sanity/schemas/news";
import Image from "next/image";

export default function News({ data }) {
  const newsArrays = data.news;
  console.log(newsArrays);
  return (
    <>
      <div className="news-wrapper flex mt-[120px] mb-14 pl-12 pr-12">
        <h1 className="h4 p900">{data.newsTitle}</h1>
        <div className="news-para-wrapper">
          <p></p>
          <button className="button">View All Events</button>
        </div>
      </div>
      <div className="card-wrapper pl-12 pr-12 flex justify-between gap-6 mb-12 ">
        <div className="card">
          <Image
            className="card-img"
            src={data.heroImgUrl}
            width={1200}
            height={1200}
          />
          <article className="article-wrapper">
            <div className="title-wrapper">
              <div>{newsArrays[0].title}</div>
              <date>{newsArrays[0].date}</date>
            </div>
            <p>{newsArrays[0].description}</p>
          </article>
        </div>
        <div className="card">
          <Image
            className="card-img"
            src={data.heroImgUrl}
            width={1200}
            height={1200}
          />
          <article className="article-wrapper">
            <div className="title-wrapper">
              <div>{newsArrays[1].title}</div>
              <date>{newsArrays[1].date}</date>
            </div>
            <p>{newsArrays[1].description}</p>
          </article>
        </div>
        <div className="card">
          <Image
            className="card-img"
            src={data.heroImgUrl}
            width={1200}
            height={1200}
          />
          <article className="article-wrapper">
            <div className="title-wrapper">
              <div>{newsArrays[2].title}</div>
              <date>{newsArrays[2].date}</date>
            </div>
            <p>{newsArrays[2].description}</p>
          </article>
        </div>
      </div>
    </>
  );
}
