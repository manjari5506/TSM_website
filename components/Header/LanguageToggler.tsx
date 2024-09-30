import { useTheme } from "next-themes";
import Image from "next/image";

const LanguageToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="bg-gray-2 dark:bg-dark-bg absolute right-17 mr-1.5 flex cursor-pointer items-center justify-center rounded-full text-gray dark:text-white lg:static opacity-50"
    >
      <Image
        src="/images/icon/icon-globe-light.svg"
        alt="logo"
        width={21}
        height={21}
        className="dark:hidden"
      />

      <Image
        src="/images/icon/icon-globe-dark.svg"
        alt="logo"
        width={22}
        height={22}
        className="hidden dark:block"
      />
    </button>
  );
};

export default LanguageToggler;

