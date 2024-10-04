"use client";
import { motion } from "framer-motion";
import "./Common.scss";

type HeaderInfo = {
  title: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },

          visible: {
            opacity: 1,
            y: 50,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="animate_top text-left"
      >
        <h2 className="mx-10 my-10 mb-4 font-playfair text-3xl font-bold text-navy dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
          {subtitle}
        </h2>
        <p className="change-color  mx-10 my-2 font-kodchasan text-xl font-semibold md:w-4/5 lg:w-3/5 xl:w-[46%]">
          {description}
        </p>
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  );
};

export default SectionHeader;
