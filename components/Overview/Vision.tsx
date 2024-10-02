import React from "react";
import "./style.scss";

const Vission = () => {
  return (
    <section className="mt-[1.4rem] px-[7rem]  ">
      <div className="flex gap-[6rem] rounded-3xl   px-[5rem] py-[3rem]">
        <div className="py-7">
          <h2 className=" mb-2 w-[17rem] border-b-2 border-navy py-3 font-playfair text-4xl font-bold text-black">
            Our Vision
          </h2>
          <h3 className=" w-[30rem] py-3 font-playfair text-3xl font-bold text-navy">
            Leading the future with seamless tech solutions
          </h3>

          <p className="text-md w-[28rem] py-4 font-semibold text-gray-600">
            At Stackmentalist, our vision is to be a global leader in technology
            innovation, empowering organizations of all sizes to thrive in the
            digital era. We aspire to create a world where technology seamlessly
            integrates with every aspect of life and business, driving progress,
            innovation, and sustainable growth. By continuously pushing the
            boundaries of possibility, we aim to shape a future where every
            business has the tools to excel in an ever-evolving technological
            landscape.
          </p>
        </div>
        <img
          src="/images/overview/vission.jpg"
          className="  ml-9 h-[30rem] w-[35rem] rounded-3xl bg-cover"
        />
      </div>
    </section>
  );
};

export default Vission;
