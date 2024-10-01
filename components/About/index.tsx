"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import "./About.scss";

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="overflow-hidden">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero font-playfair ">
                UNLIKE ANYTHING
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full font-playfair ">
                  YOU'VE EXPERIENCED  BEFORE
                </span>
              </h2>
              <p className="change-color text-xl font-semibold font-kodchasan">
                At StackMentalist, we're redefining what's possible. Our innovative approach, collaborative culture, and cutting-edge solutions set us apart from the rest.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20,
                },

                visible: {
                  opacity: 1,
                  x: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[990/550] md:block md:w-1/2"
            >
              <video
                className="w-full h-full object-cover rounded-lg"
                src="/images/dummy-video.mp4"
                //autoPlay
                controls
                muted
              >
              </video>
            </motion.div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
