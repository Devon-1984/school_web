import React, { useState } from "react";
import Image from "next/image";

const Accordion = ({ title, desc, img }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="pb-2 pt-4 border-b border-solid border-primary-900 text-primary-900 max-w-[750px]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-[-webkit-fill-available] fox"
        // w-[-moz-available]
      >
        <span className="font-medium">{title}</span>
        <svg
          className="fill-primary-900 shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-primary-900 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden md:flex gap-7">
          <Image
            className="aspect-auto rounded md:max-w-[50%] gap-0 object-fill"
            src={img}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
