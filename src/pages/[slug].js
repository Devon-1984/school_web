import React from "react";
import Heading from "@/components/heading";
import { sanityFetch } from "@/utils/sanity";
import Cta from "@/components/cta";
import Postpage from "@/components/postpage";
import { Gallery } from "@/components/gallery";
import EventGallery from "@/components/eventgallery";

export async function generateStaticParams() {
  const query = `*[_type == 'newspage']{ slug }`;
  const newsPages = await sanityFetch({ query });

  return newsPages.map((news) => ({
    params: {
      slug: news.slug.current,
    },
  }));
}

const Post = ({ data }) => {
  return (
    <>
      <Postpage data={data} />

      {data.gallery && data.gallery.length > 0 && (
        <EventGallery images={data.gallery} />
      )}
      <Cta />
    </>
  );
};

export default Post;

export async function getStaticPaths() {
  const query = `*[_type == 'newspage']{ slug }`;
  const newsPages = await sanityFetch({ query });

  const paths = newsPages.map((news) => ({
    params: { slug: news.slug.current },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const query = `*[_type == 'newspage' && slug.current == $slug][0]{
      title,
      description,
      date,
      "newsImg":newsImg.asset->url,
      gallery[]{asset->{url}},
    }`;
  const data = await sanityFetch({ query, params: { slug } });

  return { props: { data } };
}
