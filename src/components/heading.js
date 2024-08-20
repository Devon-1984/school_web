import React from "react";

export default function Heading({ data }) {
  return (
    <>
      <div className="text-center md:mt-[170px] mt-[130px] md:pl-12 md:pr-12 pl-6 pr-6">
        <h1 className="text-5xl tracking-tight text-primary-900 font-semibold">
          {data}
        </h1>
      </div>
    </>
  );
}
