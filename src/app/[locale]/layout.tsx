import type { Metadata } from "next";
import "./css/globals.css";
import StoreProvider from "./StorageProvider";
import { NextIntlClientProvider, useMessages } from "next-intl";

export const metadata: Metadata = {
  title: "Football",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  params: {locale}
}: Readonly<{
  children: React.ReactNode;
  params: {locale: string};
}>) {
  const messages = useMessages()

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider
          locale={locale}
          messages={messages}>
          <StoreProvider>
            {children}
          </StoreProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
