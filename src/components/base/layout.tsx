import { ReactNode } from 'react';
import LanguageSelector from './language-selector';
import ThemeToggle from './theme-toggle';
import { robotoMono } from './fonts';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main
      className={`p-4 min-h-screen bg-gradient-to-b from-bg-gradient-start to-bg dark:from-dark-bg-gradient-start dark:to-dark-bg text-black dark:text-white ${robotoMono.className}`}
    >
      <nav className="flex justify-end">
        <ThemeToggle />
        <LanguageSelector />
      </nav>
      {children}
    </main>
  );
}
