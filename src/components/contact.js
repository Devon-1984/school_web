import React from "react";
import Map from "./map";
import Link from "next/link";
import Title from "@/components/contactTitle";
import { useState } from "react";
import Submitted from "@/components/submitted";

export default function Contact({ data }) {
  const [submitted, setSubmitted] = useState(true);

  function submission() {
    setSubmitted(false);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    await fetch("/__forms.html", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    });
  };
  return (
    <>
      <div className="md:pl-12 md:pr-12 pl-6 pr-6 mb-5 md:mb-10 mt-[170px] md:flex text-primary-900">
        <div className="w-full">
          <Title data={data} />
          {submitted ? (
            <form
              name="contact-form"
              netlify
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
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
                  onClick={submission}
                >
                  Submit
                </button>
              </p>
            </form>
          ) : (
            <Submitted />
          )}
        </div>
        <div className="ml-auto mt-6 md:mr-6 w-full">
          <Map />
        </div>
      </div>
    </>
  );
}
