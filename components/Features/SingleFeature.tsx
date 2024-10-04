import React from "react";
import { Feature } from "@/types/feature";
import Image from "next/image";
import { motion } from "framer-motion";
import "./Features.scss";
import { useTranslations } from "next-intl";

const SingleFeature = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => {
  const { icon, title, description } = feature;
  const t = useTranslations("homepage.services");
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10,
          },

          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top border-gray service-text z-40 rounded-lg border border-4 bg-white p-7.5 shadow-solid-4 transition-all hover:shadow-solid-8 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark xl:p-12.5"
      >
        <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-navy">
          {icon}
        </div>
        <h3 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
          {t(`cards.${index}.title`)}
        </h3>
        <p>{t(`cards.${index}.description`)}</p>
      </motion.div>
    </>
  );
};

export default SingleFeature;
