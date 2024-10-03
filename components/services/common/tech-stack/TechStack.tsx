import React, { useState } from "react";
import { techStackData } from "./TechStackData";
import "./styles.scss";

const TechStack = () => {
  const { heading, subheading, categories } = techStackData;
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <section className="techstack-section py-16">
      <div className="container mx-auto w-[90%] ">
        <div className="w-full">
          <h2 className="text-3xl font-bold text-navy">{heading}</h2>
          <p className="text-lg text-gray-600 mt-4">{subheading}</p>
        </div>

        <div className="categories flex mt-10 w-full items-center">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`category-btn text-lg transition-colors ${
                selectedCategory.categoryName === category.categoryName
                  ? "text-blue-500 font-semibold"
                  : "text-gray-500"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.categoryName}
            </button>
          ))}
        </div>

        <div className="stack-logos grid grid-cols-2 gap-6 mt-10">
          {selectedCategory.stack.map((tech, index) => (
            <div key={index} className="tech-logo w-full flex justify-center items-center">
              <img src={tech.img} alt={tech.name} className="h-20" />
              {/* <p className="text-center mt-2">{tech.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
