import React from "react";
import "./style.scss";
import { useTranslations } from "next-intl";

const Mission = () => {
  const t = useTranslations("overviewpage");
  return (
    <section className="mt-[1.2rem] px-[7rem]  ">
      <div className="flex gap-[6rem] rounded-3xl bg-[#f5f5f5] px-[5rem] py-[3rem]">
        <img
          src="/images/overview/mission.jpg"
          className="h-[30rem] w-[35rem] rounded-3xl"
        />
        <div className="py-7">
          <h2 className=" mb-2 w-[17rem] border-b-2 border-navy py-3 font-playfair text-4xl font-bold text-navy">
            {t("mission.heading")}
          </h2>
          <h3 className=" w-[27rem] py-3 font-playfair text-3xl font-bold text-navy">
            {t("mission.subheading")}
          </h3>

          <p className="text-md w-[28rem] py-4 font-semibold text-gray-600">
            {t("mission.description")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
