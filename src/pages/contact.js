import React from "react";
import { sanityFetch } from "@/utils/sanity";
import Contacts from "@/components/contact";

export default function Contact({ data }) {
  return (
    <>
      <Contacts data={data} />
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'contactpage'][0]`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
