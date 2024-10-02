"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import "./Footer.scss";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa"

const Footer = () => {
  return (
    <>
      <footer className="border-t border-stroke bg-white">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Footer Top --> */}
          <div className="py-10 lg:pt-15">
            <div className="flex flex-wrap gap-2 lg:gap-0">
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
                className="animate_top mr-10"
              >
                <a href="/" className="relative">
                  <Image
                    width={170}
                    height={170}
                    src="/images/logo/logo.svg"
                    alt="Logo"
                    className="dark:hidden"
                  />
                </a>
              </motion.div>

              <div className="flex w-full flex-col gap-50 md:flex-row md:justify-between md:gap-0  xl:w-9/12 py-0 font-kodchasan">
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
                  className="animate_top"
                >

                  <ul>
                    <li>
                      <a
                        href="/overview"
                        className="mb-3 px-4 py-2 inline-block hover:text-white hover:bg-navy rounded-2xl"
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services"
                        className="mb-3 px-4 py-2 inline-block hover:text-white hover:bg-navy rounded-2xl"
                      >
                        Services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/blog"
                        className="mb-3 px-4 py-2 inline-block hover:text-white hover:bg-navy rounded-2xl"
                      >
                        Blogs
                      </a>
                    </li>
                  </ul>
                </motion.div>
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
                  className="animate_top"
                >
                  <ul>
                    <li>
                      <a
                        href="/career"
                        className="mb-3 px-4 py-2 inline-block hover:text-white hover:bg-navy rounded-2xl"
                      >
                        Careers
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 px-4 py-2 inline-block hover:text-white hover:bg-navy rounded-2xl"
                      >
                        Get Quotes
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="mb-3 px-4 py-2 inline-block hover:text-white hover:bg-navy rounded-2xl"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </motion.div>
                <div className="hidden lg:block border-l border-gray-300 h-auto mx-20"></div>
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
                  className="animate_top w-full lg:w-1/2 gap-20 flex justify-between"
                >
                  <div className="w-2/3">
                    <h4 className="text-2xl font-semibold text-navy w-30">Address</h4>
                    <ul className="mt-4">
                      <li className="flex items-center mb-2">
                        <FaMapMarkerAlt className="text-navy mr-2" />
                        <a href="https://www.google.com/maps/place/Hinjawadi,+Pune,+Pimpri-Chinchwad,+Maharashtra/@18.5993813,73.6348173,12z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bbc048041bef:0xd0c9eb5ac3c3dee5!8m2!3d18.5912716!4d73.738909!16s%2Fm%2F02qwznq?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="hover:text-navy">
                          Hinjewadi, Pune, Maharashtra
                        </a>
                      </li>
                      <li className="flex items-center mb-2">
                        <FaEnvelope className="text-navy mr-2" />
                        <a href="mailto:work@stackmentalist.com" className="hover:text-navy">
                          work@stackmentalist.com
                        </a>
                      </li>
                      <li className="flex items-center">
                        <FaPhoneAlt className="text-navy mr-2" />
                        <a href="tel:+123456789" className="hover:text-navy">
                          +91 7771810723
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="1/3">
                    <Image
                      width={350}
                      height={300}
                      src="/images/footer/mail-doodle.svg"
                      alt="Connectivity Doodle"
                      className="doodle-image"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          {/* <!-- Footer Top --> */}

          {/* <!-- Footer Bottom --> */}
          <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
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
              className="animate_top"
            >
              <ul className="flex items-center gap-8">
                <li>
                  <a href="#" className="hover:text-navy">
                    Cookies Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-navy">
                    Legal Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-navy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </motion.div>

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
              className="animate_top"
            >
              <p>
                &copy; Stackmentalist Ventures Pvt. Ltd.
              </p>
            </motion.div>

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
              className="animate_top"
            >
              <ul className="flex items-center gap-5">
                <li>
                  <a href="#" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-navy"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1499)">
                        <path
                          d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1499">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/the-stackmentalist/posts/?feedView=all" aria-label="social icon">
                    <svg
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-navy"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_48_1505)">
                        <path
                          d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                          fill=""
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_48_1505">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/StackMentalist" aria-label="social icon">
                    <img
                      src="images/footer/twitter_11823292.png" 
                      alt="LinkedIn Icon" 
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-navy opacity-20 hover:opacity-100"
                      width="18" 
                      height="18" 
                    />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/the_stackmentalist/?igsh=MWxubjJicTY5dDBiZw%3D%3D" aria-label="social icon">
                    <img
                      src="images/footer/instagram_2111491.png" 
                      alt="LinkedIn Icon" 
                      className="fill-[#D1D8E0] transition-all duration-300 hover:fill-navy opacity-20 hover:opacity-100"
                      width="24" 
                      height="24" 
                    />
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
          {/* <!-- Footer Bottom --> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
