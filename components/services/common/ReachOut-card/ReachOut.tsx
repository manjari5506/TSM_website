import React from "react";
import "./styles.scss";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

type ReachOutProps = {
  heading: string;
  subheading: string;
  image: string;
  type: string;
};

const ReachOut = ({ heading, subheading, image, type }: ReachOutProps) => {
  const t = useTranslations(type);
  return (
    <section className="reachout-section py-16">
      <div className="container mx-auto flex h-[330px] w-[80%] items-center justify-between overflow-hidden rounded-lg bg-white shadow-lg">
        <div className="flex w-2/3 flex-col justify-center pl-12">
          <h2 className="mb-4 text-3xl font-bold text-navy">
            {t("reachout.heading")}
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            {t("reachout.subheading")}
          </p>
          <Link href={"/contact"}>
            <button className="contact-btn bg-navy px-6 py-3 text-white transition-opacity hover:opacity-80">
              {t("reachout.btn")}
            </button>
          </Link>
        </div>

        <div className="relative h-full w-1/3">
          <img
            src={image}
            alt="Contact Us"
            className="h-full w-full object-cover"
          />
          <div className="fade-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
