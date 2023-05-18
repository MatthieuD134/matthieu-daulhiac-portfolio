import { ReactNode } from 'react';
import LanguageSelector from './language-selector';
import ThemeToggle from './theme-toggle';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="p-4 min-h-screen dark:bg-[#222831] dark:text-white">
      <nav className="flex justify-end">
        <ThemeToggle />
        <LanguageSelector />
      </nav>
      {children}
    </main>
  );
}
