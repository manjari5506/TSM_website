import React from "react";
import "./style.scss";
import CardComponent from "../Card/Card";

const Philosophy = () => {
  return (
    <section className="leadership-philosophy animate-slideUp relative bg-white py-20">
      {/* Parallax Background */}
      <div
        className="parallax-bg absolute left-0 top-0 h-full w-full bg-cover bg-fixed"
        style={{
          backgroundImage: "url('/images/leadership-bg.jpg')",
        }}
      ></div>

      {/* Content Section */}
      <div className="container relative mx-auto px-6 text-center">
        {/* Updated Heading */}
        <div className="px-7 py-5">
          <h2 className="animate-fadeIn mb-6 font-playfair text-5xl font-extrabold text-navy">
            Empowering Leadership for a Dynamic Future
          </h2>

          {/* Updated Subheading */}
          <p className="animate-slideUp  py-2 font-kodchasan text-lg italic text-gray-600">
            Our leadership philosophy is centered on fostering innovation,
            integrity, and collaboration. We believe in empowering individuals
            to lead with purpose, adapt to change, and inspire growth, creating
            a culture of excellence that drives success.
          </p>
        </div>
        <div className="flex items-center justify-center gap-9 py-9 max-sm:flex-wrap">
          <CardComponent
            title="Innovation"
            description=" We encourage leaders to think beyond the present and craft
        innovative solutions for tomorrow's challenges. "
            img="/images/inn1.jpeg"
          />
          <CardComponent
            title="Integrity"
            description="  Leadership grounded in honesty and accountability, guiding teams
        with trust and respect."
            img="/images/integrity.jpg"
          />
          <CardComponent
            title="Collaboration"
            description="  Empowering teams to work together, fostering creativity and shared
        success in all endeavors."
            img="/images/collaboration.jpeg"
          />
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
