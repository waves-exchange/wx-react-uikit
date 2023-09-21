import { IControlBoxStyles } from '../ControlBox/ControlBox';

export const controlBoxStyles: IControlBoxStyles = {
    baseStyles: {
        width: 38,
        height: 18,
        boxSizing: 'content-box',
        border: '1px solid',
        borderRadius: 10,
        backgroundColor: 'togglebg',
        borderColor: 'togglebg',
        cursor: 'pointer',
        justifyContent: 'initial',
        '::before': {
            content: '""',
            display: 'block',
            transition: '.3s',
            borderRadius: 'circle',
            width: 18,
            height: 18,
            backgroundColor: 'standard.$0',
        },
    },
    _hover: {
        opacity: 0.8,
    },
    _checked: {
        backgroundColor: 'main',
        borderColor: 'main',
        '::before': {
            transform: 'translateX(20px)',
        },
    },
    _disabled: {
        backgroundColor: 'surfmut',
        borderColor: 'surfmut',
        cursor: 'not-allowed',
    },
    _checkedAndDisabled: {
        backgroundColor: 'main',
        borderColor: 'main',
    },
};
