"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div>
      {theme === "light" ? <Sun onClick={handleSetTheme} /> : <Moon onClick={handleSetTheme} />}
    </div>
  );
};
