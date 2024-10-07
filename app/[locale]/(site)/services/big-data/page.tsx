"use client";
import React from "react";
import "./styles.scss";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import Cards from "@/components/services/common/process-card/Cards";
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { bigDataOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import { bigDataApproach } from "@/components/services/common/process-card/CardsData";
import { bigData } from "@/components/services/common/ReachOut-card/ReachOutData";
import { bigDataStack } from "@/components/services/common/tech-stack/TechStackData";
import { useTranslations } from "next-intl";

const page = () => {
  const t = useTranslations("bigdataservices");
  return (
    <>
      <section className=" bg-beige pb-10">
        <div className="relative mx-auto mb-[5rem] flex w-[90%] flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-left">
            <h1 className="hero-heading py-2 text-left font-playfair text-5xl font-bold">
              {t("hero.heading.h1")} <br></br> {t("hero.heading.h2")}{" "}
              <span className="font-playfair text-5xl">
                {" "}
                {t("hero.heading.h3")}
              </span>{" "}
              <br></br>
            </h1>
            <p className="py-3 text-lg text-navy">{t("hero.subheading")}</p>
            {/* <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white   hover:opacity-80">
            Contact Us
          </button> */}
          </div>
          <img src="/images/cloud-bg.png" className="mr-10 mt-40" />
        </div>
      </section>
      <Offerings offerings={bigDataOfferings} type="bigdataservices" />
      <TechStack techStackData={bigDataStack} type="bigdataservices" />
      <Cards details={bigDataApproach} type="bigdataservices" />
      <ReachOut
        type="bigdataservices"
        heading={bigData.heading}
        subheading={bigData.subheading}
        image={bigData.image}
      />
    </>
  );
};

export default page;
