"use client";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import AppDevelopment from "./services-cards/AppDevelopmentCard";
import DataScience from "./services-cards/DataScienceCard";
import CloudCard from "./services-cards/CloudCard";
import IotCard from "./services-cards/IotCard";
import SystemDesignCard from "./services-cards/SystemDesignCard";
import UiCard from "./services-cards/UiCard";
import CyberCard from "./services-cards/CyberCard";
import WordPressDevelopment from "./services-cards/WordPressDevelopmentCard";
import BigData from "./services-cards/BigDataCard";

export default function Home() {
  // const [activeId, setActiveId] = useState("");

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       entries.forEach((entry) => {
  //         const id = entry.target.getAttribute("id");
  //         if (entry.isIntersecting) {
  //           setActiveId(id);
  //         }
  //       });
  //     },
  //     { threshold: 0.5 } // Adjust threshold as needed
  //   );

  //   const sections = document.querySelectorAll('[id^="section"]'); // Select all sections
  //   sections.forEach((section) => {
  //     observer.observe(section);
  //   });

  //   return () => {
  //     sections.forEach((section) => {
  //       observer.unobserve(section);
  //     });
  //   };
  // }, []);

  return (
    <section className="py-3">
      <h1 className="pb-15 pt-3 text-center font-playfair text-5xl font-bold text-navy">
        Our Services.
      </h1>
      <div className="relative flex gap-[1rem]   ">
        {/* Sidebar Component */}

        <Sidebar />

        {/* Main Content with Sections */}
        <div className="flex flex-col justify-center">
          <AppDevelopment />
          <DataScience />
          <CloudCard />
          <IotCard />
          <WordPressDevelopment />
          <BigData />
          <UiCard />
          <CyberCard />
          <SystemDesignCard />
          {/* {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="relative z-10 h-screen   "
          >
            
          </div>
        ))} */}
        </div>
      </div>
    </section>
  );
}
