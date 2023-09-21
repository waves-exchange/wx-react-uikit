import { IControlBoxStyles } from '../ControlBox/ControlBox';

export const defaultControlBoxStyles: IControlBoxStyles = {
    baseStyles: {
        width: 18,
        height: 18,
        marginRight: '4px',
        boxSizing: 'border-box',
        border: '1px solid',
        borderRadius: 'circle',
        backgroundColor: 'transparent',
        borderColor: 'border',
        cursor: 'pointer',
        justifyContent: 'center',
        '::before': {
            content: '""',
            display: 'block',
            transition: '0.3s',
            borderRadius: 'circle',
            width: 8,
            height: 8,
            backgroundColor: 'surf',
        },
    },
    _hover: {
        opacity: 0.8,
    },
    _checked: {
        backgroundColor: 'main',
        borderColor: 'main',
        '::before': {
            backgroundColor: 'standard.$0',
        },
    },
    _disabled: {
        opacity: 0.5,
        cursor: 'default',
    },
    _checkedAndDisabled: {
        opacity: 0.5,
        cursor: 'default',
    },
    _invalid: {
        borderColor: 'textnegative',
    },
};
