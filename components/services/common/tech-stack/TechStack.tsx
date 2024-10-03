"use client"
import React, { useState } from "react";
import { techStackData } from "./TechStackData";
import "./styles.scss";

const TechStack = () => {
  const { heading, subheading, categories } = techStackData;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="techstack-section py-16">
      <div className="container   ">
        <div className="text-center ">
          <h2 className="text-4xl font-bold font-playfair text-navy">{heading}</h2>
          <p className="text-lg text-gray-600 mt-5">{subheading}</p>
        </div>

        <div className="categories flex mt-10  gap-[5rem] border-b-2  items-center ">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn text-lg py-4 px-6 transition-colors ${
                selectedCategory.categoryName === category.categoryName
                  ? " text-navy font-bold border-b-2 border-navy"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.categoryName}
            </button>
          ))}
        </div>

        <div className="stack-logos py-[4rem] flex gap-[5rem]">
          {selectedCategory.stack.map((tech, index) => (
            <div key={index} className="tech-logo    ">
              <img src={tech.img}   className="h-20" />
              <p className="text-center mt-2">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
