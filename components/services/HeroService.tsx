import React from "react";

const HeroService = () => {
  return (
    <section className="relative z-1  ">
      <div className="relative z-10 h-screen pl-[10rem] pt-[10rem]">
        <h1 className="  w-[35rem] py-4 font-playfair text-5xl font-bold leading-[4rem] tracking-wide text-navy">
          We Are{" "}
          <span className=" font-playfair    text-[#fca311]">
            {" "}
            Problem Solvers
          </span>{" "}
          in the Digital Age
        </h1>
        <p className="w-[37rem] py-2 text-black">
          In a world where technology evolves at lightning speed, we stand at
          the forefront of digital innovation. Our team of expert problem
          solvers tackles complex challenges across app development, cloud
          infrastructure, data science, IoT, and cybersecurity. We don't just
          provide services; we craft tailored solutions that drive your business
          forward, turning technological hurdles into opportunities for growth
          and success.
        </p>
        <button className="mt-10 rounded-lg bg-navy px-6 py-4 text-lg tracking-wide text-white">
          Let’s Work Together
        </button>
      </div>
    </section>
  );
};

export default HeroService;
