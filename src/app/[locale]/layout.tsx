import React from 'react';
import type { Metadata } from 'next';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import '../ui/global.css';

export const metadata: Metadata = {
  title: 'Presentation image generator',
  description: 'Make pictures for your presentaion using AI',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();

  return (
    <html lang={locale}>
      <body className="dark:bg-gray-700">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
