import React from "react";
import ContactInfo from "@/components/contactInfo";

export default function Contacttitle({ data }) {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-5xl tracking-tight p900 to-primary-900 font-semibold">
          {data.title}
        </h1>
      </div>

      <ContactInfo data={data} />
    </>
  );
}
