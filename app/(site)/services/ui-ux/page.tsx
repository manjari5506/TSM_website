import React from "react";
import Link from "next/link";

import AppServices from "@/components/services/app-development/AppServices";
import IotCard from "@/components/services/services-cards/IotCard";
import Cards from "@/components/services/IotComponents/Cards";
const page = () => {
  return (
    <section className=" border-b-1 h-[30rem] ">
      <div className="relative  mb-[5rem]">
        <div className="relative z-1 w-[50rem] px-[10rem] pt-[12rem] ">
          <h1 className="inline-block bg-gradient-to-r from-[#c0392b] to-[#8e44ad] bg-clip-text py-3 font-playfair text-5xl font-bold text-transparent">
            UI/UX
          </h1>
          <p className="py-3 text-lg ">
            Crafting innovative, scalable applications tailored to your business
            needs
          </p>
          <button className="mt-8 rounded-3xl bg-navy bg-gradient-to-r from-[#c0392b] to-[#8e44ad] px-9 py-3 text-white   hover:opacity-80">
            <Link href="/career">Contact Us</Link>
          </button>
        </div>
        <img
          src="/images/ui-ux/ui-hero.png"
          className=" absolute right-[9rem] top-[6rem]   w-[40rem]  bg-cover"
        />
      </div>
      <section className="px-[6rem] py-[5rem]">
        <div className="  py-5">
          <h1 className="w-[40rem] font-playfair text-3xl font-bold tracking-wide text-navy ">
            Why StackMentalist Is Best For UI/UX Designing Services?
          </h1>
          <p className="text-md w-[40rem] py-5 font-semibold text-gray-600 ">
            Take your business to the next level by hiring our expert designers
            and leveraging our world-class UI/UX design services.
          </p>
        </div>
        <Cards />
      </section>
      <AppServices />
    </section>
  );
};

export default page;
