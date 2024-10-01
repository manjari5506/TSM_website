"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";
import "./Brand.scss"
import { Banner } from "../Banner";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className=" bg-white py-11">
        <div className="mx-auto max-w-c-1390 px-6">
          <div className="grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29">
            {brandData.map((brand, key) => (
              <Banner images={brand.image} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
