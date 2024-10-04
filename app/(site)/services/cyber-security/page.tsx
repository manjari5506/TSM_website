'use client';
import React from "react";
import Link from "next/link";
import "./styles.scss";

import AppServices from "@/components/services/app-development/AppServices";
import Offerings from "@/components/services/big-data/Offerings-card/Offerings";
import ReachOut from "@/components/services/big-data/ReachOut-card/ReachOut";
import Cards from "@/components/services/IotComponents/Cards"
import TechStack from "@/components/services/common/tech-stack/TechStack";

const page = () => {
  return (
    <>
      <section className=" bg-beige pb-10">
        <div className="relative  mb-[5rem] flex flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-center">
            <h1 className="hero-heading py-2 font-playfair text-4xl font-bold text-center">
              Leverage the Power of <br></br><span className="text-5xl font-playfair">Big Data</span> <br></br>
            </h1>
            <p className="py-3 text-lg text-navy">
              Take your business to the next level by hiring our expert Big Data analysts and engineers
              to unlock actionable insights that drive strategic decisions.
            </p>
            {/* <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white   hover:opacity-80">
            Contact Us
          </button> */}
          </div>
          <img
            src="/images/cyber-security-bg.png"
            className=""
          />
        </div>
      </section>
      <Offerings/>
      <TechStack/>
      {/* <Cards/> */}
      <ReachOut/>
    </>
  );
};

export default page;
