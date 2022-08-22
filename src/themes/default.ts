import {
    borderWidths,
    breakpoints,
    darkThemeColors,
    fontSizes,
    fontWeights,
    lightThemeColors,
    lineHeights,
    radii,
    shadows,
    sizes,
    space,
    transitions,
} from './constants';

const common = {
    fontSizes,
    fontWeights,
    lineHeights,
    space,
    sizes,
    radii,
    transitions,
    borderWidths,
    breakpoints,
    shadows,
};

export const darkTheme = {
    colors: { ...darkThemeColors },
    ...common,
    help: {
        active: darkThemeColors.basic.$400,
        hover: darkThemeColors.primary.$300,
        disabled: darkThemeColors.main.$100,
    },
};

export const lightTheme = {
    colors: { ...lightThemeColors },
    ...common,
    help: {
        active: darkThemeColors.basic.$400,
        hover: lightThemeColors.primary.$300,
        disabled: lightThemeColors.main.$800,
    },
};

export type TThemeCustom =
    | typeof darkTheme
    | (typeof lightTheme & {
          help: { active: string; hover: string; disabled: string };
      });

export const defaultTheme = { ...darkTheme };
