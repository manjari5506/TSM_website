import React from "react";
import "./style.scss";

const Mission = () => {
  return (
    <section className="mt-[1.2rem] px-[7rem]  ">
      <div className="flex gap-[6rem] rounded-3xl bg-[#f5f5f5] px-[5rem] py-[3rem]">
        <img
          src="/images/overview/mission.jpg"
          className="h-[30rem] w-[35rem] rounded-3xl"
        />
        <div className="py-7">
          <h2 className=" mb-2 w-[17rem] border-b-2 border-navy py-3 font-playfair text-4xl font-bold text-navy">
            Our Mission
          </h2>
          <h3 className=" w-[27rem] py-3 font-playfair text-3xl font-bold text-navy">
            Innovating technology for a future-ready world
          </h3>

          <p className="text-md w-[28rem] py-4 font-semibold text-gray-600">
            At Stackmentalist, our mission is to empower businesses with
            innovative, scalable, and future-ready technology solutions. We are
            committed to pushing the boundaries of what's possible across every
            industry, leveraging our deep expertise in cutting-edge
            technologies. Our goal is to drive digital transformation, foster
            innovation, and deliver solutions that help our clients achieve
            their strategic vision while embracing the rapid evolution of the
            tech landscape.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
