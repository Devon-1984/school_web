import Image from "next/image";

import Cta from "@/components/cta";
import Hero from "@/components/hero";
import { sanityFetch } from "@/utils/sanity";
import News from "@/components/news";
import About from "@/components/about";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <Hero data={data} />
      <News data={data} />
      <About data={data} />
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
      news,
    }`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
