import React from "react";
import Image from "next/image";

export default function Principal({ data }) {
  return (
    <>
      <div className="md:pt-32 pt-12 md:pb-40 pb-10 pl-6 pr-6 gap-5 bg-primary-200 text-primary-900 md:flex md:flex-row-reverse md:pl-12 md:pr-12">
        <Image
          className="md:max-w-md"
          src={data.principalImg}
          width={1200}
          height={1200}
        />
        <div className="mr-auto mt-auto mb-auto">
          <div className="mt-6 mb-6 font-heading font-medium text-4xl md:text-5xl md:mb-14">
            {data.principal}
          </div>
          <div className="font-body text-lg max-w-xl">
            {data.principalDescription}
          </div>
        </div>
      </div>
    </>
  );
}
