import { atom, useAtomValue, useSetAtom } from 'jotai';
import { ReactNode, useEffect } from 'react';

export const THEMES = {
  light: 'light',
  dark: 'dark',
};

export const themeAtom = atom<string | null>(null);

export const useTheme = () => useAtomValue(themeAtom);

export const useSetTheme = () => {
  const setTheme = useSetAtom(themeAtom);

  return (theme: string) => {
    localStorage.setItem('theme', theme);
    setTheme(theme);

    if (theme === THEMES.dark) {
      document.documentElement.classList.add(THEMES.dark);
    } else {
      document.documentElement.classList.remove(THEMES.dark);
    }
  };
};

const ThemeContext = ({ children }: { children: ReactNode }) => {
  const setTheme = useSetTheme();

  useEffect(() => {
    const themeToUse =
      localStorage.getItem('theme') === THEMES.dark ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
        ? THEMES.dark
        : THEMES.light;

    setTheme(themeToUse);
  });

  return <>{children}</>;
};

export default ThemeContext;
