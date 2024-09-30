"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = [
    {
      id: 0,
      title: "node.js, React",
      description: "frontend, backend",
    },
    {
      id: 1,
      title: "node.js, React",
      description: "frontend, backend",
    },
    {
      id: 2,
      title: "node.js, React",
      description: "frontend, backend",
    },
    {
      id: 3,
      title: "node.js, React",
      description: "frontend, backend",
    },
    {
      id: 4,
      title: "node.js, React",
      description: "frontend, backend",
    }
  ]

  // Auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [cards.length]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 py-100">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">

            <div className="animate_right hidden md:w-1/2 lg:block">
              {/* <div className="relative w-full h-96 flex flex-col items-center justify-center overflow-hidden"> */}
                {/* Carousel Container */}
                <div className="relative h-full flex flex-col justify-center items-center transition-all duration-700 ease-in-out">
                  {cards.map((card, index) => (
                    <div
                      key={card.id}
                      className={`absolute w-full flex justify-center transition-transform duration-700 ease-in-out border-slate-50 ${index === activeIndex
                          ? "scale-110 opacity-100 z-20"
                          : index === (activeIndex - 1 + cards.length) % cards.length ||
                            index === (activeIndex + 1) % cards.length
                            ? "scale-90 opacity-50 z-10"
                            : "opacity-0"
                        }`}
                      style={{
                        transform: `translateY(${(index - activeIndex + cards.length) % cards.length * 100
                          }%)`,
                      }}
                    >
                      <h1>{card.id}</h1>
                      <h2 >{card.title}</h2><br></br>
                      <p>{card.description}</p>
                    </div>
                  ))}
                </div>
              {/* </div> */}
            </div>
            <div className=" md:w-1/2">
              <h1 className="mb-5 pr-16 text-2xl font-bold text-black dark:text-white xl:text-hero ">Creativity Meets Technology, Innovation Happens</h1>
              <p className="text-xl text-navy">
                A Visionary Company Commeted To Crafting and Delivering Exceptional Software Solutions.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
