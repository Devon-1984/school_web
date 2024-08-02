import React from "react";
import Image from "next/image";

export default function Events({ data }) {
  const newsData = data.news;
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6 md:p-12">
        {newsData.map((news, index) => (
          <div className="bg-white overflow-hidden" key={index}>
            <img
              src={news.newsImg}
              alt={news.title}
              className="w-full h-56 rounded-lg object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-primary-900">
                {news.title}
              </h3>
              <p className="text-primary-900 truncate">{news.description}</p>
              <p className="text-primary-900 text-sm mt-2">
                {new Date(news.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
              <a
                href="#"
                className="text-primary-500 hover:text-primary-900 font-semibold mt-4 inline-block"
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
