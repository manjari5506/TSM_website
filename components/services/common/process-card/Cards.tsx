import React from "react";
import "./styles.scss";
import { useTranslations } from "next-intl";

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

const Cards = ({ details, type }: { details: DetailsType; type: string }) => {
  const t = useTranslations(type);
  return (
    <section className="mx-auto w-[90%]">
      <div className="mx-auto w-[90%] gap-9 px-4 py-8">
        <div className="py-5">
          <h1 className="w-[40rem] font-playfair text-3xl font-bold tracking-wide text-navy">
            {t("approach.heading")}
          </h1>
          <p className="text-md w-[40rem] py-5 font-semibold text-gray-600 ">
            {t("approach.subheading")}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {details.content.map((detail, ind) => (
            <div key={ind}>
              <div className="card-box flex flex-col rounded-xl border-2 px-7 py-10 text-left hover:scale-105 hover:duration-300 hover:ease-in-out">
                <div className="img-box relative flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-full hover:bg-blue-300">
                  <img src={detail.src} className="h-[3rem] w-[3rem]" />
                </div>
                <h2 className="py-3 text-2xl font-bold text-navy">
                  {t(`approach.content.${ind}.heading`)}
                </h2>
                <p className="text-md mb-4 text-gray-600">
                  {t(`approach.content.${ind}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
