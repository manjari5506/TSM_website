import React, { useState } from "react";

import { Globe } from "lucide-react";
import { locales, usePathname, useRouter } from "@/i18n/routing";
import { useTranslations } from "use-intl";

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  console.log(pathname);
  const t = useTranslations("navbar");

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  };
  const handleMouseLeave = () => setIsOpen(false);

  const switchLanguage = (locale) => {
    router.push(pathname, { locale });
  };

  return (
    <div className="relative" onClick={handleClick}>
      <div className={isOpen && `rounded-xl bg-navy p-2`}>
        <Globe
          className={` h-5 w-5 cursor-pointer text-gray-600 hover:text-gray-800 ${isOpen && "text-white"}`}
        />
      </div>

      {isOpen && (
        <div className="absolute right-0 z-20 mt-2 w-48 rounded-md bg-white py-2 shadow-xl">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLanguage(locale)}
              className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
            >
              {t(`locales.${locale}`)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
