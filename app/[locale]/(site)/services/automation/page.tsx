'use client';
import React from "react";
import "./styles.scss";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards"
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { automationOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import { automationApproach } from "@/components/services/common/process-card/CardsData";
import { automation } from "@/components/services/common/ReachOut-card/ReachOutData";
import { automationStack } from "@/components/services/common/tech-stack/TechStackData";

const page = () => {
  return (
    <>
      <section className=" bg-beige pb-10">
        <div className="relative mx-auto w-[90%] mb-[5rem] flex flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-left">
            <h1 className="hero-heading py-2 font-playfair text-4xl font-bold text-left">
            Empowering Your Business Through Cutting-Edge IoT Solutions and Automation
            </h1>
            <p className="py-3 text-lg text-navy">
            Take your business to the next level by leveraging our IoT expertise and automation services, designed to drive efficiency, innovation, and digital transformation.
            </p>
            {/* <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white   hover:opacity-80">
            Contact Us
          </button> */}
          </div>
          <img
            src=""
            className="mt-40 mr-10"
          />
        </div>
      </section>
      <Offerings offerings={automationOfferings}/>
      <TechStack techStackData={automationStack}/>
      <Cards details={automationApproach}/>
      <ReachOut 
        heading={automation.heading} 
        subheading={automation.subheading} 
        image={automation.image} 
      />
    </>
  );
};

export default page;
