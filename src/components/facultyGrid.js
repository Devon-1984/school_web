import React from "react";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/utils/sanity";

export default function Facultyg({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 md:p-12 text-primary-900">
      {data.faculty.map((teacher, index) => (
        <TeacherCard teacher={teacher} key={index} />
      ))}
    </div>
  );
}

function TeacherCard({ teacher }) {
  const imageProps = useNextSanityImage(client, teacher.teachImg);

  return (
    <div className="bg-white overflow-hidden">
      <div>
        <Image
          {...imageProps}
          className="aspect-square rounded-lg object-cover"
          alt={teacher.ourTeacher || "Teacher image"}
          placeholder="blur"
          blurDataURL={teacher.teachImg.asset.metadata?.lqip}
          sizes="20vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-primary-900 leading-tight">
          {teacher.ourTeacher}
        </h3>
        <p className="text-primary-900 text-sm">{teacher.role}</p>
      </div>
    </div>
  );
}
