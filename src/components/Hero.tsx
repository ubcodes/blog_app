import Image from "next/image";
import React from "react";
import banner from "../../public/banner.jpeg";

const Hero = () => {
  return (
    <>
      <div className="mx-auto">
        <Image
          src={banner}
          alt="hero banner image"
          className="w-[80%] h-80  text-center mx-auto"
        />
        <div className="mx-auto text-center flex flex-col justify-center mt-8">
          <h1 className=" font-extrabold text-4xl text-center self-center w-[60%]">
            A few words about this blog platform, Ghost, and how this site was
            made
          </h1>
          <div className="my-8 border-b-black-4">
            <p className="font-extralight ">
              {" "}
              Why Ghost (& Figma) instead of Meduim, <br /> WordsPress or other
              options?{" "}
            </p>
            <hr className="w-[40%] h-1 mx-auto bg-black to-black mt-10 mb-4 text-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
