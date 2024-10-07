"use client"
import React, { useState } from "react";
//import { techStackData } from "./TechStackData";
import "./styles.scss";

const TechStack = ({techStackData}) => {
  const { heading, subheading, categories } = techStackData;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  console.log(categories)

  return (
    <section className="techstack-section py-16">
      <div className="text-left ">
          <h2 className="text-4xl font-bold font-playfair text-navy">{heading}</h2>
          <p className="text-lg text-gray-600 mt-5 font-semibold">{subheading}</p>
        </div>
      <div className="container">

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
            <div key={index} className="tech-logo">
              {tech.img}
              <p className="text-center mt-2">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
