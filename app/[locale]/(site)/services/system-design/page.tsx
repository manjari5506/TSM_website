"use client";
import React from "react";
import "./styles.scss";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards";
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { systemDesignOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import { systemDesignApproach } from "@/components/services/common/process-card/CardsData";
import { systemDesign } from "@/components/services/common/ReachOut-card/ReachOutData";
import { systemDesignStack } from "@/components/services/common/tech-stack/TechStackData";

const page = () => {
  return (
    <>
      <section className=" bg-grey pb-10">
        <div className="relative mx-auto mb-[5rem] flex w-[90%] flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-left">
            <h1 className="hero-heading py-2 text-left font-playfair text-4xl font-bold">
              Future-Proof System Designs for Every Business Need
            </h1>
            <p className="py-3 text-lg text-navy">
              Take your business to the next level by hiring our expert system
              architects and leveraging our comprehensive system design
              services. Our solutions ensure scalability, performance, and
              reliability to meet the evolving demands of your business.
            </p>
            {/* <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white   hover:opacity-80">
            Contact Us
          </button> */}
          </div>
          <img src="" className="mr-10 mt-40" />
        </div>
      </section>
      <Offerings offerings={systemDesignOfferings} type="appservices" />
      <TechStack techStackData={systemDesignStack} type="appservices" />
      <Cards details={systemDesignApproach} type="appservices" />
      <ReachOut
        type="appservices"
        heading={systemDesign.heading}
        subheading={systemDesign.subheading}
        image={systemDesign.image}
      />
    </>
  );
};

export default page;
