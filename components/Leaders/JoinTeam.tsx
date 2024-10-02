import React from "react";
import "./style.scss";
import Link from "next/link";

const JoinTeam = () => {
  return (
    <section className="  relative   my-7 px-[6rem] py-[4rem]  ">
      <img
        src="/images/business-7745315.svg"
        alt=""
        className=" absolute right-[5rem]  top-[-4.64rem] h-[32rem]  "
      />
      <div className="w-[62rem]">
        <h2 className="mb-9 font-playfair text-5xl font-bold text-navy ">
          Join Our Team
        </h2>
        <p className="mb-6 pb-6 text-lg text-gray-700">
          At StackMentalist, we are always looking for talented and passionate
          individuals who want to make a difference. Our team thrives on
          collaboration, innovation, and a shared commitment to excellence.
        </p>

        <Link
          href="/career"
          className="  rounded-md  bg-navy  px-9 py-5 text-white transition-colors hover:bg-[#0b1c35]"
        >
          View Open Positions
        </Link>
      </div>
    </section>
  );
};

export default JoinTeam;
