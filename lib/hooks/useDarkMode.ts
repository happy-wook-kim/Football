
import { useEffect, useState } from "react";

type Theme = 'light' | 'dark'

export const useDarkMode = (): [Theme, () => void] => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') ? window.localStorage.getItem('theme') as Theme : 'light';

    setTheme(localTheme);
    document.body.dataset.theme = localTheme;
  }, [])

  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.localStorage.setItem('theme', newTheme);
    document.body.dataset.theme = newTheme;
  }

  return [theme, changeTheme];
};