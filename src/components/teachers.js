import React from "react";

export default function Teachers({ data }) {
  return (
    <>
      <div className="news-wrapper flex mt-[120px] mb-14 pl-12 pr-12">
        <h1 className="text-5xl tracking-tight p900 to-primary-900 font-semibold">
          {data.teachers}
        </h1>
        <div className="news-para-wrapper ml-auto">
          <button className="button">View All Teachers</button>
        </div>
      </div>
    </>
  );
}
