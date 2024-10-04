'use client';
import React from "react";
import "./styles.scss";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards"
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { bigDataOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import { uidetails } from "@/components/services/common/process-card/CardsData";
import { bigData } from "@/components/services/common/ReachOut-card/ReachOutData";

const page = () => {
  return (
    <>
      <section className=" bg-beige pb-10">
        <div className="relative mx-auto w-[90%] mb-[5rem] flex flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-left">
            <h1 className="hero-heading py-2 font-playfair text-4xl font-bold text-left">
            App Development
            </h1>
            <p className="py-3 text-lg text-navy">
            Take your business to new heights by leveraging our cutting-edge app development services. Our expert developers deliver world-class mobile and web app solutions that drive engagement, growth, and profitability.
            </p>
            {/* <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white   hover:opacity-80">
            Contact Us
          </button> */}
          </div>
          <img
            src="/images/cloud-bg.png"
            className="mt-40 mr-10"
          />
        </div>
      </section>
      <Offerings offerings={bigDataOfferings}/>
      <TechStack/>
      <Cards details={uidetails}/>
      <ReachOut 
        heading={bigData.heading} 
        subheading={bigData.subheading} 
        image={bigData.image} 
      />
    </>
  );
};

export default page;