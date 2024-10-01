"use client";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { Typography } from "antd";
import Image from "next/image";

import "./style.scss";
import {
  FacebookFilled,
  InstagramFilled,
  LinkedinFilled,
} from "@ant-design/icons";

const { Text } = Typography;
const CardComponent = ({ title, description, img }) => {
  return (
    <Card hoverable className="team__cards relative rounded-xl shadow-2xl  ">
      <div className="bg-custom absolute  top-0 h-[7.8rem] w-full rounded-xl ">
        {" "}
      </div>
      <div className="relative  mb-6 h-[7rem]   w-[7rem] overflow-hidden  rounded-full">
        <Image
          src={img}
          alt="pfp"
          width={60}
          height={60}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>

      <Text className="text-lg font-bold text-navy">{title}</Text>
      <Text className="py-4 font-semibold text-[#4A4A4A]">{description}</Text>
    </Card>
  );
};

export default CardComponent;
