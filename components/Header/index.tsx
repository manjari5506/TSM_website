"use client";
import Image from "next/image";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";
import LanguageToggler from "./LanguageToggler";
import "./Header.scss";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const t = useTranslations("navbar");

  const pathUrl = usePathname();

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true);
    } else {
      setStickyMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu);
  });
  return (
    <header
      className={`fixed left-0 top-0 z-99999 w-full py-2 ${
        stickyMenu
          ? "header-container"
          : "header-container-sticky transition duration-100 dark:bg-black"
      } `}
    >
      <div className="header-div relative mx-auto max-w-c-1390 items-center justify-between xl:flex 2xl:px-0">
        <div className="flex h-15 w-full items-center justify-between xl:w-1/4">
          <a href="/">
            <Image
              src="/images/logo/logo.svg"
              alt="logo"
              width={60}
              height={20}
              className="hidden dark:block"
            />
            <Image
              src="/images/logo/logo.svg"
              alt="logo"
              width={60}
              height={20}
              className="dark:hidden"
            />
          </a>

          {/* Hamburger Toggle BTN */}
          <button
            aria-label="hamburger Toggler"
            className="block xl:hidden"
            onClick={() => setNavigationOpen(!navigationOpen)}
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 block h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-300" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "delay-400 !w-full" : "w-0"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !navigationOpen ? "!w-full delay-500" : "w-0"
                  }`}
                ></span>
              </span>
            </span>
          </button>
        </div>

        {/* Nav Menu Start   */}
        <div
          className={`invisible ml-96 h-0 w-full items-center  gap-x-10 xl:visible xl:flex xl:h-auto xl:w-full ${
            navigationOpen &&
            "navbar !visible mt-4 h-auto max-h-[400px] rounded-md bg-white p-7.5 shadow-solid-5 dark:bg-blacksection xl:h-auto xl:p-0 xl:shadow-none xl:dark:bg-transparent"
          }`}
        >
          <nav>
            <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
              {menuData.map((menuItem, key) => (
                <li key={key} className={menuItem.submenu && "group relative"}>
                  {menuItem.submenu ? (
                    <>
                      <button className="flex cursor-pointer items-center justify-between gap-3 hover:text-navy">
                        {t(menuItem.title)}
                        <span>
                          <svg
                            className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-navy"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                          >
                            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                          </svg>
                        </span>
                      </button>

                      <ul className="nav-submenu dropdown">
                        {menuItem.submenu.map((item, key) => (
                          <li key={key} className="hover:text-navy">
                            {item.type === "button" ? (
                              <Link
                                href={item.path || "#"}
                                className="flex items-center justify-center rounded-full bg-navy px-7.5 py-2.5 text-regular text-white duration-300 ease-in-out hover:scale-110"
                              >
                                {t(item.title)}
                              </Link>
                            ) : (
                              <Link href={item.path || "#"}>
                                {t(item.title)}
                              </Link>
                            )}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <Link
                      href={`${menuItem.path}`}
                      className={
                        pathUrl === menuItem.path
                          ? "text-navy hover:text-navy"
                          : "hover:text-navy"
                      }
                    >
                      {t(menuItem.title)}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-7 flex items-center gap-6 xl:mt-0">
            <Link
              href="/contact"
              className="text-normal flex w-[14rem] items-center justify-center rounded-full bg-navy px-7.5 py-2.5 text-white duration-300 ease-in-out hover:scale-110"
            >
              {t("contactUs")}
            </Link>
            <ThemeToggler />
            <LanguageToggler />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
