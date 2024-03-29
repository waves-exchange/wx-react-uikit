export const variants = {
    primary: {
        bg: 'main',
        color: 'standard.$0',
        outline: 'none',
        ':hover:not(:disabled)': {
            bg: 'blue.$500',
        },
        ':focus:not(:disabled)': {
            bg: 'blue.$700',
        },
        ':active': {
            bg: 'blue.$700',
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
            borderColor: 'button.transparent.border.hover',
            color: 'textsec',
        },
        ':focus:not(:disabled)': {
            border: '1px solid',
            borderColor: 'button.transparent.border.focus',
            color: 'textsec',
        },
        ':active': {
            border: '1px solid',
            borderColor: 'button.transparent.border.focus',
            color: 'textsec',
        },
        ':disabled': {
            color: 'textmuted',
            border: '1px solid',
            borderColor: 'surfmut',
            backgroundColor: 'surfmut',
        },
    },
    red: {
        bg: 'negative',
        color: 'standard.$0',
        outline: 'none',
        ':hover:not(:disabled)': {
            bg: 'red.$300',
        },
        ':focus:not(:disabled)': {
            bg: 'red.$700',
        },
        ':active': {
            bg: 'red.$700',
        },
        ':disabled': {
            bg: 'surfmut',
            color: 'textmuted',
        },
    },
    green: {
        bg: 'positive',
        color: 'standard.$0',
        outline: 'none',
        ':hover:not(:disabled)': {
            bg: 'green.$300',
        },
        ':focus:not(:disabled)': {
            bg: 'green.$700',
        },
        ':active': {
            bg: 'green.$700',
        },
        ':disabled': {
            bg: 'surfmut',
            color: 'textmuted',
        },
    },
    text: {
        bg: 'transparent',
        color: 'textsec',
        outline: 'none',
        ':hover:not(:disabled)': {
            opacity: '0.8',
        },
        ':disabled': {
            color: 'textmuted',
        },
    },
};

export const variantSizes = {
    extraLarge: {
        fontSize: '$16',
        lineHeight: '$24',
        height: '56px',
        paddingLeft: '$16',
        paddingRight: '$16',
    },
    large: {
        fontSize: '$16',
        lineHeight: '$24',
        height: '48px',
        paddingLeft: '$12',
        paddingRight: '$12',
    },
    medium: {
        fontSize: '$14',
        lineHeight: '$24',
        height: '40px',
        paddingLeft: '$8',
        paddingRight: '$8',
    },
    extraSmall: {
        fontSize: '$16',
        lineHeight: '$24',
        height: '32px',
        paddingLeft: '$8',
        paddingRight: '$8',
    },
    small: {
        fontSize: '$14',
        lineHeight: '$24',
        height: '32px',
        paddingLeft: '$8',
        paddingRight: '$8',
    },
};
