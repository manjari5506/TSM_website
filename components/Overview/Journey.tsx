import React from "react";
import "./style.scss";
import { Timeline } from "antd";
import { ClockCircleOutlined } from "@ant-design/icons";

const Journey = () => {
  return (
    <section className=" z-100 relative flex flex-col items-center justify-center  px-[6rem] py-[2rem] text-center">
      <div className="w-[60rem] ">
        <h3 className=" py-2 font-playfair text-5xl font-bold text-navy">
          The Evolution of Leadership
        </h3>
        <p className="text-md py-6 text-center font-semibold text-gray-700">
          Discover the key moments that shaped our leadership approach, driven
          by innovation, resilience, and a vision for the future. This journey
          is a testament to our growth and commitment to excellence.
        </p>
      </div>
      <div className="relative pt-[4rem]">
        <Timeline
          mode="alternate"
          items={[
            {
              children: "Create a services site 2015-09-01",
            },
            {
              children: "Solve initial network problems 2015-09-01",
              color: "green",
            },
            {
              dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
              children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
            },
            {
              color: "red",
              children: "Network problems being solved 2015-09-01",
            },
            {
              children: "Create a services site 2015-09-01",
            },
            {
              dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
              children: "Technical testing 2015-09-01",
            },
          ]}
        />

        <div className="absolute bottom-0 left-8 top-0 w-0.5 bg-[#e5e5e5]"></div>
      </div>
    </section>
  );
};

export default Journey;
