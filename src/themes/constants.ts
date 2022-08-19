export const colors = {
    standard: {
        $0: '#fff',
        $1000: '#000',
    },
    darkGrey: {
        $100: '#32384C',
        $200: '#2C3246',
        $300: '#282E40',
        $400: '#242A3C',
        $500: '#202636',
        $600: '#1C2332',
        $700: '#171C2B',
        $800: '#0F141E',
    },
    mediumGrey: {
        $100: '#9AA2B0',
        $200: '#929BAA',
        $300: '#8B95A5',
        $400: '#848E9F',
        $500: '#7E889A',
        $600: '#778295',
        $700: '#707B8F',
        $800: '#697387',
    },
    lightGrey: {
        $100: '#FBFCFD',
        $200: '#F6F7FB',
        $300: '#EEF2FA',
        $400: '#E5E8F1',
        $500: '#D8DDE4',
        $600: '#CED3DB',
        $700: '#BFC4CC',
        $800: '#B6BBC3',
    },
    blue: {
        $100: '#5582FF',
        $200: '#4673FF',
        $300: '#3C69FF',
        $400: '#325FFF',
        $500: '#2855FA',
        $600: '#234BF5',
        $700: '#1E41EB',
        $800: '#1437E1',
    },
    red: {
        $100: '#FF485E',
        $200: '#FF2F48',
        $300: '#F3213B',
        $400: '#EB1832',
        $500: '#DF1830',
        $600: '#D5142B',
        $700: '#B51427',
        $800: '#AA1023',
    },
    redSoft: {
        $100: '#FD6E7F',
        $200: '#EC5769',
        $300: '#E74F61',
        $400: '#E14457',
        $500: '#DD3B4F',
        $600: '#D13548',
        $700: '#C43546',
        $800: '#B22E3E',
    },
    herbal: {
        $100: '#81D319',
        $200: '#7ACE11',
        $300: '#76C710',
        $400: '#6EBC0A',
        $500: '#67B10A',
        $600: '#63AB09',
        $700: '#5C9F07',
        $800: '#539006',
    },
    green: {
        $100: '#00D77D',
        $200: '#00CF77',
        $300: '#00C873',
        $400: '#00BE6E',
        $500: '#00B469',
        $600: '#00AA64',
        $700: '#00A05F',
        $800: '#00965A',
    },
    greenSoft: {
        $100: '#52DAA1',
        $200: '#3BD794',
        $300: '#2FCF8B',
        $400: '#2AC684',
        $500: '#2CBA7F',
        $600: '#1EB175',
        $700: '#1CA86F',
        $800: '#319D72',
    },
    orange: {
        $100: '#FFAF4B',
        $200: '#FFA53C',
        $300: '#FF9B28',
        $400: '#FF8C00',
        $500: '#F58200',
        $600: '#E67D00',
        $700: '#D77800',
        $800: '#C86E00',
    },
    yellow: {
        $100: '#FFC530',
        $200: '#FFBD14',
        $300: '#FFB800',
        $400: '#FAB400',
        $500: '#F0AA00',
        $600: '#E9A500',
        $700: '#DD9C00',
        $800: '#D49600',
    },
    purple: {
        $100: '#B455FF',
        $200: '#AA41FF',
        $300: '#A532FF',
        $400: '#9619FF',
        $500: '#8B14FF',
        $600: '#8200EB',
        $700: '#7800D7',
        $800: '#6E00C3',
    },
    magenta: {
        $100: '#FF05A5',
        $200: '#F40596',
        $300: '#EE0090',
        $400: '#E6008C',
        $500: '#DC0087',
        $600: '#D20082',
        $700: '#C30078',
        $800: '#B40073',
    },
};

// TODO
export const darkThemeColors = {
    main: { ...colors.darkGrey },
    basic: { ...colors.mediumGrey },
    secondary: { ...colors.lightGrey },
    standard: { ...colors.standard },
    primary: { ...colors.blue },
    danger: { ...colors.red },
    warning: { ...colors.orange },
    green: { ...colors.herbal },
    success: { ...colors.green },
    mix: {
        // TODO
    },
};

// TODO
export const lightThemeColors = {
    main: { ...colors.lightGrey },
    basic: { ...colors.mediumGrey },
    secondary: { ...colors.darkGrey },
    standard: { ...colors.standard },
    primary: { ...colors.blue },
    danger: { ...colors.red },
    warning: { ...colors.orange },
    green: { ...colors.herbal },
    success: { ...colors.green },
    mix: {
        // TODO
    },
};

export const fontSizes = {
    $10: '10px',
    $12: '12px',
    $14: '14px',
    $16: '16px',
    $20: '20px',
    $24: '24px',
    $32: '32px',
    $48: '48px',
    $56: '56px',
};

export const space = {
    $0: '0px',
    $4: '4px',
    $8: '8px',
    $12: '12px',
    $16: '16px',
    $20: '20px',
    $24: '24px',
};

export const lineHeights = {
    $16: '16px',
    $24: '24px',
    $32: '32px',
    $40: '40px',
    $56: '56px',
    $64: '64px',
};

export const fontWeights = {
    $400: '400',
    $500: '500',
    $600: '600',
    $700: '700',
};

export const radii = {
    none: 0,
    $2: 2,
    $4: 4,
    $6: 6,
    $8: 8,
    circle: '9999px',
};

export const sizes = {
    medium: '48px',
};

export const transitions = {
    default: '0.3s',
};

export const breakpoints = [
    '576px',
    '768px',
    '992px',
    '1200px',
    '1400px',
    '1920px',
];

export const borderWidths = [0, 1];

export const shadows = {
    default: '0 0 4px rgba(0, 0, 0, 0.125)',
};
