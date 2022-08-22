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

export enum NAMES_THEME {
    darkTheme = 'darkTheme',
    lightTheme = 'lightTheme',
}

export type TNameTheme = NAMES_THEME.darkTheme | NAMES_THEME.lightTheme;

export const darkTheme = {
    colors: { ...darkThemeColors },
    ...common,
    name: NAMES_THEME.darkTheme,
};

export const lightTheme = {
    colors: { ...lightThemeColors },
    ...common,
    name: NAMES_THEME.lightTheme,
};

export type TThemeCustom =
    | typeof darkTheme
    | (typeof lightTheme & {
          name: TNameTheme;
      });

export const defaultTheme = { ...darkTheme };
