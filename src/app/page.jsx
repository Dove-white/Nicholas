import CustomImg from "@/components/CustomImg";
import React from "react";

const Home = () => {
  return (
    <div className="2xl:max-w-[1440px] mx-auto px-4 sm:px-8 min-h-screen flex flex-col max-md:bg-white">
      <div className="flex items-center justify-between mt-2 md:mt-8 h-14">
        <div className="size-[49px] bg-[#F9F4FF] sm:bg-white rounded-full shrink-0">
          <h2 className="text-[3rem] font-bold translate-x-3.5 translate-y-3.5">
            N
          </h2>
        </div>

        <ul className="hidden md:flex items-center gap-[3rem] text-xl font-bold">
          <li className="border-b-[3px] border-[#9747FF] px-2">
            <a href="">HOME</a>
          </li>
          <li>
            <a href="">ABOUT</a>
          </li>
          <li>
            <a href="">WORKS</a>
          </li>
        </ul>

        <div />
      </div>

      <div
        style={{ height: "calc(100vh - 5.5rem)" }}
        className=" grid md:grid-cols-2 mt-14 md:mt-0 gap-10"
      >
        <div className="h-full flex flex-col justify-center gap-10">
          <h1 className="text-[2.25rem] sm:text-[3rem] font-bold">
            Hi, I&lsquo;m Nicholas
          </h1>
          <p className="text-xl font-semibold">
            Designer and fascinated by the social products space.
          </p>
          <p className="text-xl font-semibold">
            Currently based in Tema ( Community 10 Apple Avenue), researching
            the intersection between technology and mental illness by making
            designs look intuitive.
          </p>

          <button className="text-2xl font-bold border-b-[3px] border-black px-3 py-2 w-fit">
            Check out my works
          </button>
        </div>
        <div className="flex items-end max-md:mb-[5rem] bg-[#F9F4FF] md:bg-transparent rounded-full md:rounded-none max-md:overflow-hidden max-md:size-[20rem] max-md:mx-auto max-md:pt-4">
          <CustomImg
            src="/image/profile.png"
            className={`max-md:object-top max-md:scale-[.85] mt-auto`}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
