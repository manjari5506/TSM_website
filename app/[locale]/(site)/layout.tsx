import { Inter } from "next/font/google";
import "../globals.scss";
const inter = Inter({ subsets: ["latin"] });
 
import { notFound } from "next/navigation";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
 
 
export default async function RootLayout({
 children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
   

  // Fallback if an unsupported locale is accessed
  if (!["en", "fr"].includes(locale)) {
    notFound();
  }
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
