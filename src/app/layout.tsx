import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const dm_sans = DM_Sans({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-dm-sans',
});
const integral = localFont({
  src: [
    {
      path: '../../public/fonts/IntegralCF-Regular.woff2',
      weight: '400',
      style: 'normal',
    },

    {
      path: '../../public/fonts/IntegralCF-Bold.woff2',
      weight: '700',
      style: 'bold',
    },
  ],
  variable: '--font-integral',
});

export const metadata: Metadata = {
  title: 'Nfter',
  description: 'The amazing NFT art of the world here',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dm_sans.variable} ${integral.variable}`}>
        {children}
      </body>
    </html>
  );
}
