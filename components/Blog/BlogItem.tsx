"use client";
import { Blog } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import "./Blogs.scss";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { mainImage, title, metadata } = blog;

  return (
    <>
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
        className="blog-card rounded-lg bg-white p-4 pb-9 shadow-solid-10"
      >
        <Link href={`/blog/`} className="relative block aspect-[368/239]">
          <Image src={mainImage} alt={title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-navy cursor-pointer xl:text-itemtitle2">
              {`${title.slice(0, 40)}...`}
          </h3>
          <p className="line-clamp-3 hover:text-navy mb-5">{metadata}</p>
          <Link
              href="/blog/blog-details"
              className="flex items-center justify-center border rounded-full ml-20 w-40 bg-white px-2.5 py-1.5 text-regular text-navy duration-300 ease-in-out hover:scale-110 hover:bg-navy hover:text-white"
            >
              Read More
            </Link>
        </div>
      </motion.div>
    </>
  );
};

export default BlogItem;
