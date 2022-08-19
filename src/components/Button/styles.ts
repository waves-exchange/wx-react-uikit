export const variants = {
    primary: {
        bg: 'primary.$300',
        color: 'standard.$0',
        outline: 'none',
        ':hover:not(:disabled)': {
            bg: 'primary.$500',
        },
        ':focus:not(:disabled)': {
            bg: 'primary.$800',
        },
        ':active': {
            bg: 'primary.$800',
        },
        ':disabled': {
            bg: 'main.$600',
            color: 'basic.$800',
        },
    },
    transparent: {
        bg: 'transparent',
        color: 'standard.$0',
        border: '1px solid',
        borderColor: 'main.$100',
        outline: 'none',
        ':hover:not(:disabled)': {
            border: '1px solid',
            borderColor: 'basic.$100',
        },
        ':focus:not(:disabled)': {
            border: '2px solid',
            borderColor: 'basic.$800',
        },
        ':active': {
            border: '1px solid',
            borderColor: 'main.$100',
        },
        ':disabled': {
            color: 'basic.$800',
            border: '1px solid',
            borderColor: 'main.$600',
        },
    },
};

export const variantSizes = {
    extraLarge: {
        fontSize: '$16',
        lineHeight: '$24',
        height: '56px',
        paddingLeft: '$24',
        paddingRight: '$24',
    },
    large: {
        fontSize: '$16',
        lineHeight: '$24',
        height: '48px',
        paddingLeft: '$16',
        paddingRight: '$16',
    },
    medium: {
        fontSize: '$14',
        lineHeight: '$24',
        height: '40px',
        paddingLeft: '$12',
        paddingRight: '$12',
    },
    small: {
        fontSize: '$14',
        height: '32px',
        paddingLeft: '$8',
        paddingRight: '$8',
    },
};
