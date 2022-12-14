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
        button: {
            transparent: {
                border: {
                    hover: colors.mediumGrey.$850,
                    focus: colors.darkGrey.$100,
                },
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
        button: {
            transparent: {
                border: {
                    hover: colors.lightGrey.$600,
                    focus: colors.lightGrey.$500,
                },
            },
        },
        ...colors,
    },
    ...common,
};

export const defaultTheme = { ...darkTheme };
