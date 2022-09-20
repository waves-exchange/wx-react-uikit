import { IControlBoxStyles } from '../ControlBox/ControlBox';

export const defaultControlBoxStyles: IControlBoxStyles = {
    baseStyles: {
        width: 20,
        height: 20,
        marginRight: '4px',
        boxSizing: 'border-box',
        border: '1px solid',
        borderRadius: 'circle',
        backgroundColor: 'main',
        borderColor: 'main',
        cursor: 'pointer',
        justifyContent: 'center',
        '::before': {
            content: '""',
            display: 'block',
            transition: '0.3s',
            borderRadius: 'circle',
            width: 12,
            height: 12,
            backgroundColor: 'standard.$0',
            border: '2px solid',
            borderColor: 'standard.$0',
        },
    },
    _hover: {
        backgroundColor: 'darkGrey.$200',
        borderColor: 'darkGrey.$200',
    },
    _checked: {
        '::before': {
            backgroundColor: 'main',
        },
    },
    _disabled: {
        backgroundColor: 'darkGrey.$600',
        borderColor: 'darkGrey.$600',
        cursor: 'default',
    },
    _checkedAndDisabled: {
        '::before': {
            backgroundColor: 'blue.$900',
        },
    },
};
