"use client";
import React from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";
import "./Features.scss";
import { useTranslations } from "next-intl";

const Feature = () => {
  const t = useTranslations("homepage");
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="services-box py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 text-left md:px-8 xl:px-0 ">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "", // Use translation for the title
              subtitle: t("services.heading"), // Use translation for the subtitle
              description: t("services.subheading"), // Use translation for the description if needed
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="service-card mt-12.5 grid grid-cols-1 gap-7.5 px-10 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {featuresData.map((feature, index) => (
              <SingleFeature feature={feature} index={index} key={feature.id} />
            ))}
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  );
};

export default Feature;
