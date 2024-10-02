import React from "react";
const keywords = [
  { name: "Architectural Design & Planning" },
  { name: "Microservices Architecture" },
  { name: "API Design & Integration" },
  { name: "Performance Optimization" },
  { name: "Scalability & Load Balancing Solutions" },
];
const SystemDesignCard = () => {
  return (
    <div className=" my-14  flex  gap-14  px-[5rem]" id="section9">
      <img
        src="/images/services/generative-ai.png"
        className="h-100 w-[30rem] rounded-2xl"
      />
      <div>
        <div>
          {/* <img src="" alt="" /> */}
          <h2 className="inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text pb-7 font-playfair text-4xl font-bold text-transparent">
            Crafting Robust Solutions through Expert System Design
          </h2>
          <p className=" py-2 text-lg font-medium">
            Unlock the potential of your applications with our tailored system
            design services. We specialize in creating scalable, efficient, and
            resilient systems that align with your business objectives. Let us
            help you build a strong foundation for your digital solutions,
            ensuring optimal performance and adaptability.
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
    </div>
  );
};

export default SystemDesignCard;
