import Image from "next/image";
import React from "react";

const CustomImg = ({ src, className }) => {
  const production = false;

  return (
    <>
      {production ? (
        <img src={src} alt="" className={` ${className}`} />
      ) : (
        <Image
          className={`${className}`}
          src={src}
          alt="Next.js logo"
          width={1000}
          height={1000}
          priority
        />
      )}
    </>
  );
};

export default CustomImg;
