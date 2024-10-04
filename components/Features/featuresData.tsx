// src/data/featuresData.ts
import { Feature } from "@/types/feature";
import AppDevelopmentSVG from "@/components/FeaturesSVG/AppDevelopmentSVG";
import DataScienceSVG from "@/components/FeaturesSVG/DataScienceSVG";
import CloudDevOpsSVG from "@/components/FeaturesSVG/CloudDevOpsSVG";
import IoTAutomationSVG from "@/components/FeaturesSVG/IoTAutomationSVG";
import WordPressDevelopmentSVG from "@/components/FeaturesSVG/WordPressDevelopmentSVG";
import BigDataSVG from "@/components/FeaturesSVG/BigDataSVG";
import UIUXSVG from "@/components/FeaturesSVG/UIUXSVG";
import CyberSecuritySVG from "@/components/FeaturesSVG/CyberSecuritySVG";
import SystemDesignSVG from "@/components/FeaturesSVG/SystemDesignSVG";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <AppDevelopmentSVG />,
    title: "App Development",
    description:
      "Crafting innovative mobile and web applications tailored to user needs.",
  },
  {
    id: 2,
    icon: <DataScienceSVG />,
    title: "Data Science",
    description:
      "Turning raw data into actionable insights through analysis and machine learning.",
  },
  {
    id: 3,
    icon: <CloudDevOpsSVG />,
    title: "Cloud & DevOps",
    description:
      "Streamlining operations with scalable cloud solutions and efficient deployment practices.",
  },
  {
    id: 4,
    icon: <IoTAutomationSVG />,
    title: "IOT & Automation",
    description:
      "Connecting devices for smart automation and seamless interconnectivity.",
  },
  {
    id: 5,
    icon: <WordPressDevelopmentSVG />,
    title: "WordPress Development",
    description:
      "Design and build websites using the popular open-source content management system (CMS).",
  },
  {
    id: 6,
    icon: <BigDataSVG />,
    title: "Big Data",
    description:
      "Harnessing vast data sets to drive informed business decisions and innovation.",
  },
  {
    id: 7,
    icon: <UIUXSVG />,
    title: "UI/UX",
    description:
      "Designing intuitive and engaging interfaces that enhance user experiences.",
  },
  {
    id: 8,
    icon: <CyberSecuritySVG />,
    title: "Cyber Security",
    description:
      "Safeguarding digital assets with advanced security protocols and solutions.",
  },
  {
    id: 9,
    icon: <SystemDesignSVG />,
    title: "System Design",
    description:
      "Building robust, scalable architectures for complex software systems.",
  },
];

export default featuresData;
