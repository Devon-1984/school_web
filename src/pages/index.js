import Image from "next/image";

import Cta from "@/components/cta";
import Hero from "@/components/hero";
import { sanityFetch } from "@/utils/sanity";
import News from "@/components/news";
import About from "@/components/about";
import { Gallery } from "@/components/gallery";

export default function Home({ data }) {
  return (
    <>
      <Hero data={data} />
      <News data={data} />
      <About data={data} />
      <Gallery images={data.gallery} />
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
      about,
    "aboutImgUrl":aboutImg.asset->url,
      gallery[]{
    asset->{
    url}
      },

      
      "news":*[_type == 'newspage'] {
        newsTitle,
        newsSubtitle, 
        news[]{
        "newsImgUrl":newsImg.asset->url,
        newsArray[]
      }
      }
    }`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
