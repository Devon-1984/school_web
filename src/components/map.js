import React from "react";

export default function Map() {
  return (
    <>
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3565.242763357683!2d88.4702638806269!3d26.67271731054038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e469b4e8242001%3A0xc8b8216e123beb19!2sSAHUDANGI%20HAT%20P.%20K.%20ROY%20HIGH%20SCHOOL!5e0!3m2!1sen!2sin!4v1723976769888!5m2!1sen!2sin"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </>
  );
}
