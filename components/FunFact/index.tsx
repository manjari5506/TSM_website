"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import "./Funfacts.scss";

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="funfact-background relative">
        <video
          className="video-box absolute h-full object-cover "
          src="/images/hero-video.mp4"
          autoPlay
          loop
          muted
        ></video>
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg py-22.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-27.5">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },

              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="my-12 mb-20 py-15 font-playfair text-5xl font-bold text-navy">
              Creativity Meets Technology,
              <br></br> Innovation Happens
            </h2>
            <p className="change-color font-kodchasan text-xl font-semibold text-navy">
              At Stackmentalist, we specialize in creating exceptional software
              solutions tailored to empower businesses. Our mission is to
              deliver seamless and efficient software that accelerates growth
              and success
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 lg:gap-42.5">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            ></motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            ></motion.div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
              className="animate_top text-center"
            ></motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
