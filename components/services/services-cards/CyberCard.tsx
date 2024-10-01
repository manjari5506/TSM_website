import React from "react";
const keywords = [
  { name: "Mobile Apps" },
  { name: "Native Development" },
  { name: " Cross-Platform Development" },
  { name: " Hybrid Apps" },
  { name: "Mobile App Testing" },

  { name: " Agile Development" },
  { name: "Mobile Apps" },
];

const CyberCard = () => {
  return (
    <div className=" my-14  flex  gap-14  px-[5rem]">
      <img
        src="/images/services/generative-ai.png"
        className="h-100 w-[30rem] rounded-2xl"
      />
      <div>
        <div>
          {/* <img src="" alt="" /> */}
          <h2 className="inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text pb-7 font-playfair text-4xl font-bold text-transparent">
            Transforming Ideas into Innovative Mobile Experiences
          </h2>
          <p className=" py-2 text-lg font-medium">
            Unlock the potential of your business with our tailored app
            development solutions. From innovative mobile apps to seamless user
            experiences, we create applications that engage users and drive
            growth. Let us transform your ideas into reality.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 py-4">
          {keywords.map((k, ind) => (
            <button className="text-md rounded-xl border-2 border-navy px-7 py-[0.4rem] font-semibold text-navy hover:bg-navy hover:text-white">
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

export default CyberCard;
