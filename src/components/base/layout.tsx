import { ReactNode } from 'react';
import LanguageSelector from './language-selector';
import ThemeToggle from './theme-toggle';
import { robotoMono } from './fonts';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav
        className={`absolute w-full flex justify-end text-black dark:text-white ${robotoMono.className}`}
      >
        <ThemeToggle />
        <LanguageSelector />
      </nav>
      <main
        className={`min-h-screen bg-gradient-to-b from-bg-gradient-start to-bg dark:from-dark-bg-gradient-start dark:to-dark-bg text-black dark:text-white ${robotoMono.className}`}
      >
        {children}
      </main>
    </>
  );
}
