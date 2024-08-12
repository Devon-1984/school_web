import React from "react";
import Heading from "@/components/heading";
import { sanityFetch } from "@/utils/sanity";
import Cta from "@/components/cta";
import Notices from "@/components/notice";

export default function Notice({ data }) {
  return (
    <>
      <Heading data={data.noticeTitle} />
      <Notices />
      <Cta />
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'homepage'][0]{
      noticeTitle,
}`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
