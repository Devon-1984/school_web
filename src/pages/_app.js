import "@/styles/globals.css";
import Layout from "./layout";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return (
    <>
      <Head>
        <title>Sahudangi Hat P.K. Roy High School</title>
        <meta
          name="description"
          content="Official website of Sahudangi Hat P.K. Roy High School. Explore school activities, events, and achievements. Learn more at sdhpkr.co.in."
        />
        <meta
          name="keywords"
          content="sdhpkr, Sahudangi Hat P.K. Roy High School, sdhpkr.co.in, education, school, P.K. Roy High School"
        />
        <meta name="author" content="Sahudangi Hat P.K. Roy High School" />
        <meta
          property="og:title"
          content="Sahudangi Hat P.K. Roy High School"
        />
        <meta
          property="og:description"
          content="Discover the official website of Sahudangi Hat P.K. Roy High School. Stay updated on school events and news."
        />
        <meta property="og:image" content="/images/school-og-image.png" />
        <meta property="og:url" content="https://sdhpkr.co.in" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://sdhpkr.co.in" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </>
  );
}
