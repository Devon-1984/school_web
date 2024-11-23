import React from "react";
import Accordion from "@/components/accordion";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/utils/sanity";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function Teachers({ data }) {
  const Board = data.Board;

  return (
    <>
      <div className="flex flex-col md:flex-row md:mt-[120px] mt-12 mb-14 md:pl-12 md:pr-12 pl-6 pr-6">
        <h1 className="text-4xl md:text-5xl tracking-tight p900 to-primary-900 font-semibold">
          {data.teachers}
        </h1>
        <div className="news-para-wrapper ml-auto">
          <button className="button py-2.5 px-4">
            <Link href={"/faculty"}>View All Teachers</Link>
          </button>
        </div>
      </div>
      <div className="cursor-grab">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3.5}
          breakpoints={{
            995: {
              slidesPerView: 4.5,
            },
          }}
          slidesOffsetBefore={48}
          slidesOffsetAfter={48}
          spaceBetween={20}
          className=""
        >
          {data.faculty.map((teacher, index) => (
            <SwiperSlide key={index}>
              <TeacherCard teacher={teacher} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="m-6 md:m-12 md:flex">
        <h1 className="text-4xl md:text-5xl tracking-tight p900 to-primary-900 font-semibold mr-auto">
          {data.board}
        </h1>
        <div>
          <div className="pt-4 pb-4">
            {Board.map((board, index) => (
              <Accordion
                key={index}
                title={board.boardName}
                img={board.boardImg}
                desc={board.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function TeacherCard({ teacher }) {
  // Safely use the hook here
  const imageProps = useNextSanityImage(client, teacher.teachImg);

  return (
    <div className="text-left">
      <div className="pos-rel rounded aspect-square overflow">
        <Image
          {...imageProps}
          className="w-full h-full object-cover"
          placeholder="blur"
          blurDataURL={teacher.teachImg.asset.metadata.lqip}
          sizes="40vw"
        />
      </div>
      <div className="text-lg font-semibold text-primary-900">
        {teacher.ourTeacher}
      </div>
      <div className="text-primary-900">{teacher.role}</div>
    </div>
  );
}
