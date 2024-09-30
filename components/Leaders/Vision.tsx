import React from "react";
import "./style.scss";

const Vision = () => {
  return (
    <section className="vision relative overflow-hidden">
      {/* Video Background */}
      <video
        src="/videos/buisnes.mp4"
        autoPlay
        loop
        muted
        className="absolute left-0 top-0 h-full w-full object-cover"
      ></video>

      {/* Overlay for text visibility */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="container relative z-10 mx-auto px-6 py-16 text-center text-white">
        {/* Vision Heading */}
        <h2 className="mb-6 font-playfair text-5xl font-bold leading-3 text-navy">
          A Vision for the Future
        </h2>

        {/* Vision Short Description */}
        <p className="mx-auto mb-12 max-w-2xl py-6 text-lg  ">
          At StackMentalist, we are driven by innovation, excellence, and a
          vision to lead the next wave of technological transformation. Our
          journey is fueled by an unwavering commitment to empowering businesses
          and building a sustainable future.
        </p>

        {/* Interactive Cards with Future Goals */}
        <div className="vision-cards grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="transform rounded-lg bg-white p-8 text-[#14213d] shadow-lg transition-transform hover:scale-105">
            <h3 className="mb-4 text-2xl font-semibold">Innovation & Growth</h3>
            <p className="text-gray-700">
              We aim to continuously innovate and expand our technological
              solutions, leading the industry in the digital age.
            </p>
          </div>

          {/* Card 2 */}
          <div className="transform rounded-lg bg-white p-8 text-[#14213d] shadow-lg transition-transform hover:scale-105">
            <h3 className="mb-4 text-2xl font-semibold">Sustainability</h3>
            <p className="text-gray-700">
              Our vision includes a sustainable future where technology works
              hand-in-hand with environmental responsibility.
            </p>
          </div>

          {/* Card 3 */}
          <div className="transform rounded-lg bg-white p-8 text-[#14213d] shadow-lg transition-transform hover:scale-105">
            <h3 className="mb-4 text-2xl font-semibold">Empowerment</h3>
            <p className="text-gray-700">
              We are committed to empowering businesses and individuals with
              cutting-edge tools and solutions that drive success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
