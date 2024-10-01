import React from "react";
import "./style.scss";
import Hero from "@/components/Overview/HeroOverview";
import Journey from "@/components/Overview/Journey";

const page = () => {
  return (
    <main>
      <Hero />
      <Journey />
    </main>
  );
};

export default page;
