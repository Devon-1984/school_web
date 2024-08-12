import React from "react";
import Heading from "@/components/heading";
import { sanityFetch } from "@/utils/sanity";
import Cta from "@/components/cta";
import Notices from "@/components/notice";

export default function Notice({ data }) {
  return (
    <>
      <Heading data={data.noticeTitle} />
      <Notices data={data.notices} />
      <Cta />
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'homepage'][0]{
      noticeTitle,
      "notices":*[_type == 'noticepage']{
        title,
        date,
        "pdfFileURL": pdfFile.asset->url
      }
}`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
