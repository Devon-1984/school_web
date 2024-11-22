import React from "react";
import Map from "./map";
import Title from "@/components/contactTitle";
import { useState } from "react";
import Submitted from "@/components/submitted";

export default function Contact({ data }) {
  const [submitted, setSubmitted] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      setSubmitted(false);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  return (
    <>
      <div className="md:pl-12 md:pr-12 pl-6 pr-6 mb-5 md:mb-10 mt-[170px] md:flex text-primary-900">
        <div className="w-full">
          <Title data={data} />

          {/* <div className="text-[1rem] md:text-lg font-semibold leading-tight">
            SAHUDANGI HAT P.K.ROY HIGH SCHOOL
            <br />
            P.O.-SAHUDANGI HAT <br />
            P.S- NJP <br />
            DISTRICT- JALPAIGURI <br />
            PIN-735135 <br />
            03561244212(OFFICE)/9531740569(H.M)
          </div>
          <svg
            className="w-80 h-60 pt-4 pb-3"
            fill="#1f3830"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
          >
            <g>
              <g>
                <g>
                  <rect x="28.354" y="195.19" width="15.513" height="290.57" />
                  <rect x="468.137" y="195.19" width="15.513" height="290.57" />
                  <rect x="248.242" y="85.238" width="15.513" height="47.12" />
                  <polygon
                    points="208.784,80.303 256,26.342 303.216,80.303 303.216,155.824 512,155.824 472.831,77.486 326.679,77.486 
                326.679,92.998 463.244,92.998 486.901,140.311 318.728,140.311 318.728,74.475 256,2.785 193.271,74.475 193.271,140.311 
                25.1,140.311 48.757,92.998 185.321,92.998 185.321,77.486 39.169,77.486 0,155.824 208.784,155.824"
                  />
                  <polygon
                    points="491.5,163.774 475.987,163.774 475.987,171.724 36.013,171.724 36.013,163.774 20.5,163.774 20.5,187.237 
                491.5,187.237"
                  />
                  <rect
                    x="185.323"
                    y="493.703"
                    width="141.36"
                    height="15.513"
                  />
                  <rect
                    x="334.533"
                    y="493.703"
                    width="172.768"
                    height="15.513"
                  />
                  <rect x="4.697" y="493.703" width="172.768" height="15.513" />
                  <rect
                    x="201.032"
                    y="470.145"
                    width="109.942"
                    height="15.513"
                  />
                  <polygon
                    points="295.169,438.637 295.169,265.963 216.831,265.963 216.831,438.637 232.343,438.637 232.343,281.475 
                279.657,281.475 279.657,438.637"
                  />
                  <path
                    d="M122.398,438.539V210.99H67.62v227.549H122.398z M83.133,226.503h23.754v133.698H83.133V226.503z M83.133,375.714h23.754
                v47.313H83.133V375.714z"
                  />
                  <path
                    d="M193.077,438.539V210.99h-54.778v227.549H193.077z M153.812,226.503h23.754v70.873h-23.754V226.503z M153.812,312.888
                h23.754v110.139h-23.754V312.888z"
                  />
                  <path
                    d="M373.701,438.539V210.99h-54.779v227.549H373.701z M334.435,226.503h23.754v23.754h-23.754V226.503z M334.435,265.769
                h23.754v157.259h-23.754V265.769z"
                  />
                  <path
                    d="M444.38,438.539V210.99h-54.779v227.549H444.38z M405.114,226.503h23.754v133.698h-23.754V226.503z M405.114,375.714
                h23.754v47.313h-23.754V375.714z"
                  />
                  <rect
                    x="240.392"
                    y="367.958"
                    width="15.513"
                    height="15.707"
                  />
                  <rect
                    x="216.731"
                    y="446.586"
                    width="78.533"
                    height="15.513"
                  />
                </g>
              </g>
            </g>
          </svg> */}
        </div>
        <div className="aspect-[4/3] overflow-hidden rounded-lg w-full">
          <Map />
        </div>
      </div>
    </>
  );
}
