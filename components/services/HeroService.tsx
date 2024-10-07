import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

import React from "react";

const HeroService = () => {
  const t = useTranslations("services");
  return (
    <section className="relative z-1  ">
      <div className="relative z-10 h-screen pl-[10rem] pt-[10rem]">
        <h1 className="  w-[35rem] py-4 font-playfair text-5xl font-bold leading-[4rem] tracking-wide text-navy">
          {t("heading.h1")}{" "}
          <span className=" font-playfair    text-[#fca311]">
            {" "}
            {t("heading.h2")}
          </span>{" "}
          {t("heading.h3")}
        </h1>
        <p className="w-[37rem] py-2 text-black">{t("subheading")}</p>
        <button className="mt-10 rounded-lg bg-navy px-6 py-4 text-lg tracking-wide text-white">
          <Link href="/contact">{t("link")}</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroService;
