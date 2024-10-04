"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { testimonialData } from "./testimonialData";
import "./Testimonial.scss";
import { useTranslations } from "next-intl";

const Testimonial = () => {
  const t = useTranslations("homepage");
  return (
    <>
      <section className="my-0 text-left md:px-[6rem]">
        <div className="  px-4  xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top text-left">
            <SectionHeader
              headerInfo={{
                title: "", // Use translation for the title
                subtitle: t("client.heading"), // Use translation for the subtitle
                description: t("client.subheading"), // Use translation for the description if needed
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 20,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 2, delay: 0.2 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-15 max-w-c-1235 px-4 md:px-8 xl:mt-20 xl:px-0"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 mb-20 pb-22.5">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              autoplay={{
                delay: 2500,
                disableOnInteraction: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2,
                },
              }}
            >
              {testimonialData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SingleTestimonial review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Testimonial;
