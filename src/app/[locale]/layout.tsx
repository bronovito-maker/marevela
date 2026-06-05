import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Playfair_Display, Lato } from 'next/font/google';
import "../globals.css";

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

const lato = Lato({ 
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
});

import { getTranslations } from 'next-intl/server';
import JsonLd from '@/components/JsonLd';

export async function generateMetadata({ params }: { params: Promise<{locale: string}> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
    metadataBase: new URL('https://www.sorima.it'),
    alternates: {
      languages: {
        'it': '/it',
        'en': '/en',
        'fr': '/fr',
        'de': '/de',
        'es': '/es',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: 'https://www.sorima.it',
      siteName: 'Parcheggio MareVela',
      images: [
        {
          url: '/images/hero-bg.png',
          width: 1200,
          height: 630,
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: ['/images/hero-bg.png'],
    },
  };
}

import Navbar from '@/components/Navbar';
import StickyMobileCTA from '@/components/StickyMobileCTA';

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body className={`${playfair.variable} ${lato.variable} antialiased bg-background text-foreground font-sans`}>
        <NextIntlClientProvider messages={messages}>
          <JsonLd />
          <Navbar />
          {children}
          <StickyMobileCTA />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
