import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "@/utils/sanity";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Image from "next/image";

export const Gallery = ({ images }) => {
  return (
    <div className="pos-rel p40 overflow br4">
      <h1 className="text-5xl tracking-tight p900 to-primary-900 font-semibold mb-14">
        Gallery
      </h1>
      <Swiper
        className="br4 overflow cursor-[grab]"
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ el: ".gallery-pagination", type: "fraction" }}
        navigation={{ prevEl: ".prev-btn", nextEl: ".next-btn" }}
      >
        {images.map((image) => (
          <SwiperSlide key={image.asset.url}>
            <GalleryImageCard image={image} />
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
                strokeWidth="2"
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
                strokeWidth="2"
              />
            </svg>
          </button>
        </div>
      </menu>
    </div>
  );
};

const GalleryImageCard = ({ image }) => {
  const imageProps = useNextSanityImage(client, image);

  return (
    <div className="pos-rel br4 ratio-16-9 overflow">
      <Image
        {...imageProps}
        className="w-full h-full object-cover"
        placeholder="blur"
        blurDataURL={image.asset.metadata.lqip}
        sizes="40vw"
      />
    </div>
  );
};
