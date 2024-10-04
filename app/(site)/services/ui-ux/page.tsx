import React from "react";
import Link from "next/link";
import Cards from "@/components/services/common/process-card/Cards";
import Offerings from "@/components/services/common/Offerings-card/Offerings";
import { uiuxOfferings } from "@/components/services/common/Offerings-card/offeringsData";
import ReachOut from "@/components/services/common/ReachOut-card/ReachOut";
import TechStack from "@/components/services/common/tech-stack/TechStack";
import { uidetails } from "@/components/services/common/process-card/CardsData";
import { uiux } from "@/components/services/common/ReachOut-card/ReachOutData";

const page = () => {
  return (
    <section className="   ">
      <div className="relative  mb-[5rem]">
        <div className="relative z-1 w-[50rem] px-[10rem] pt-[12rem] ">
          <h1 className="inline-block bg-gradient-to-r from-[#c0392b] to-[#8e44ad] bg-clip-text py-3 font-playfair text-5xl font-bold text-transparent">
          Transforming Ideas into Intuitive Designs
          </h1>
          <p className="pt-4 text-md ">
          We bridge the gap between creativity and usability, transforming your vision into intuitive, user-centered designs that drive engagement and deliver seamless experiences.
          </p>
          {/* <button className="mt-9 rounded-3xl bg-navy bg-gradient-to-r from-[#c0392b] to-[#8e44ad] px-9 py-3 text-white   hover:opacity-80">
            <Link href="/career">Contact Us</Link>
          </button> */}
        </div>
        <img
          src="/images/ui-ux/ui-hero.png"
          className=" absolute right-[9rem] top-[8rem]   w-[40rem]  bg-cover"
        />
      </div>
      
     <Offerings offerings={uiuxOfferings}/>
     <TechStack />
   
      <section className="px-[6rem]  ">
        {/* <div className="  py-5">
          <h1 className="w-[40rem] font-playfair text-3xl font-bold tracking-wide text-navy ">
            Why StackMentalist Is Best For UI/UX Designing Services?
          </h1>
          <p className="text-md w-[40rem] py-5 font-semibold text-gray-600 ">
            Take your business to the next level by hiring our expert designers
            and leveraging our world-class UI/UX design services.
          </p>
        </div> */}
        <Cards details={uidetails}/>
      </section>

      <ReachOut 
        heading={uiux.heading} 
        subheading={uiux.subheading} 
        image={uiux.image} 
      />
      
      
    </section>
  );
};

export default page;
