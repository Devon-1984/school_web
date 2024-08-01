import React from "react";

export default function Board({ data }) {
  return (
    <>
      <div className="m-6 md:m-12 md:flex">
        <h1 className="text-5xl tracking-tight p900 to-primary-900 font-semibold">
          {data.board}
        </h1>
        <div></div>
      </div>
    </>
  );
}
