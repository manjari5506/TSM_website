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
    <div className="my-16   flex  gap-14  px-[5rem]" id="section6">
      <div>
        <div>
          {/* <img src="" alt="" /> */}
          <h2 className="inline-block bg-gradient-to-r from-navy via-gray-700 to-gray-400 bg-clip-text pb-3 font-playfair text-3xl font-bold text-transparent">
            Transforming Ideas into Innovative Mobile Experiences
          </h2>
          <p className=" text-md py-2 font-medium">
            Unlock the potential of your business with our tailored app
            development solutions. From innovative mobile apps to seamless user
            experiences, we create applications that engage users and drive
            growth. Let us transform your ideas into reality.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 py-4">
          {keywords.map((k, ind) => (
            <button className="rounded-xl border-2 border-navy px-7 py-[0.4rem] text-sm font-semibold text-navy hover:bg-navy hover:text-white">
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
