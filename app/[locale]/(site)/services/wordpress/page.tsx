"use client";
import React from "react";
import "./styles.scss";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards";
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { wordpressOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import { wordpressApproach } from "@/components/services/common/process-card/CardsData";
import { wordpress } from "@/components/services/common/ReachOut-card/ReachOutData";
import { wordpressStack } from "@/components/services/common/tech-stack/TechStackData";

const page = () => {
  return (
    <>
      <section className=" bg-beige2 pb-10">
        <div className="relative mx-auto mb-[5rem] flex w-[90%] flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-left">
            <h1 className="hero-heading py-2 text-left font-playfair text-4xl font-bold">
              Engage Your Audience with High-Performance WordPress Websites
            </h1>
            <p className="py-3 text-lg text-navy">
              Take your business to the next level by leveraging our expert
              WordPress developers and world-class WordPress development
              services.
            </p>
            {/* <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white   hover:opacity-80">
            Contact Us
          </button> */}
          </div>
          <img src="/images/wordpress-bg.png" className="mr-10 mt-40" />
        </div>
      </section>
      <Offerings offerings={wordpressOfferings} type="appservices" />
      <TechStack techStackData={wordpressStack} type="appservices" />
      <Cards details={wordpressApproach} type="appservices" />
      <ReachOut
        type="appservices"
        heading={wordpress.heading}
        subheading={wordpress.subheading}
        image={wordpress.image}
      />
    </>
  );
};

export default page;
