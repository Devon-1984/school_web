import React from "react";
import Cta from "@/components/cta";
import Intro from "@/components/intro";
import { sanityFetch } from "@/utils/sanity";

export default function about({ data }) {
  return (
    <>
      <Intro data={data} />
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'aboutpage'][0] {
  title,
  description,
  "aboutImg":aboutImg.asset->url,
}`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
