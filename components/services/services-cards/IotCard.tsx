import React from "react";
const keywords = [
  { name: "Smart Device Integration" },
  { name: "Industrial Automation Solutions" },
  { name: "Real-time Data Analytics" },
  { name: "Predictive Maintenance" },
  { name: "Customized IoT Solutions" },
];
const IotCard = () => {
  return (
    <div className="my-14  flex gap-14   px-[5rem]" id="section4">
      <div>
        <div>
          {/* <img src="" alt="" /> */}
          <h2 className="inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text pb-7 font-playfair text-4xl font-bold text-transparent">
            Transforming Industries with IoT & Automation Solutions
          </h2>
          <p className=" py-2 text-lg font-medium">
            Unlock new opportunities and drive efficiency with our cutting-edge
            IoT and automation solutions. We connect devices and systems to
            streamline processes, enhance productivity, and gather valuable
            insights. Let us help you harness the power of IoT to create a
            smarter, more automated future.
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

export default IotCard;
