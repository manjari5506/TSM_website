import React from "react";
const keywords = [
  { name: "Risk Assessment & Management" },
  { name: "Threat Detection & Response" },
  { name: "Data Encryption & Protection" },
  { name: "Security Awareness Training" },
  { name: "Compliance & Regulatory Support" },
];

const CyberCard = () => {
  return (
    <div className="my-14  flex gap-14   px-[5rem]">
      <div>
        <div>
          {/* <img src="" alt="" /> */}
          <h2 className="inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text pb-7 font-playfair text-4xl font-bold text-transparent">
            Safeguarding Your Digital Assets with Comprehensive Cyber Security
            Solutions
          </h2>
          <p className=" py-2 text-lg font-medium">
            Protect your business from evolving threats with our robust cyber
            security services. We employ advanced strategies and technologies to
            secure your systems, data, and applications, ensuring peace of mind
            in an increasingly digital world. Let us help you fortify your
            defenses against cyber risks.
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

export default CyberCard;
