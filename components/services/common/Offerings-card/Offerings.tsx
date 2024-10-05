"use client";
import React, { useState } from "react";
import "./styles.scss";
import { useTranslations } from "next-intl";

const Offerings = ({ offerings, type }) => {
  const [selectedOffering, setSelectedOffering] = useState(
    offerings.content[0],
  );
  const t = useTranslations(type);
  const handleSelectOffering = (offeringId: number) => {
    const offering = offerings.content.find((item) => item.id === offeringId);
    if (offering) {
      console.log(offering);
      setSelectedOffering(offering);
    }
  };

  return (
    <section className="offerings-section py-16">
      <div className="container mx-auto px-4">
        <h1 className="mb-4 text-left font-playfair text-4xl font-bold text-navy">
          {t(`appofferings.heading`)}
        </h1>

        <p className="mb-12 text-left text-lg">
          {t("appofferings.subheading")}
        </p>

        <div className="flex flex-row">
          <div className="w-1/3">
            <ul className="mt-10 space-y-4">
              {offerings.content.map((offering, ind) => (
                <li
                  key={offering.id}
                  className={`cursor-pointer px-5 py-3 text-lg font-semibold ${
                    selectedOffering.id === offering.id
                      ? "bg-beige text-navy"
                      : "bg-white text-navy ease-in-out hover:scale-110 hover:bg-beige2 hover:text-navy"
                  }`}
                  onClick={() => handleSelectOffering(offering.id)}
                >
                  {t(`appofferings.content.${ind}.heading`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-200 w-2/3  px-5 py-2">
            <div className="data-box relative flex flex-col rounded-lg bg-white py-5 pl-[2rem] pr-[10rem] shadow-lg">
              <img src={selectedOffering.logo} className="mb-5 h-20 w-20  " />
              <h3 className="mb-4 text-2xl font-bold text-navy">
                {t(
                  `appofferings.content.${offerings.content.findIndex((item) => item.id === selectedOffering.id)}.heading`,
                )}
              </h3>
              <h4 className="text-md mb-2 font-semibold">
                {t(
                  `appofferings.content.${offerings.content.findIndex((item) => item.id === selectedOffering.id)}.subheading`,
                )}
              </h4>
              <ul className="list-inside list-disc py-5">
                {selectedOffering.description.map((point, index) => (
                  <li key={index} className="text-md py-2">
                    {t(
                      `appofferings.content.${offerings.content.findIndex((item) => item.id === selectedOffering.id)}.description.${index}`,
                    )}
                  </li>
                ))}
              </ul>
              <img
                src={selectedOffering.logo}
                className="absolute bottom-0 right-3 mb-5 h-30 w-30 opacity-30"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
