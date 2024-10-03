"use client";

import { NextIntlClientProvider } from 'next-intl';
import { ThemeProvider } from 'next-themes';
import Header from './Header';
import ScrollToTop from './ScrollToTop';

export default function ClientLayout({ children, messages, locale }) {
  return (
    <NextIntlClientProvider messages={messages} locale={locale}>
      <ThemeProvider enableSystem={false} attribute="class" defaultTheme="light">
        <Header />
        {children}
        <ScrollToTop />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
