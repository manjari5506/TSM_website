import React from "react";
import "./style.scss";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("leaderpage.hero");
  return (
    <section className=" hero__section animate_top  relative   w-full     lg:h-screen">
      <div className=" relative z-10 w-[43rem] px-[5rem] py-[14rem] max-md:text-center">
        <h1 className="w-[50rem] pt-9 font-playfair text-6xl font-bold   text-navy">
          {t("heading")}
        </h1>
        <p className="mt-4 pt-4 font-kodchasan text-lg text-gray-800">
          {t("subheading")}
        </p>
      </div>
      <div className="absolute right-[28rem] top-[6rem] z-0 max-lg:hidden">
        <video
          src="/videos/3205624-hd_1920_1080_25fps.mp4"
          loop
          autoPlay
          muted
          className="  h-[32rem] w-[22rem] rounded-3xl object-cover"
        ></video>
      </div>
      <div className="absolute right-[4rem] top-[10rem] z-1 max-lg:hidden">
        <video
          src="/videos/buisnes.mp4"
          loop
          autoPlay
          muted
          className=" z-100   h-[32rem] w-[22rem] rounded-3xl object-cover"
        ></video>
      </div>
    </section>
  );
};

export default Hero;
