import React from "react";
import Map from "./map";

export default function Contact({ data }) {
  const mailtoLink = `mailto:${data.email}`;
  return (
    <>
      <div className="md:pl-12 md:pr-12 pl-6 pr-6 mb-5 md:mb-10 mt-[170px] md:flex">
        <div className="w-full">
          <div className="mb-10">
            <h1 className="text-5xl tracking-tight p900 to-primary-900 font-semibold">
              {data.title}
            </h1>
          </div>
          <div className="flex md:mb-10 mb-6 font-body font-normal text-primary-900 text-base">
            <a href={mailtoLink} className="flex pr-5 md:pr-10">
              <svg
                className="mr-1 md:mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                  stroke="#023A15"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M22 6L12 13L2 6"
                  stroke="#023A15"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p>Email Us</p>
            </a>
            <div className="flex">
              <svg
                className="mr-1 md:mr-3"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.0004 16.9201V19.9201C22.0016 20.1986 21.9445 20.4743 21.8329 20.7294C21.7214 20.9846 21.5577 21.2137 21.3525 21.402C21.1473 21.5902 20.905 21.7336 20.6412 21.8228C20.3773 21.912 20.0978 21.9452 19.8204 21.9201C16.7433 21.5857 13.7874 20.5342 11.1904 18.8501C8.77425 17.3148 6.72576 15.2663 5.19042 12.8501C3.5004 10.2413 2.44866 7.27109 2.12042 4.1801C2.09543 3.90356 2.1283 3.62486 2.21692 3.36172C2.30555 3.09859 2.44799 2.85679 2.63519 2.65172C2.82238 2.44665 3.05023 2.28281 3.30421 2.17062C3.5582 2.05843 3.83276 2.00036 4.11042 2.0001H7.11042C7.59573 1.99532 8.06621 2.16718 8.43418 2.48363C8.80215 2.80008 9.0425 3.23954 9.11042 3.7201C9.23704 4.68016 9.47187 5.62282 9.81042 6.5301C9.94497 6.88802 9.97408 7.27701 9.89433 7.65098C9.81457 8.02494 9.62928 8.36821 9.36042 8.6401L8.09042 9.9101C9.51398 12.4136 11.5869 14.4865 14.0904 15.9101L15.3604 14.6401C15.6323 14.3712 15.9756 14.1859 16.3495 14.1062C16.7235 14.0264 17.1125 14.0556 17.4704 14.1901C18.3777 14.5286 19.3204 14.7635 20.2804 14.8901C20.7662 14.9586 21.2098 15.2033 21.527 15.5776C21.8441 15.9519 22.0126 16.4297 22.0004 16.9201Z"
                  stroke="#023A15"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>

              <p>{data.phoneNumber}</p>
            </div>
          </div>

          <form
            name="contact-form"
            method="POST"
            netlify
            netlify-honeypot="bot-field"
            className="max-w-md"
          >
            <p className="border-b-2 border-primary-900  ">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="placeholder-primary-900 text-primary-900 mt-1 w-full focus:outline-none  py-2 md:py-4"
              />
            </p>
            <p className="border-b-2 border-primary-900  ">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="placeholder-primary-900 text-primary-900 mt-1 w-full focus:outline-none  py-2 md:py-4"
              />
            </p>
            <p className="border-b-2 border-primary-900  ">
              <input
                type="tel"
                name="Mobile"
                placeholder="Mobile"
                className="placeholder-primary-900 text-primary-900 mt-1 w-full focus:outline-none  py-2 md:py-4"
              />
            </p>
            <p>
              <textarea
                name="message"
                placeholder="Message"
                rows="4"
                className="placeholder-primary-900 text-primary-900 mt-1 block w-full border-b-2 border-primary-900 focus:outline-none py-2 md:py-4"
              ></textarea>
            </p>
            <p>
              <button
                className="button py-2 px-5 md:px-10 md:py-4 mt-10"
                type="submit"
              >
                Submit
              </button>
            </p>
          </form>
        </div>
        <div className="ml-auto mt-6 md:mr-6 w-full">
          <Map />
        </div>
      </div>
    </>
  );
}
