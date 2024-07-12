import React from "react";

export default function News({ data }) {
  let news = data.news.map((stat) => stat.stat_description);

  return (
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
  );
}
