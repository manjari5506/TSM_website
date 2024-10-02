import React from "react";
const keywords = [
  { name: "Data Analysis & Visualization" },
  { name: "Predictive Analytics" },
  { name: "Machine Learning Solutions" },
  { name: "Big Data Solutions" },
  { name: "Data Warehousing & Management" },
];
const DataScience = () => {
  return (
    <div className="  my-14 flex  gap-14  px-[5rem]" id="section2">
      <div>
        <div>
          {/* <img src="" alt="" /> */}
          <h2 className="inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text pb-7 font-playfair text-4xl font-bold text-transparent">
            Harnessing the Power of Data for Intelligent Insights
          </h2>
          <p className=" py-2 text-lg font-medium">
            Unlock the potential of your business with our comprehensive data
            science solutions. From advanced analytics to predictive modeling,
            we empower organizations to make data-driven decisions that enhance
            performance and drive innovation. Let us transform your data into
            actionable insights.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 py-4">
          {keywords.map((k, ind) => (
            <button className="rounded-xl border-2 border-navy px-3 py-[0.2rem] text-sm font-semibold text-navy hover:bg-navy hover:text-white">
              {k.name}
            </button>
          ))}
        </div>
        <button className="  mt-4 rounded-xl bg-navy px-7 py-3  text-lg text-white">
          Know More
        </button>
      </div>
      <img
        src="/images/services/generative-ai.png"
        className="h-100 w-[30rem] rounded-2xl"
      />
    </div>
  );
};

export default DataScience;
