"use client";
import React from "react";
import "./styles.scss";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards";
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { automationOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import { automationApproach } from "@/components/services/common/process-card/CardsData";
import { automation } from "@/components/services/common/ReachOut-card/ReachOutData";
import { automationStack } from "@/components/services/common/tech-stack/TechStackData";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("iotservices");
  return (
    <>
      <section className=" bg-beige pb-10">
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
          <img src="" className="mr-10 mt-40" />
        </div>
      </section>
      <Offerings offerings={automationOfferings} type="iotservices" />
      <TechStack techStackData={automationStack} type="iotservices" />
      <Cards details={automationApproach} type="iotservices" />
      <ReachOut
        type="iotservices"
        heading={automation.heading}
        subheading={automation.subheading}
        image={automation.image}
      />
    </>
  );
};

export default page;
