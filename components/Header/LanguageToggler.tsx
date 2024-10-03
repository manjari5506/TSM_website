"use client"
import { useTheme } from "next-themes";
import Image from "next/image";
import menuData, { LanguageData } from "./menuData";
import { useTranslations } from "use-intl";
 
import { useState } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useParams } from "next/navigation";
import LanguageSwitcher from "../LocaleSwitcher/LocaleSwitcherSelect";
 
 
 

const LanguageToggler = () => {
  const { theme, setTheme } = useTheme();
  const [clicked , setClicked] = useState(false)
  const t = useTranslations("navbar")
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();


  return (
    // <div className="language__toggler relative">
    //   <button
    //   className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-gray dark:text-white lg:static opacity-50"
    // >
    //   <Image
    //     src="/images/icon/icon-globe-light.svg"
    //     alt="logo"
    //     width={21}
    //     height={21}
    //     className="dark:hidden"
    //   />

    //   <Image
    //     src="/images/icon/icon-globe-dark.svg"
    //     alt="logo"
    //     width={22}
    //     height={22}
    //     className="hidden dark:block"
    //   />
    // </button>
    // <div className="w-[20rem] bg-red-600 absolute h-[10rem] top-[3rem] z-100 right-[3rem] ">
    //   <ul className="list-none flex flex-col">
    //     {LanguageData.map((ln , ind) => 
    //     <button className="bg-green-200 text-3xl font-bold text-white" onClick={(e)=>{
    //          console.log(e.target)
    //          router.replace( {
    //           //@ts-ignore
    //           pathname , params
               
    //          },{locale : "en"} )
    //     }}>
    //       {t(ln.title)}
    //     </button>
    //     )}

    //   </ul>

    // </div>
    // </div>
< LanguageSwitcher />
  );
};

export default LanguageToggler;

