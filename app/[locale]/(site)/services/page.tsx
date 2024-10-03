import HeroService from "@/components/services/HeroService";
import Services from "@/components/services/Services";

import Link from "next/link";

export default function ServicesPage() {
  return (
    <>
      <HeroService />
      <Services />
    </>
  );
}
