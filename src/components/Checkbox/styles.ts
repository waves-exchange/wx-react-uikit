import { IControlBoxStyles } from '../ControlBox/ControlBox';

export const defaultControlBoxStyles: IControlBoxStyles = {
    baseStyles: {
        userSelect: 'none' as 'none',
        border: '1px solid',
        color: 'white',
        borderColor: 'border',
        backgroundColor: 'transparent',
        borderRadius: '$2',
        transition: 'all 120ms, background-color 120ms, box-shadow 250ms',
        width: '20px',
        height: '20px',
    },
    _hover: {
        opacity: 0.8,
    },
    _child: {
        opacity: 0,
    },
    _checkedAndChild: {
        opacity: 1,
    },
    _checked: {
        backgroundColor: 'main',
        borderColor: 'main',
        ':hover': {
            opacity: 0.8,
        },
    },
    _checkedAndHover: {
        borderColor: 'main',
        opacity: 0.8,
    },
    _checkedAndDisabled: {
        opacity: 0.5,
    },
    _checkedAndDisabledHover: {
        opacity: 0.5,
    },
    _disabled: {
        opacity: 0.5,
    },
    _invalid: {
        borderColor: 'textnegative',
    },
};
