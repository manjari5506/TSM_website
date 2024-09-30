"use client";
// import SimpleButton from "../Button/SimpleButton";
import { useEffect, useState } from "react";
import "./style.scss";
import {
  CloseOutlined,
  DownOutlined,
  GlobalOutlined,
  MenuOutlined,
  MoonFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { Header } from "antd/es/layout/layout";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Company",
    key: "company",
    icon: <DownOutlined />,
    children: [
      {
        label: (
          <a href="https://ant.design" rel="noopener noreferrer">
            Overview
          </a>
        ),

        key: "overview",
      },
      { label: "Leaders", key: "leader" },
      { label: "Clients", key: "client" },
    ],
  },
  {
    label: "Services",
    key: "service",
    icon: <DownOutlined />,
    children: [
      { label: "App Development", key: "app-dev" },
      { label: "Data Science", key: "data-sci" },
      { label: "Cloud & DevOps", key: "devop" },
      { label: "IOT & Automation", key: "iot" },
      { label: "System Design", key: "system-design" },
      { label: "Cyber Security", key: "cyber-security" },
    ],
    className: "service",
  },
  {
    label: "Careers",
    key: "career",
  },
  {
    key: "Blogs",
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Blogs
      </a>
    ),
  },
  { key: "moon", icon: <MoonFilled /> },
  {
    key: "lang",
    label: "",
    icon: <GlobalOutlined />,
    children: [
      { label: "English (US)", key: "english" },
      { label: "French", key: "french" },
    ],
  },
];

const Navbar = () => {
  const [stickyMenu, setStickyMenu] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  return (
    <>
      <Header
        className={`nav__header fixed left-0 top-0  z-99999 flex items-center justify-between    bg-white   ${
          stickyMenu ? "  shadow-xl transition duration-100 dark:bg-black" : ""
        } `}
      >
        <div className="logo text-xl font-semibold">StackMentalist</div>

        {/* Fullscreen menu for desktop */}
        <Menu
          mode="horizontal"
          items={items}
          className="menu__items hidden md:flex  "
        />
        <div className="nav__header--card"></div>
        {/* Hamburger button for mobile */}
        <MenuOutlined onClick={toggleMenu} className="block md:hidden" />
      </Header>

      {/* Fullscreen menu overlay */}
      <div
        className={`fullscreen-menu ${menuOpen ? "open" : "closed"}`}
        onClick={() => setMenuOpen(false)}
      >
        <CloseOutlined onClick={toggleMenu} className="close-button" />
        <Menu mode="vertical" items={items} className="vertical__menu " />
      </div>
    </>
  );
};

export default Navbar;
