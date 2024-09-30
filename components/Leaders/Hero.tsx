import React from "react";
import "./style.scss";

const Hero = () => {
  return (
    <section className=" hero__section   relative   h-screen w-full    bg-[#f5f5f5]">
      <div className=" relative z-10 w-[43rem] px-[5rem] py-[17rem] max-md:text-center">
        <h1 className="font-playfair text-navy pt-9 text-6xl   font-bold">
          We Build Leaders of Tomorrow
        </h1>
        <p className="font-kodchasan mt-4 pt-4 text-lg text-gray-800">
          Empowering leadership for a better future with innovation and
          integrity.
        </p>
      </div>
      <div className="absolute right-[33rem] top-[7rem] z-0 max-lg:hidden">
        <video
          src="/videos/3205624-hd_1920_1080_25fps.mp4"
          loop
          autoPlay
          muted
          className="  h-[40rem] w-[28rem] rounded-3xl object-cover"
        ></video>
      </div>
      <div className="absolute right-[3rem] top-[15rem] z-1 max-lg:hidden">
        <video
          src="/videos/buisnes.mp4"
          loop
          autoPlay
          muted
          className="  h-[37rem] w-[28rem] rounded-3xl object-cover"
        ></video>
      </div>
    </section>
  );
};

export default Hero;
