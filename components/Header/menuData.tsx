import SubMenu from "antd/es/menu/SubMenu";

const menuData = [
  {
    id: 3,
    title: "company.title", // Use translation key for titles
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "company.overview", // Use translation key
        newTab: false,
        path: "/overview",
      },
      {
        id: 35,
        title: "company.leaders", // Use translation key
        newTab: false,
        path: "/leaders",
      },
    ],
  },
  {
    id: 2,
    title: "services.title", // Use translation key
    newTab: false,
    submenu: [
      {
        id: 36,
        title: "services.appDevelopment", // Use translation key
        newTab: false,
        path: "/services/app-development",
      },
      {
        id: 37,
        title: "services.dataScience", // Use translation key
        newTab: false,
        path: "/services/data-science",
      },
      {
        id: 38,
        title: "services.cloudDevOps", // Use translation key
        newTab: false,
        path: "/services/cloud-devops",
      },
      {
        id: 39,
        title: "services.iotAutomation", // Use translation key
        newTab: false,
        path: "/services/iot",
      },
      {
        id: 40,
        title: "services.wordpressDevelopment", // Use translation key
        newTab: false,
        path: "/services/wordpress-development",
      },
      {
        id: 41,
        title: "services.systemDesign", // Use translation key
        newTab: false,
        path: "/services/system-design",
      },
      {
        id: 42,
        title: "services.bigData", // Use translation key
        newTab: false,
        path: "/services/big-data",
      },
      {
        id: 43,
        title: "services.uiUx", // Use translation key
        newTab: false,
        path: "/services/ui-ux",
      },
      {
        id: 44,
        title: "services.cyberSecurity", // Use translation key
        newTab: false,
        path: "/services/cyber-security",
      },
      {
        id: 45,
        title: "services.viewAll", // Use translation key
        newTab: false,
        path: "/services",
        type: "button",
      },
    ],
  },
  {
    id: 2.1,
    title: "careers", // Use translation key
    newTab: false,
    path: "/career",
  },
  {
    id: 2.3,
    title: "blogs", // Use translation key
    newTab: false,
    path: "/blog",
  },
  
];
export const LanguageData = [{
      
  id: 1,
  title: "english",  
  newTab: false,
  path: "/en",
  


},{

id: 2,
title: "french",  
newTab: false,
path: "/",



}]
export default menuData;
