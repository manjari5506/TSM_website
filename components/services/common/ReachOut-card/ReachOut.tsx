import React from "react";
import "./styles.scss";
import Link from "next/link";

type ReachOutProps = {
  heading: string;
  subheading: string;
  image: string;
};

const ReachOut = ({ heading, subheading, image }: ReachOutProps) => {
  return (
    <section className="reachout-section py-16">
      <div className="container mx-auto flex justify-between items-center w-[90%] h-[330px] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col justify-center pl-12 w-2/3">
          <h2 className="text-3xl font-bold text-navy mb-4">{heading}</h2>
          <p className="text-lg text-gray-700 mb-6">
            {subheading}
          </p>
          <Link href={"/contact"}>
            <button className="contact-btn bg-navy text-white px-6 py-3 hover:opacity-80 transition-opacity">
              Contact Us
            </button>
          </Link>
        </div>

        <div className="relative w-1/3 h-full">
          <img
            src={image}
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="fade-overlay"></div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
