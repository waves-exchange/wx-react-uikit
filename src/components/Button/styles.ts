export const variants = {
    primary: {
        bg: 'main',
        color: 'standard.$0',
        outline: 'none',
        ':hover:not(:disabled)': {
            bg: 'blue.$500',
        },
        ':focus:not(:disabled)': {
            bg: 'main',
        },
        ':active': {
            bg: 'main',
        },
        ':disabled': {
            bg: 'surfmut',
            color: 'textmuted',
        },
    },
    transparent: {
        bg: 'transparent',
        color: 'text',
        border: '1px solid',
        borderColor: 'border',
        outline: 'none',
        ':hover:not(:disabled)': {
            border: '1px solid',
            borderColor: 'border',
            color: 'textsec',
        },
        ':focus:not(:disabled)': {
            border: '2px solid',
            borderColor: 'border',
        },
        ':active': {
            border: '1px solid',
            borderColor: 'border',
        },
        ':disabled': {
            color: 'textmuted',
            border: '1px solid',
            borderColor: 'surfmut',
            backgroundColor: 'surfmut',
        },
    },
};

export const variantSizes = {
    extraLarge: {
        fontSize: '$16',
        lineHeight: '$24',
        height: '56px',
        paddingLeft: '$8',
        paddingRight: '$8',
    },
    large: {
        fontSize: '$16',
        lineHeight: '$24',
        height: '48px',
        paddingLeft: '$8',
        paddingRight: '$8',
    },
    medium: {
        fontSize: '$14',
        lineHeight: '$24',
        height: '40px',
        paddingLeft: '$8',
        paddingRight: '$8',
    },
    small: {
        fontSize: '$14',
        height: '32px',
        paddingLeft: '$8',
        paddingRight: '$8',
    },
};
