"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import "./Hero.scss";

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 0,
      logo: "/images/brand/partner-1.png", // Add the path for your logo image
      title: "App Development (Web/Mobile)",
      description: "Frontend, Backend",
    },
    {
      id: 1,
      logo: "/images/brand/partner-1.png",
      title: "Cyber Security",
      description: "Full Stack Development",
    },
    {
      id: 2,
      logo: "/images/brand/partner-1.png",
      title: "Data Science (AI/ML, Web Scraping)",
      description: "API Integration",
    },
    {
      id: 3,
      logo: "/images/brand/partner-1.png",
      title: "Cloud and DevOps",
      description: "Web Development",
    },
    {
      id: 4,
      logo: "/images/brand/partner-2.png",
      title: "IOT and Automation",
      description: "DevOps",
    },
    {
      id: 5,
      logo: "/images/brand/partner-1.png",
      title: "System Design",
      description: "DevOps",
    },
    {
      id: 6,
      logo: "/images/brand/partner-2.png",
      title: "Big Data",
      description: "DevOps",
    },
    {
      id: 7,
      logo: "/images/brand/partner-1.png",
      title: "UI/UX",
      description: "DevOps",
    },
    {
      id: 8,
      logo: "/images/brand/partner-2.png",
      title: "IOT and Automation",
      description: "DevOps",
    },
  ];

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <>
      <section className="hero-section overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <video
          className="video-box absolute h-full object-cover "
          src="/images/hero-video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="py-100 mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center lg:gap-5 xl:gap-32.5">
            <div className="animate_right hidden md:w-1/2 lg:block">
              {/* Carousel Container */}
              <div className="relative flex h-full flex-col items-center justify-center transition-all duration-700 ease-in-out">
                {cards.map((card, index) => (
                  <div
                    key={card.id}
                    className={`carousel-hero absolute mb-20 flex w-4/5 items-center justify-between rounded-lg border-2 border-blue-700 bg-white p-4 shadow-lg transition-transform duration-700 ease-in-out ${
                      index === activeIndex
                        ? "scale-120 opacity-100"
                        : index ===
                            (activeIndex - 1 + cards.length) % cards.length ||
                          index === (activeIndex + 1) % cards.length
                        ? "scale-100 opacity-50 "
                        : "scale-100 opacity-50"
                    }`}
                    style={{
                      height: "130px", // Adjusting the height to 80% of the container
                      transform: `translateY(${
                        ((index - activeIndex + cards.length) % cards.length) *
                        100
                      }%)`,
                    }}
                  >
                    {/* Left section for the logo */}
                    <div className="flex w-1/5 items-center">
                      <img
                        src={card.logo}
                        alt="Logo"
                        className="h-auto w-full"
                      />
                    </div>
                    {/* Right section for title and description */}
                    <div className="w-3/5 pl-4 text-left">
                      <h2 className="text-xl font-bold text-blue-600">
                        {card.title}
                      </h2>
                      <p className="text-sm text-gray-600">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="md:w-1/2">
              <h1 className="mb-5 pr-16 font-playfair text-4xl font-bold text-navy xl:text-hero">
                Creativity Meets Technology, Innovation Happens
              </h1>
              <p className="change-color font-kodchasan text-2xl font-semibold text-navy">
                A Visionary Company Committed To Crafting and Delivering
                Exceptional Software Solutions.
                <br></br>
                <br></br>
                Our mission is to empower businesses by providing seamless and
                efficient software that drives growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
