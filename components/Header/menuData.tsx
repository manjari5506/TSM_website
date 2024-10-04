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
        path: "/overview",
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
        path: "/services/app-development",
      },
      {
        id: 35,
        title: "Data Science",
        newTab: false,
        path: "/services/data-science",
      },
      {
        id: 35,
        title: "Cloud & DevOps",
        newTab: false,
        path: "/services/cloud-devops",
      },
      {
        id: 35,
        title: "IOT & Automation",
        newTab: false,
        path: "/services/automation",
      },
      {
        id: 35,
        title: "WordPress Development",
        newTab: false,
        path: "/services/wordpress",
      },
      {
        id: 35,
        title: "System Design",
        newTab: false,
        path: "/services/system-design",
      },
      {
        id: 35,
        title: "Big Data",
        newTab: false,
        path: "/services/big-data",
      },
      {
        id: 35,
        title: "UI/UX",
        newTab: false,
        path: "/services/ui-ux",
      },
      {
        id: 35,
        title: "Cyber Security",
        newTab: false,
        path: "/services/cyber-security",
      },
      {
        id: 35,
        title: "View All",
        newTab: false,
        path: "/services",
        type: "button",
      },
    ],
  },
  {
    id: 2.1,
    title: "Careers",
    newTab: false,
    path: "/career",
  },
  {
    id: 2.3,
    title: "Blogs",
    newTab: false,
    path: "/blog",
  },
];

export default menuData;
