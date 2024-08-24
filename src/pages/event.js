import React from "react";

import Heading from "@/components/heading";
import Events from "@/components/events";
import { sanityFetch } from "@/utils/sanity";
import Cta from "@/components/cta";

export default function Event({ data }) {
  return (
    <>
      <Heading data={data.newsTitle} />
      <Events data={data} />
      <Cta />
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'homepage'][0]{
      newsTitle,
      "news":*[_type == 'newspage'] | order(_updatedAt desc){
      "newsImg":newsImg.asset->url,
        title,
        description,
        date,
        slug
      }
  }`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
