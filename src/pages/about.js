import React from "react";
import Intro from "@/components/intro";
import Principal from "@/components/principal";
import { sanityFetch } from "@/utils/sanity";
import Cta from "@/components/cta";
import Teachers from "@/components/teachers";

export default function about({ data }) {
  return (
    <>
      <Intro data={data} />
      <Principal data={data} />
      <Teachers data={data} />
      <Cta />
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
  teachers,
  "faculty":*[_type == 'facultypage'] {
  ourTeacher,
  role,
  "teachImg":teachImg.asset->url},
  board,
  "Board":*[_type == 'boardpage']{
  boardName,
  desc,
  "boardImg":boardImg.asset->url},
}`;
  const data = await sanityFetch({ query });

  const shuffledFaculty = data.faculty.sort(() => 0.5 - Math.random());
  const selectedFaculty = shuffledFaculty.slice(0, 7);

  data.faculty = selectedFaculty;

  return { props: { data: { ...data, faculty: selectedFaculty } } };
}
