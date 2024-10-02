import React from "react";
import "./style.scss";

const Hero = () => {
  return (
    <section className=" hero__section animate_top  relative   w-full     lg:h-screen">
      <div className=" relative z-10 w-[43rem] px-[5rem] py-[15rem] max-md:text-center">
        <h1 className="pt-9 font-playfair text-6xl font-bold   text-navy">
          We Build Leaders of Tomorrow
        </h1>
        <p className="mt-4 pt-4 font-kodchasan text-lg text-gray-800">
          Empowering leadership for a better future with innovation and
          integrity.
        </p>
      </div>
      <div className="absolute right-[30rem] top-[8rem] z-0 max-lg:hidden">
        <video
          src="/videos/3205624-hd_1920_1080_25fps.mp4"
          loop
          autoPlay
          muted
          className="  h-[35rem] w-[22rem] rounded-3xl object-cover"
        ></video>
      </div>
      <div className="absolute right-[3rem] top-[15rem] z-1 max-lg:hidden">
        <video
          src="/videos/buisnes.mp4"
          loop
          autoPlay
          muted
          className=" z-100 top-[10rem] h-[35rem] w-[24rem] rounded-3xl object-cover"
        ></video>
      </div>
    </section>
  );
};

export default Hero;
