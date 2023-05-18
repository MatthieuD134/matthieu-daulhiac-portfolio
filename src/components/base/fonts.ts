import { Poppins, Roboto_Mono } from 'next/font/google';

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});
