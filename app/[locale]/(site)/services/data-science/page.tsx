'use client';
import React from "react";
import "./styles.scss";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards"
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { DataScienceOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import { dataScienceApproach } from "@/components/services/common/process-card/CardsData";
import { dataScience } from "@/components/services/common/ReachOut-card/ReachOutData";
import { dataScienceStack } from "@/components/services/common/tech-stack/TechStackData";

const page = () => {
  return (
    <>
      <section className=" bg-beige pb-10">
        <div className="relative mx-auto w-[90%] mb-[5rem] flex flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-left">
            <h1 className="hero-heading py-2 font-playfair text-4xl font-bold text-left">
              Data Science
            </h1>
            <p className="py-3 text-lg text-navy">
            Take your business to the next level by leveraging our expert data scientists and cutting-edge data science services.
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
      <Offerings offerings={DataScienceOfferings}/>
      <TechStack techStackData={dataScienceStack}/>
      <Cards details={dataScienceApproach}/>
      <ReachOut 
        heading={dataScience.heading} 
        subheading={dataScience.subheading} 
        image={dataScience.image} 
      />
    </>
  );
};

export default page;
