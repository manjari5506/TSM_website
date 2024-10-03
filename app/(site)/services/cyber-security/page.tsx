'use client';
import React from "react";
import Link from "next/link";
import "./styles.scss";

import AppServices from "@/components/services/app-development/AppServices";
import Offerings from "@/components/services/big-data/Offerings-card/Offerings";
import ReachOut from "@/components/services/big-data/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards"
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { cyberofferings } from "@/components/services/big-data/Offerings-card/offeringsData";
import { uidetails } from "@/components/services/common/process-card/CardsData";

const page = () => {
  return (
    <>
      <section className="bg-beige pb-10">
        <div className="relative  mb-[5rem] flex flex-row mx-auto w-[90%]">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-left">
            <h1 className="hero-heading py-2 font-playfair text-4xl font-bold text-left">
            Defend Your Business with <br></br>World-Class Cybersecurity Solutions
            </h1>
            <p className="py-3 text-lg text-navy">
            Ensure your digital assets are secure with our advanced cybersecurity services. From network protection to endpoint security, we 
            safeguard your business against cyber threats.
            </p>
            <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white linear-gradient(to right, #1c4350 0%, #428da2 100%)  hover:opacity-80">
            Contact Us
          </button>
          </div>
          <img
            src="/images/cyber-security-bg.png"
            className=""
          />
        </div>
      </section>
      <Offerings offerings={cyberofferings}/>
      <TechStack/>
      <Cards details={uidetails}/>
      <ReachOut/>
    </>
  );
};

export default page;
