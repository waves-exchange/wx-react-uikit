export const variants: Record<
    string,
    Partial<Record<'fontSize' | 'lineHeight' | 'fontWeight', string>>
> = {
    body1: {
        fontSize: '$16',
        lineHeight: '$24',
    },
    bodySemiBold1: {
        fontSize: '$16',
        lineHeight: '$24',
        fontWeight: '$600',
    },
    body2: {
        fontSize: '$14',
        lineHeight: '$20',
    },
    bodySemiBold2: {
        fontSize: '$14',
        lineHeight: '$20',
        fontWeight: '$600',
    },
    bodyXL: {
        fontSize: '$20',
        lineHeight: '$24',
    },
    caption: {
        fontSize: '$12',
        lineHeight: '$16',
    },
    line: {
        fontSize: '$10',
        lineHeight: '$16',
    },
    heading1: {
        fontSize: '$56',
        lineHeight: '$64',
        fontWeight: '$700',
    },
    heading2: {
        fontSize: '$48',
        lineHeight: '$56',
        fontWeight: '$700',
    },
    heading3: {
        fontSize: '$32',
        lineHeight: '$40',
        fontWeight: '$700',
    },
    heading4: {
        fontSize: '$24',
        lineHeight: '$32',
        fontWeight: '$700',
    },
    heading5: {
        fontSize: '$20',
        lineHeight: '$24',
        fontWeight: '$700',
    },
    button1: {
        fontSize: '$16',
        lineHeight: '$24',
        fontWeight: '$500',
    },
    button2: {
        fontSize: '$14',
        lineHeight: '$26',
        fontWeight: '$500',
    },
};
