"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import menuData, { LanguageData } from "./menuData";
import { useTranslations } from "use-intl";

import { useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import LanguageSwitcher from "../LocaleSwitcher/LocaleSwitcherSelect";

const LanguageToggler = () => {
  return <LanguageSwitcher />;
};

export default LanguageToggler;
