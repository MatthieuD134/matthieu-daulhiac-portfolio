import { useCallback } from 'react';
import { THEMES, useSetTheme, useTheme } from './theme-context';

export default function ThemeToggle() {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const toggleTheme = useCallback(() => {
    if (theme === THEMES.dark) {
      setTheme(THEMES.light);
    } else {
      setTheme(THEMES.dark);
    }
  }, [theme, setTheme]);

  return <button onClick={() => toggleTheme()}>{theme}</button>;
}
