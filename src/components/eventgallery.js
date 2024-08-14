import React, { useState } from "react";

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
        <div className="mt-6 max-w-2xl mx-auto grid gap-2 grid-cols-4 px-6">
          {images.map((image, index) => (
            <a
              key={index}
              onClick={(e) => open(e, image.asset.url)}
              className="block relative bg-red-100"
              href={image.asset.url}
            >
              <img
                className="w-full h-full object-cover object-center"
                src={getThumbnailUrl(image.asset.url)}
                alt=""
              />
            </a>
          ))}
        </div>

        {show && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center"
            onClick={close}
            onKeyDown={(e) => e.key === "Escape" && close()}
            tabIndex={-1}
          >
            <img
              className="w-4/5 h-4/5 object-contain object-center transition ease-in-out duration-300 transform scale-100"
              src={activeImageUrl}
              alt=""
            />
          </div>
        )}
      </div>
    </div>
  );
}
