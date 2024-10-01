import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import Link from "next/link";
import "./Blogs.scss"

const Blog = async () => {
  return (
    <section className="py-3 lg:py-3 xl:py-3 blog-box">
      <div className="mx-auto max-w-c-1315 mb-30">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: ``,
              subtitle: `Blogs`,
              description: `Stay ahead of the curve with our curated selection of articles that delve into the latest trends and innovations. Discover fresh perspectives and expert opinions that will inspire your next big idea.`,
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-0 mt-30 mb-20">
        <div className="grid grid-cols-1 gap-0 md:grid-cols-2 lg:grid-cols-3 px-5">
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
      <Link
        href="/blog"
        className="flex items-center justify-center rounded-full mx-auto w-40 bg-white text-navy mb-10 mt-5 px-2 py-2 text-regular duration-300 ease-in-out hover:scale-110 hover:bg-navy hover:text-white"
      >
        View All
      </Link>
    </section>
  );
};

export default Blog;
