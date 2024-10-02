import React from "react";
import "./style.scss";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="Hero__section  flex h-screen flex-col ">
      <div className="relative z-10">
        <div className="  px-[5rem] pt-[13rem] ">
          <h1 className="w-[45rem] font-playfair text-5xl font-bold leading-[4rem] text-navy">
            Streamline, Innovate, Succeed: The Stackmentalist Way
          </h1>
          <p className="mt-5 w-[43rem] py-2 font-kodchasan font-semibold   text-gray-600 ">
            At Stackmentalis, we provide innovative technology solutions across
            every domain. From web development to AI and cloud computing, we
            leverage diverse expertise to bring your vision to life and drive
            success.
          </p>
        </div>

        <video
          src="/videos/particles.mp4"
          autoPlay
          loop
          muted
          className="absolute bottom-[12rem]  right-14   h-[20rem]  rounded-3xl   bg-cover "
        />

        <div className="mt-[11rem] flex justify-center gap-18 border-t-2 border-navy border-opacity-70  py-2 pl-19">
          <div className="flex items-center gap-4  px-3 py-2 ">
            <h1 className="font-kodchasan text-4xl font-bold text-navy">
              2017
            </h1>
            <p className="ml-5 font-kodchasan text-lg font-medium">
              Innovating Since
            </p>
          </div>
          <div className="flex items-center gap-7   px-3 py-2 ">
            <h1 className="font-kodchasan text-4xl font-bold text-navy">
              350+
            </h1>
            <p className="ml-5 font-kodchasan text-lg font-medium">Tribe Of</p>
          </div>
          <div className="flex items-center gap-4   px-3 py-2 ">
            <h1 className="font-kodchasan text-4xl font-bold text-navy">1K+</h1>
            <p className="ml-5 font-kodchasan text-lg font-medium">
              Successful Projects
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
