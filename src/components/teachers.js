import React from "react";
import Accordion from "@/components/accordion";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

export default function Teachers({ data }) {
  const teachers = data.faculty;

  return (
    <>
      <div className="news-wrapper flex mt-[120px] mb-14 pl-12 pr-12">
        <h1 className="text-5xl tracking-tight p900 to-primary-900 font-semibold">
          {data.teachers}
        </h1>
        <div className="news-para-wrapper ml-auto">
          <button className="button">
            {" "}
            <Link href={"/faculty"}>View All Teachers</Link>
          </button>
        </div>
      </div>
      <div className="p-6 md:p-12">
        <Swiper
          modules={[Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={1}
          navigation={{ clickable: true }}
          className="m-6 md:m-12 "
        >
          {teachers.map((teacher, index) => (
            <SwiperSlide
              key={index}
              className="h-52 w-28 flex flex-col items-center"
            >
              <div className=" text-left">
                <div className="pos-rel br4 ratio-1-1 overflow max-w-96 mr-2">
                  <Image
                    src={teacher.teachImg}
                    fill
                    objectFit="cover"
                    sizes="40vw"
                  />
                </div>
                <div className="text-lg font-semibold text-primary-900">
                  {teacher.ourTeacher}
                </div>
                <div className="text-primary-900">{teacher.role}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="m-6 md:m-12 md:flex">
        <h1 className="text-5xl tracking-tight p900 to-primary-900 font-semibold mr-auto">
          {data.board}
        </h1>
        <div>
          {" "}
          <div className="p-4 rounded-lg">
            <Accordion title="Name" answer="Neta 1" />
            <Accordion title="Name 2" answer="Neta 2" />
            <Accordion title="Name 3" answer="Neta 3" />
          </div>
        </div>
      </div>
    </>
  );
}
