import Offerings from "@/components/services/big-data/Offerings-card/Offerings";
import {
  systemOfferings,
  uiOfferings,
} from "@/components/services/big-data/Offerings-card/offeringsData";
import ReachOut from "@/components/services/big-data/ReachOut-card/ReachOut";
import TechStack from "@/components/services/common/tech-stack/TechStack";
import Cards from "@/components/services/IotComponents/Cards";
import React from "react";

const page = () => {
  return (
    <section>
      <div className=" bg-beige pb-10 ">
        <div className="relative  mb-[5rem] flex flex-row">
          <div className="relative z-1 w-[50rem] px-[5rem] pt-[15rem] text-center">
            <h1 className="hero-heading py-2 text-center font-playfair text-4xl font-bold">
              Building Scalable and Robust Systems for the Future
            </h1>
            <p className="text-md py-3 text-navy ">
              Take your business to the next level by hiring our expert system
              architects and leveraging our comprehensive system design
              services. Our solutions ensure scalability, performance, and
              reliability to meet the evolving demands of your business.
            </p>
            {/* <button className="mt-5 rounded-3xl bg-navy px-9 py-3 text-white   hover:opacity-80">
      Contact Us
    </button> */}
          </div>
          <img src="/images/cloud-bg.png" className="mr-30 mt-40" />
        </div>
      </div>
      <Offerings offerings={systemOfferings} />
      <TechStack />

      <section className="px-[6rem]  ">
        <div className="  py-5">
          <h1 className="w-[40rem] font-playfair text-3xl font-bold tracking-wide text-navy ">
            Why Choose Stackmentalist for System Design?
          </h1>
          <p className="text-md w-[40rem] py-5 font-semibold text-gray-600 ">
            We create robust, scalable, and secure systems that align with your
            business goals and allow for future growth. By leveraging modern
            technologies, we ensure your system architecture is built to last
            and adapt to industry changes.
          </p>
        </div>
        <Cards />
      </section>

      <ReachOut />
    </section>
  );
};

export default page;
