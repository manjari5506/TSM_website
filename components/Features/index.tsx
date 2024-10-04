"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import "./Features.scss";

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="services-box py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 text-left md:px-8 xl:px-0 ">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: "Services We Provide",
              description: `Discover the ways our clients trust us to bring their visions to life.`,
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="service-card mt-12.5 grid grid-cols-1 gap-7.5 px-10 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
