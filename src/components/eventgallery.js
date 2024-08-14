import React, { useState } from "react";
import Image from "next/image";

export default function EventGallery({ images }) {
  const [show, setShow] = useState(false);
  const [activeImageUrl, setActiveImageUrl] = useState(null);

  const open = (event, imageUrl) => {
    event.preventDefault();
    setActiveImageUrl(imageUrl);
    setShow(true);
  };

  const close = () => {
    setShow(false);
    setTimeout(() => setActiveImageUrl(null), 300);
  };

  const getThumbnailUrl = (src) => {
    return src.replace("srgb&fm=jpg", "tinysrgb&fit=max&fm=jpg&w=400");
  };

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <div className="mt-6 max-w-5xl mx-auto grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 px-6">
          {images.map((image, index) => (
            <a
              key={index}
              onClick={(e) => open(e, image.asset.url)}
              className="block relative"
              href={image.asset.url}
            >
              <div className="aspect-video rounded-lg overflow-hidden">
                <Image
                  className="aspect-video rounded-lg object-cover"
                  src={getThumbnailUrl(image.asset.url)}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
            </a>
          ))}
        </div>

        {show && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[51]"
            onClick={close}
            onKeyDown={(e) => e.key === "Escape" && close()}
            tabIndex={-1}
          >
            <Image
              className="object-contain object-center transition ease-in-out duration-300 transform scale-100"
              src={activeImageUrl}
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "80%", height: "80%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
