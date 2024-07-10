import React from "react";

export default function News() {
  return (
    <div className="news-wrapper pl40">
      <h1 className="h4 p900">Latest News</h1>
      <div className="news-para-wrapper">
        <p>
          Discover the latest events and updates from our school community!
          Click below to explore our news section and stay informed about all
          the exciting happenings at our school.
        </p>
        <button className="cta-button">View All News</button>
      </div>
    </div>
  );
}
