import { ReactNode } from 'react';
import LanguageSelector from './language-selector';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="p-4">
      <nav className="flex">
        <LanguageSelector />
      </nav>
      {children}
    </main>
  );
}
