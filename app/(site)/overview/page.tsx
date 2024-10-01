import React from "react";
import "./style.scss";
import Hero from "@/components/Overview/HeroOverview";
import Journey from "@/components/Overview/Journey";
import Mission from "@/components/Overview/Mission";
import Vision from "@/components/Overview/Vision";
import CoreValues from "@/components/Overview/CoreValue";

const page = () => {
  return (
    <main>
      <Hero />
      <Journey />
      <Mission />
      <Vision />
      <CoreValues />
    </main>
  );
};

export default page;
