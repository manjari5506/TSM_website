'use client';
import React from "react";
import "./styles.scss";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards"
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { cloudOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import { cloudDevopsApproach } from "@/components/services/common/process-card/CardsData";
import { cloudDevops } from "@/components/services/common/ReachOut-card/ReachOutData";
import { cloudDevopsStack } from "@/components/services/common/tech-stack/TechStackData";

const page = () => {
  return (
    <>
      <section className=" bg-beige pb-10">
        <div className="relative mx-auto w-[90%] mb-[5rem] flex flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-left">
            <h1 className="hero-heading py-2 font-playfair text-4xl font-bold text-left">
            Empower Your Business with Cutting-Edge Cloud and DevOps Solutions
            </h1>
            <p className="py-3 text-lg text-navy">
            Unlock the true potential of your infrastructure by leveraging our Cloud and DevOps expertise. We offer reliable, scalable, and secure services to drive operational efficiency and transform your business.
            </p>
            {/* <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white   hover:opacity-80">
            Contact Us
          </button> */}
          </div>
          <img
            src="/images/cloud-bg.png"
            className="mt-40"
          />
        </div>
      </section>
      <Offerings offerings={cloudOfferings}/>
      <TechStack techStackData={cloudDevopsStack}/>
      <Cards details={cloudDevopsApproach}/>
      <ReachOut 
        heading={cloudDevops.heading} 
        subheading={cloudDevops.subheading} 
        image={cloudDevops.image} 
      />
    </>
  );
};

export default page;
