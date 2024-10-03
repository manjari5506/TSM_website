import React from "react";

type Detail = {
  src: string;
  description: string;
  heading: string;
  subheading?: string;
};

type DetailsType = {
  heading: string;
  subheading: string;
  content: Detail[];
};

const Cards = ({ details }: { details: DetailsType }) => {
  return (
    <section className="mx-auto w-[90%]">
    <div className="mx-auto px-4 gap-9 py-8 w-[90%]">
      <div className="py-5">
        <h1 className="w-[40rem] font-playfair text-3xl font-bold tracking-wide text-navy">
          {details.heading}
        </h1>
        <p className="text-md w-[40rem] py-5 font-semibold text-gray-600 ">
          {details.subheading}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {details.content.map((detail, ind) => (
          <div key={ind}>
            <div className="flex flex-col rounded-xl border-2 px-7 py-11 text-left hover:scale-105 hover:duration-300 hover:ease-in-out">
              <div className="relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full bg-blue-300">
                <img src={detail.src} className="h-[3rem] w-[3rem]" />
              </div>
              <h2 className="py-3 text-2xl font-bold text-navy">
                {detail.heading}
              </h2>
              <p className="text-md mb-4 text-gray-600">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Cards;
