import Image from "next/image";
import React from "react";

const CustomImg = ({ src, className }) => {
  const production = false;

  return (
    <>
      {production ? (
        <img src={src} alt="" className={`dark:invert ${className}`} />
      ) : (
        <Image
          className={`dark:invert ${className}`}
          src={src}
          alt="Next.js logo"
          width={1000}
          height={1000}
          layout="responsive"
          priority
        />
      )}
    </>
  );
};

export default CustomImg;
