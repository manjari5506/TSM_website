"use client";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import AppDevelopment from "./services-cards/AppDevelopmentCard";
import DataScience from "./services-cards/DataScienceCard";
import CloudCard from "./services-cards/CloudCard";
import IotCard from "./services-cards/IotCard";
import SystemDesignCard from "./services-cards/SystemDesignCard";
import UiCard from "./services-cards/UiCard";
import CyberCard from "./services-cards/CyberCard";

export default function Home() {
  //   useEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           const id = entry.target.getAttribute("id");
  //           const menuItem = document.querySelector(`#menu-${id}`);

  //           if (entry.isIntersecting) {
  //             menuItem?.classList.add("active");
  //           } else {
  //             menuItem?.classList.remove("active");
  //           }
  //         });
  //       },
  //       { threshold: 0.5 },
  //     );

  //     services.forEach((service) => {
  //       const section = document.getElementById(service.id);
  //       if (section) observer.observe(section);
  //     });

  //     return () => {
  //       services.forEach((service) => {
  //         const section = document.getElementById(service.id);
  //         if (section) observer.unobserve(section);
  //       });
  //     };
  //   }, []);

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
          <SystemDesignCard />
          <UiCard />
          <CyberCard />
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
