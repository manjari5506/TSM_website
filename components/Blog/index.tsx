import React from "react";
import SectionHeader from "../Common/SectionHeader";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
// import Link from "next/link";
import "./Blogs.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Blog = () => {
  const t = useTranslations("homepage");
  return (
    <section className="blog-box py-3 lg:py-3 xl:py-3">
      <div className="mx-auto mb-30 max-w-c-1315">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: "", // Use translation for the title
              subtitle: t("blogs.heading"), // Use translation for the subtitle
              description: t("blogs.description"), // Use translation for the description if needed
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mb-20 mt-15 mt-30 max-w-c-1280 px-0">
        <div className="grid grid-cols-1 gap-0 px-5 md:grid-cols-2 lg:grid-cols-3">
          {BlogData.slice(0, 3).map((blog, key) => (
            <BlogItem blog={blog} key={key} />
          ))}
        </div>
      </div>
      <Link
        href="/blog"
        className="mx-auto mb-10 mt-5 flex w-40 items-center justify-center rounded-full bg-white px-2 py-2 text-regular text-navy duration-300 ease-in-out hover:scale-110 hover:bg-navy hover:text-white"
      >
        {t("blogs.btn")}
      </Link>
    </section>
  );
};

export default Blog;
