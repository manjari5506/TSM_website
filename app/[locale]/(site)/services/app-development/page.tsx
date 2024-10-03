import React from "react";
import Link from "next/link";

import AppServices from "@/components/services/app-development/AppServices";
const page = () => {
  return (
    <section className="   ">
      <div className="relative  mb-[5rem]">
        <div className="relative z-1 w-[50rem] px-[10rem] pt-[15rem] ">
          <h1 className=" py-3 font-playfair text-5xl font-bold   text-navy">
            App Development
          </h1>
          <p className="py-3 text-lg ">
            Crafting innovative, scalable applications tailored to your business
            needs
          </p>
          <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white   hover:opacity-80">
            Contact Us
          </button>
        </div>
        <img
          src="/images/app-development.jpg"
          className=" absolute top-0 h-[40rem] w-full bg-cover"
        />
      </div>
      <AppServices />
    </section>
  );
};

export default page;
