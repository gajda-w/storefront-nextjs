"use client";

import { useTheme } from "next-themes";

export const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const handleSetTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <div>
      <button className="text-black" onClick={handleSetTheme}>
        {theme}
      </button>
    </div>
  );
};
