import React from "react";
import "./style.scss";
import Hero from "@/components/Overview/HeroOverview";
import Journey from "@/components/Overview/Journey";
import Mission from "@/components/Overview/Mission";
import Vission from "@/components/Overview/Vission";

const page = () => {
  return (
    <main>
      <Hero />
      <Journey />
      <Mission />
      <Vission />
    </main>
  );
};

export default page;
