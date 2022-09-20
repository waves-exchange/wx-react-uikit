import {
    borderWidths,
    breakpoints,
    colors,
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
    colors: {
        ...darkThemeColors,
        help: {
            active: colors.mediumGrey.$400,
            hover: colors.blue.$300,
            disabled: colors.darkGrey.$100,
        },
        plate: {
            warning: {
                border: colors.yellow.$300,
                title: colors.yellow.$400,
                bg: 'rgba(255, 197, 48, 0.15)',
            },
        },
        ...colors,
    },
    ...common,
};

export const lightTheme = {
    colors: {
        ...lightThemeColors,
        help: {
            active: colors.mediumGrey.$400,
            hover: colors.blue.$300,
            disabled: colors.lightGrey.$800,
        },
        plate: {
            warning: {
                border: colors.orange.$300,
                title: colors.orange.$600,
                bg: 'rgba(255, 197, 48, 0.15)',
            },
        },
        ...colors,
    },
    ...common,
};

export const defaultTheme = { ...darkTheme };
