import React from "react";
import "./style.scss";

const JoinTeam = () => {
  return (
    <section className="join-team relative bg-[#f7f9fc] py-[7rem]">
      <div className="z-100 container relative mx-auto flex flex-col overflow-hidden">
        <div className="relative z-10 mb-8 w-full text-left md:mb-0 md:w-1/2">
          <h2 className="mb-4 text-5xl font-bold text-[#14213d]">
            Join Our Team
          </h2>
          <p className="mb-6 text-lg text-gray-700">
            At StackMentalist, we are always looking for talented and passionate
            individuals who want to make a difference. Our team thrives on
            collaboration, innovation, and a shared commitment to excellence.
          </p>
          <a
            href="/careers"
            className="rounded-lg bg-[#14213d] px-6 py-3 text-white transition-colors hover:bg-[#0b1c35]"
          >
            View Open Positions
          </a>
        </div>
      </div>
      <img
        src="/images/doodle1.jpg"
        alt=""
        className="absolute left-0 top-0 h-full w-full object-cover"
      />
    </section>
  );
};

export default JoinTeam;
