import { ButtonHTMLAttributes, useCallback, useMemo } from 'react';
import { THEMES, useSetTheme, useTheme } from './theme-context';
import MoonIcon from '../icons/moon-icon';
import SunIcon from '../icons/sun-icon';

export default function ThemeToggle(
  props: ButtonHTMLAttributes<HTMLButtonElement>
) {
  const theme = useTheme();
  const setTheme = useSetTheme();

  const toggleTheme = useCallback(() => {
    if (theme === THEMES.dark) {
      setTheme(THEMES.light);
    } else {
      setTheme(THEMES.dark);
    }
  }, [theme, setTheme]);

  const currentIcon = useMemo(() => {
    if (theme === THEMES.dark) return <MoonIcon />;
    return <SunIcon />;
  }, [theme]);

  return (
    <button
      className={`${props.className ? props.className : ''}`}
      onClick={() => toggleTheme()}
    >
      {currentIcon}
    </button>
  );
}
