import React from "react";

import Heading from "@/components/heading";
import { sanityFetch } from "@/utils/sanity";
import Facultyg from "@/components/facultyGrid";
import Cta from "@/components/cta";

export default function Event({ data }) {
  return (
    <>
      <Facultyg data={data} />
      <Cta />
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'aboutpage'][0] {
  teachers,
  "faculty":*[_type == 'facultypage'][0..4] {
  ourTeacher,
  role,
  "teachImg":teachImg.asset->url},
  board,
}`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
