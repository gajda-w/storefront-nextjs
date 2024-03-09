import resolveConfig from "tailwindcss/resolveConfig";

import twConfig from "./tailwind.config";

export const DEFAULT_DEBOUNCE_TIME_IN_MS = 500;

export const config = resolveConfig(twConfig);

type ScreenSize = keyof typeof config.theme.screens;
export const screenSizes = Object.entries(config.theme.screens).reduce(
  (acc, [breakpoint, size]) => {
    acc[breakpoint as ScreenSize] = Number(size.match(/\d+/g)?.[0]);

    return acc;
  },
  {} as Record<ScreenSize, number>,
);
