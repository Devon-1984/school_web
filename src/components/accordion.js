import React, { useState } from "react";

const Accordion = ({ title, desc, img }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="pb-2 pt-4 border-b border-solid border-primary-900 text-primary-900">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between md:w-[750px] w-[-moz-available]"
      >
        <span className="font-medium">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
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
        <div className="overflow-hidden">
          <div className="">{img}</div>
          <div className="">{desc}</div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
