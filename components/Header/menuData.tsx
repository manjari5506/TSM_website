import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 3,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Overview",
        newTab: false,
        path: "/Overview",
      },
      {
        id: 35,
        title: "Leaders",
        newTab: false,
        path: "/leaders",
      },
    ],
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "App Development",
        newTab: false,
        path: "/app-development",
      },
      {
        id: 35,
        title: "Data Science",
        newTab: false,
        path: "/data-science",
      },
      {
        id: 35,
        title: "Cloud & DevOps",
        newTab: false,
        path: "/cloud-devops",
      },
      {
        id: 35,
        title: "IOT & Automation",
        newTab: false,
        path: "/iot",
      },
      {
        id: 35,
        title: "System Design",
        newTab: false,
        path: "/system-design",
      },
      {
        id: 35,
        title: "Big Data",
        newTab: false,
        path: "/big-data",
      },
      {
        id: 35,
        title: "UI/UX",
        newTab: false,
        path: "/ui-ux",
      },
      {
        id: 35,
        title: "Cyber Security",
        newTab: false,
        path: "/cyber-security",
      },
    ],
  },
  {
    id: 2.1,
    title: "Careers",
    newTab: false,
    path: "/careers",
  },
  {
    id: 2.3,
    title: "Blogs",
    newTab: false,
    path: "/blogs",
  },
];

export default menuData;
