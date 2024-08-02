import React from "react";

export default function Heading({ data }) {
  return (
    <>
      <div className="flex flex-col items-center mt-[170px] mb-14 pl-12 pr-12">
        <h1 className="text-5xl tracking-tight p900 to-primary-900 font-semibold">
          {data}
        </h1>
      </div>
    </>
  );
}
