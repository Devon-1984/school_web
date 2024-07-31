import React from "react";
import Intro from "@/components/intro";
import Principal from "@/components/principal";
import { sanityFetch } from "@/utils/sanity";

export default function about({ data }) {
  return (
    <>
      <Intro data={data} />
      <Principal data={data} />
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'aboutpage'][0] {
  title,
  description,
  "aboutImg":aboutImg.asset->url,
  principal,
  principalDescription,
  "principalImg":principalImg.asset->url,
}`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
