import { ReactNode } from 'react';
import LanguageSelector from './language-selector';
import ThemeToggle from './theme-toggle';
import { robotoMono } from './fonts';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <nav
        className={`absolute p-2 w-full flex justify-end gap-5 text-black dark:text-white ${robotoMono.className}`}
      >
        <ThemeToggle />
        <LanguageSelector />
      </nav>
      <main
        className={`min-h-screen text-black dark:text-white ${robotoMono.className}`}
      >
        {children}
      </main>
    </>
  );
}
