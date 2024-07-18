import React from "react";
import { news } from "../../sanity/schemas/news";
import Image from "next/image";

export default function News({ data }) {
  // const newsArrays = data.news.map((item) => item.newsArray);
  // console.log(newsArrays);
  return (
    <>
      <div className="news-wrapper pl40">
        <h1 className="h4 p900">Latest News</h1>
        <div className="news-para-wrapper">
          <p>
            Discover the latest events and updates from our school community!
            Click below to explore our news section and stay informed about all
            the exciting happenings at our school.
          </p>
          <button className="button">View All News</button>
        </div>
      </div>
      <div className="card-wrapper pl40">
        <div className="card">
          <Image
            className="card-img"
            src={data.heroImgUrl}
            width={1200}
            height={1200}
          />
          <article className="article-wrapper">
            <div className="title-wrapper">
              <div>Card title</div>
              <date>13/02/24</date>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
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
              <div>Card title</div>
              <date>13/02/24</date>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
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
              <div>Card title</div>
              <date>13/02/24</date>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </article>
        </div>
      </div>
    </>
  );
}
