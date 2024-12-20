import React from "react";

export default function Notices({ data }) {
  return (
    <div className="p-6 md:p-12 md:mb-48 mb-24">
      <div className="grid grid-cols-1 gap-y-2">
        {data.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-3 items-center border-b text-primary-900 font-medium py-2"
          >
            <p className="text-balance leading-[1.2em]">{item.title}</p>
            <p className=" text-center">{item.date}</p>
            <a
              download
              target="_blank"
              rel="norefferer"
              href={item.pdfFileURL}
              className=" flex justify-end"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                  stroke="#023A15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 3H21V9"
                  stroke="#023A15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10 14L21 3"
                  stroke="#023A15"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
