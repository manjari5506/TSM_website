"use client";
import React, { useState } from "react";
//import { techStackData } from "./TechStackData";
import "./styles.scss";
import { useTranslations } from "next-intl";

const TechStack = ({ techStackData, type }) => {
  const { heading, subheading, categories } = techStackData;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  console.log(categories);
  const t = useTranslations(type);

  return (
    <section className="techstack-section py-16">
      <div className="text-left ">
        <h2 className="font-playfair text-4xl font-bold text-navy">
          {t("techstack.heading")}
        </h2>
        <p className="mt-5 text-lg font-semibold text-gray-600">
          {t("techstack.subheading")}
        </p>
      </div>
      <div className="container">
        <div className="categories mt-10 flex  items-center gap-[5rem]  border-b-2 ">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn px-6 py-4 text-lg transition-colors ${
                selectedCategory.categoryName === category.categoryName
                  ? " border-b-2 border-navy font-bold text-navy"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {t(`techstack.categories.${index}.categoryName`)}
            </button>
          ))}
        </div>

        <div className="stack-logos flex gap-[5rem] py-[4rem]">
          {selectedCategory.stack.map((tech, index) => (
            <div key={index} className="tech-logo">
              {tech.img}
              <p className="mt-2 text-center">
                {" "}
                {t(
                  `techstack.categories.${techStackData.categories.indexOf(selectedCategory)}.stack.${index}.name`,
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
