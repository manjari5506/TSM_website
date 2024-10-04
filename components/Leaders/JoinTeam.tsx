import React from "react";
import "./style.scss";
import Link from "next/link";
import { useTranslations } from "next-intl";

const JoinTeam = () => {
  const t = useTranslations("leaderpage.jointeam");
  return (
    <section className="  relative    mt-[6rem]   px-[6rem] pb-[2rem] pt-[3rem]  ">
      <div className="absolute right-[3rem] top-[-8rem]">
        <img
          src="/images/business-7745315.svg"
          alt=""
          className="   h-[32rem]  bg-cover "
        />
      </div>
      <div className="w-[62rem]">
        <h2 className="mb-9 font-playfair text-5xl font-bold text-navy ">
          {t("heading")}
        </h2>
        <p className="text-md mb-6 w-[50rem] pb-6 text-gray-700">
          {t("subheading")}
        </p>

        <Link
          href="/career"
          className="  text-md rounded-md  bg-navy  px-9 py-3 text-white transition-colors hover:bg-[#0b1c35]"
        >
          {t("btn")}
        </Link>
      </div>
    </section>
  );
};

export default JoinTeam;
