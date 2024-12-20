import Image from "next/image";

import Cta from "@/components/cta";
import Hero from "@/components/hero";
import { sanityFetch } from "@/utils/sanity";
import News from "@/components/news";
import About from "@/components/about";
import { Gallery } from "@/components/gallery";
import Events from "@/components/events";

export default function Home({ data }) {
  return (
    <>
      <Hero data={data} />
      <News data={data} />
      <Events data={data} />
      <About data={data} />
      <Gallery images={data.gallery} />
      <Cta />
    </>
  );
}

export async function getStaticProps() {
  const query = `*[_type == 'homepage'][0]{
    heroTitle,
    "heroImgUrl":heroImg{
					asset->{
						...,
						metadata
					}
				},
      heroSubtitle,
      announcementText,
      heroStats,
      about,
      "aboutImgUrl":aboutImg{
					asset->{
						...,
						metadata
					}
				},
      gallery[]{asset->{
						...,
						metadata
					}},
      newsTitle,
      
      "news":*[_type == 'newspage']| order(_updatedAt desc)[0..2]{
      "newsImg":newsImg{
					asset->{
						...,
						metadata
					}
				},
        title,
        description,
        date,
        slug
}}`;
  const data = await sanityFetch({ query });
  return { props: { data } };
}
