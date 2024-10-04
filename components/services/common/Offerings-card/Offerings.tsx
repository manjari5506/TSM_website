"use client"
import React, { useState } from "react";
import "./styles.scss";

const Offerings = ({offerings}) => {
  const [selectedOffering, setSelectedOffering] = useState(offerings.content[0]);

  const handleSelectOffering = (offeringId: number) => {
    const offering = offerings.content.find((item) => item.id === offeringId);
    if (offering) {
      setSelectedOffering(offering);
    }
  };

  return (
    <section className="offerings-section py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-left mb-4 font-playfair text-navy">{offerings.heading}</h1>

        <p className="text-lg text-left mb-12">
        {offerings.subheading}
        </p>

        <div className="flex flex-row">
          <div className="w-1/3">
            <ul className="space-y-4">
              {offerings.content.map((offering) => (
                <li
                  key={offering.id}
                  className={`cursor-pointer py-3 px-5 text-lg font-semibold ${
                    selectedOffering.id === offering.id
                      ? "bg-navy text-white"
                      : "bg-white text-navy hover:bg-beige hover:text-navy"
                  }`}
                  onClick={() => handleSelectOffering(offering.id)}
                >
                  {offering.heading}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-2/3 px-10  py-2  ">
            <div className="bg-white pl-[2rem] pr-[10rem]   py-5   shadow-lg rounded-lg relative flex flex-col">
              <img src="/images/ui-ux/ui.png"  className="h-20 w-20 mb-5  "/>
              <h3 className="text-2xl font-bold mb-4">{selectedOffering.heading}</h3>
              <h4 className="text-lg font-medium mb-2">{selectedOffering.subheading}</h4>
              <ul className="list-disc list-inside py-5">
                {selectedOffering.description.map((point, index) => (
                  <li key={index} className="text-md py-2">
                    {point}
                  </li>
                ))}
              </ul>
              <img src="/images/ui-ux/ui.png"  className="absolute bottom-0 right-3 h-30 w-30 mb-5 opacity-30"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offerings;
