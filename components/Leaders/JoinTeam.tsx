import React from "react";
import "./style.scss";
import Link from "next/link";

const JoinTeam = () => {
  return (
    <section className="  relative    mt-[6rem]   px-[6rem] pb-[2rem] pt-[3rem]  ">
      <div className="absolute right-[3rem] top-[-8rem]">
        <img
          src="/images/business-7745315.svg"
          alt=""
          className="   h-[32rem]  bg-cover "
        />
      </div>
      <div className="w-[62rem]">
        <h2 className="mb-9 font-playfair text-5xl font-bold text-navy ">
          Join Our Team
        </h2>
        <p className="text-md mb-6 w-[50rem] pb-6 text-gray-700">
          At StackMentalist, we are always looking for talented and passionate
          individuals who want to make a difference. Our team thrives on
          collaboration, innovation, and a shared commitment to excellence.
        </p>

        <Link
          href="/career"
          className="  text-md rounded-md  bg-navy  px-9 py-3 text-white transition-colors hover:bg-[#0b1c35]"
        >
          View Open Positions
        </Link>
      </div>
    </section>
  );
};

export default JoinTeam;
