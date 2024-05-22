import Image from "next/image";

import Cta from "@/components/cta";
import Hero from "@/components/hero";
import { sanityFetch } from "@/utils/sanity";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Hero data={data} />
      <Cta />
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'homepage'][0]{
    heroTitle,
    "heroImgUrl":heroImg.asset->url,
      heroSubtitle,
      announcementText,
      heroStats,
    }`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
