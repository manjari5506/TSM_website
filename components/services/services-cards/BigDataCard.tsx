import React from "react";
const keywords = [
  { name: "Data Collection & Storage Solutions" },
  { name: "Advanced Analytics & Visualization" },
  { name: "Predictive Modeling & Forecasting" },
  { name: "Data Governance & Management" },
  { name: "Custom Big Data Architecture" },
];
const BigData = () => {
  return (
    <div className="my-14 flex gap-14 px-[5rem]" id="section6">
      <div>
        <div>
          {/* <img src="" alt="" /> */}
          <h2 className="inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text pb-7 font-playfair text-4xl font-bold text-transparent">
            Unlocking Insights with Comprehensive Big Data Solutions
          </h2>
          <p className=" py-2 text-lg font-medium">
            Harness the power of your data with our advanced Big Data services.
            We help you collect, analyze, and visualize vast amounts of
            information to uncover valuable insights that drive strategic
            decision-making. Let us transform your data into a competitive
            advantage.
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

export default BigData;
