import React from "react";
type DetailsType = {
  src: string;
  heading: string;
  description: string;
};
const details: DetailsType[] = [
  {
    src: "/images/ui-ux/earth.png",
    heading: "International Design Standards",
    description:
      "We set our high standards of design by following international quality standards. Rest our work speaks for itself to grab global response.",
  },
  {
    src: "/images/ui-ux/earth.png",
    heading: "International Design Standards",
    description:
      "We set our high standards of design by following international quality standards. Rest our work speaks for itself to grab global response.",
  },
  {
    src: "/images/ui-ux/earth.png",
    heading: "International Design Standards",
    description:
      "We set our high standards of design by following international quality standards. Rest our work speaks for itself to grab global response.",
  },
  {
    src: "/images/ui-ux/earth.png",
    heading: "International Design Standards",
    description:
      "We set our high standards of design by following international quality standards. Rest our work speaks for itself to grab global response.",
  },
];

const Cards = () => {
  return (
    <div className="flex gap-9 py-8">
      {details.map((detail, ind) => (
        <div className="flex flex-col rounded-xl border-2 px-7  py-11 text-left hover:scale-110 hover:duration-300 hover:ease-in-out ">
          <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-blue-300">
            <img src={detail.src} className="  h-[3rem] w-[3rem] " />
          </div>
          <h2 className="py-3 text-2xl font-bold text-navy">
            {detail.heading}
          </h2>
          <p className="text-md mb-4 text-gray-600">{detail.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Cards;
