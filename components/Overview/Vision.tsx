import React from "react";
import "./style.scss";
import { useTranslations } from "next-intl";

const Vission = () => {
  const t = useTranslations("overviewpage.vission");
  return (
    <section className="mt-[1.4rem] px-[7rem]  ">
      <div className="flex gap-[6rem] rounded-3xl   px-[5rem] py-[3rem]">
        <div className="py-7">
          <h2 className=" mb-2 w-[17rem] border-b-2 border-navy py-3 font-playfair text-4xl font-bold text-black">
            {t("heading")}
          </h2>
          <h3 className=" w-[30rem] py-3 font-playfair text-3xl font-bold text-navy">
            {t("subheading")}
          </h3>

          <p className="text-md w-[28rem] py-4 font-semibold text-gray-600">
            {t("description")}
          </p>
        </div>
        <img
          src="/images/overview/vission.jpg"
          className="  ml-9 h-[30rem] w-[35rem] rounded-3xl bg-cover"
        />
      </div>
    </section>
  );
};

export default Vission;
