import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

export const Gallery = ({ images }) => {
  return (
    <div className="pos-rel p40 overflow br4">
      <Swiper
        className="br4 overflow"
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ el: ".gallery-pagination", type: "fraction" }}
        navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.asset.url}>
            <div className="pos-rel br4 ratio-16-9 overflow">
              <Image
                src={image.asset.url}
                fill
                objectFit="cover"
                sizes="40vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <menu className="gallery-menu flex gap-20 align-center">
        <div className="gallery-pagination" />
        <div className="flex gap-20">
          <button className="prev-btn">
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7812 1.00098L1.99883 12.1856L13.7812 23.3701"
                stroke="#F5FCFA"
                stroke-width="2"
              />
            </svg>
          </button>
          <button className="next-btn">
            <svg
              width="15"
              height="25"
              viewBox="0 0 15 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.34644 23.3701L13.1292 12.1859L1.34644 1.00164"
                stroke="#F5FCFA"
                stroke-width="2"
              />
            </svg>
          </button>
        </div>
      </menu>
    </div>
  );
};
