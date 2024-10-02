import React from "react";
const keywords = [
  { name: "Cloud Infrastructure Setup" },
  { name: "Continuous Integration & Continuous Deployment (CI/CD)" },
  { name: "Cloud Migration Services" },
  { name: "Infrastructure as Code (IaC)" },
  { name: "Monitoring & Performance Optimization" },
];
const CloudCard = () => {
  return (
    <div className="my-14  flex gap-14 px-[5rem]">
      <img
        src="/images/services/generative-ai.png"
        className="h-100 w-[30rem] rounded-2xl"
      />
      <div>
        <div>
          {/* <img src="" alt="" /> */}
          <h2 className="inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text pb-7 font-playfair text-4xl font-bold text-transparent">
            Elevate Your Business with Cloud & DevOps Solutions
          </h2>
          <p className=" py-2 text-lg font-medium">
            Unlock the full potential of your IT infrastructure with our
            comprehensive Cloud and DevOps services. We streamline development
            and operations, ensuring rapid deployment and scalability while
            enhancing collaboration across teams. Let us help you harness the
            power of the cloud for improved efficiency and innovation.
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

export default CloudCard;
