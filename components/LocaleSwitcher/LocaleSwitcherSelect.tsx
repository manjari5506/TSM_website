import React, { useState } from 'react';
 
import { Globe } from 'lucide-react';
import { locales, usePathname, useRouter } from '@/i18n/routing';
 

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const switchLanguage = (locale: Locale) => {
    router.push(pathname, {locale});
  };

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Globe className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          {locales.map((locale) => (
            <button
              key={locale}
              onClick={() => switchLanguage(locale)}
              className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {locale === 'en' ? 'English' : 'Français'}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;