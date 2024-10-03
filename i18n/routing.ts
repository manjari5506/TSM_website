import {defineRouting, LocalePrefix, Pathnames } from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 import {createLocalizedPathnamesNavigation} from 'next-intl/navigation'
 
// export const routing = defineRouting({
//   // A list of all locales that are supported
//   locales: ['en', 'fr'],
 
//   // Used when no locale matches
//   defaultLocale: 'en'
// });
export const locales = ['en' , 'fr'] as const;
export type Locales = typeof locales;
 export const pathnames : Pathnames<Locales> = {
  '/' : '/',
  '.pathnames' : '/pathnames'

 }
 export const localePrefix : LocalePrefix<Locales> = 'always'
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
// export const {Link, redirect, usePathname, useRouter} =
//   createSharedPathnamesNavigation(routing);

export const {
  Link , getPathname , redirect , usePathname , useRouter
} = createLocalizedPathnamesNavigation({
  locales,
  pathnames,
  localePrefix
})