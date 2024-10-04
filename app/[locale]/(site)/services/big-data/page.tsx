'use client';
import React from "react";
import "./styles.scss";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards"
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { bigDataOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import { bigDataApproach } from "@/components/services/common/process-card/CardsData";
import { bigData } from "@/components/services/common/ReachOut-card/ReachOutData";
import { bigDataStack } from "@/components/services/common/tech-stack/TechStackData";

const page = () => {
  return (
    <>
      <section className=" bg-beige pb-10">
        <div className="relative mx-auto w-[90%] mb-[5rem] flex flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-left">
            <h1 className="hero-heading py-2 font-playfair text-5xl font-bold text-left">
              Leverage the Power <br></br>of <span className="text-5xl font-playfair">Big Data</span> <br></br>
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
            src="/images/cloud-bg.png"
            className="mt-40 mr-10"
          />
        </div>
      </section>
      <Offerings offerings={bigDataOfferings}/>
      <TechStack techStackData={bigDataStack}/>
      <Cards details={bigDataApproach}/>
      <ReachOut 
        heading={bigData.heading} 
        subheading={bigData.subheading} 
        image={bigData.image} 
      />
    </>
  );
};

export default page;
