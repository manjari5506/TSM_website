import React from "react";
const keywords = [
  { name: "User Research & Personas" },
  { name: "Wireframing & Prototyping" },
  { name: "Visual Design & Branding" },
  { name: "Usability Testing & Feedback" },
  { name: "Responsive & Adaptive Design" },
];
const UiCard = () => {
  return (
    <div className="mt-8 flex gap-14 px-[6rem]" id="section7">
      <img
        src="/images/services/generative-ai.png"
        className="h-100 w-[30rem] rounded-2xl"
      />
      <div>
        <div>
          {/* <img src="" alt="" /> */}
          <h2 className="inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text pb-7 font-playfair text-4xl font-bold text-transparent">
            Designing Exceptional User Experiences with UI/UX Solutions
          </h2>
          <p className=" py-2 text-lg font-medium">
            Transform your digital presence with our expert UI/UX design
            services. We create intuitive and engaging interfaces that not only
            enhance user satisfaction but also drive conversion. Let us help you
            craft seamless user journeys that captivate and retain your
            audience.
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

export default UiCard;
