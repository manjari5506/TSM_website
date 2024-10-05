"use client";
import React from "react";
import "./styles.scss";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards";
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { appDevelopmentOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import { appDevelopmentApproach } from "@/components/services/common/process-card/CardsData";
import { appDevelopment } from "@/components/services/common/ReachOut-card/ReachOutData";
import { appDevelopmentStack } from "@/components/services/common/tech-stack/TechStackData";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("appservices");
  console.log(t);
  // const {heading , subheading } = t.hero;
  return (
    <>
      <section className=" bg-grey pb-10">
        <div className="relative mx-auto mb-[5rem] flex w-[90%] flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-left">
            <h1 className="hero-heading py-2 text-left font-playfair text-4xl font-bold">
              {t("hero.heading")}
            </h1>
            <p className="py-3 text-lg text-navy">{t("hero.subheading")}</p>
            {/* <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white   hover:opacity-80">
            Contact Us
          </button> */}
          </div>
          <img src="/images/app-development-bg.png" className="mr-30 mt-40" />
        </div>
      </section>
      <Offerings offerings={appDevelopmentOfferings} type="appservices" />
      <TechStack techStackData={appDevelopmentStack} type="appservices" />
      <Cards details={appDevelopmentApproach} type="appservices" />
      <ReachOut
        type="appservices"
        heading={appDevelopment.heading}
        subheading={appDevelopment.subheading}
        image={appDevelopment.image}
      />
    </>
  );
};

export default page;
