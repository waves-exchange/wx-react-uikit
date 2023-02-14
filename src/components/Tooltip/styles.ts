import { Interpolation } from '@emotion/core';
import { Placement } from '@popperjs/core';
import { TVariants } from './Tooltip';

type GetPopperArrowStyle = (options: {
    arrowSize: number;
    hasArrow: boolean;
    color?: string;
    variant: TVariants;
}) => Interpolation;

const borderWidth = 4;
const getBorderStyles = (placement: Placement): Record<string, string> => {
    let key;

    switch (true) {
        case placement.includes('right'):
            key = 'right';
            break;
        case placement.includes('top'):
            key = 'top';
            break;
        case placement.includes('left'):
            key = 'left';
            break;
        default:
            key = 'bottom';
    }

    const styles = {
        bottom: {
            borderBottomLeftRadius: '8px',
            borderBottomRightRadius: '8px',
            borderTop: `${borderWidth}px solid`,
        },
        left: {
            borderBottomLeftRadius: '8px',
            borderTopLeftRadius: '8px',
            borderRight: `${borderWidth}px solid`,
        },
        right: {
            borderBottomRightRadius: '8px',
            borderTopRightRadius: '8px',
            borderLeft: `${borderWidth}px solid`,
        },
        top: {
            borderTopLeftRadius: '8px',
            borderTopRightRadius: '8px',
            borderBottom: `${borderWidth}px solid`,
        },
    };

    return { ...styles[key], borderColor: 'main' };
};

export const variants = {
    default: {
        styles: {
            p: '10px',
            borderRadius: '$4',
            border: '1px solid',
            borderColor: 'mediumGrey.$850',
            bg: 'rgba(0, 0, 0, .7)',
            color: 'standard.$0',
            fontSize: '12px',
            lineHeight: '16px',
        },
        arrowColor: 'transparent',
    },
    info: {
        styles: {
            p: '16px',
            bg: 'surf',
            color: 'text',
            fontSize: '12px',
            lineHeight: '16px',
        },
        arrowColor: 'main',
    },
};

export const getPopperArrowStyle: GetPopperArrowStyle = ({
    arrowSize,
    hasArrow,
    color = 'currentColor',
    variant,
}) => {
    return {
        '[data-popper-arrow]': {
            color,
            border: `${arrowSize}px solid`,
            borderColor: 'currentColor',
            position: 'absolute',
        },

        "&[data-popper-placement^='top']": {
            marginTop: hasArrow ? `-${arrowSize + borderWidth}px` : '0px',
            ...(variant === 'info' ? getBorderStyles('top') : null),
        },

        "&[data-popper-placement^='top'] [data-popper-arrow]": {
            top: `calc(100% + ${borderWidth}px)`,
            borderColor: 'currentColor transparent transparent transparent',
        },

        "&[data-popper-placement^='bottom']": {
            marginTop: hasArrow ? `${arrowSize}px` : '0px',
            ...(variant === 'info' ? getBorderStyles('bottom') : null),
        },

        "&[data-popper-placement^='bottom'] [data-popper-arrow]": {
            bottom: `calc(100% + ${borderWidth}px)`,
            borderColor: 'transparent transparent currentColor transparent',
        },

        "&[data-popper-placement^='left']": {
            marginLeft: hasArrow ? `-${arrowSize + borderWidth}px` : '0px',
            ...(variant === 'info' ? getBorderStyles('left') : null),
        },

        "&[data-popper-placement^='left'] [data-popper-arrow]": {
            left: `calc(100% + ${borderWidth}px)`,
            borderColor: 'transparent transparent transparent currentColor',
        },

        "&[data-popper-placement^='right']": {
            marginLeft: hasArrow ? `${arrowSize}px` : '0px',
            ...(variant === 'info' ? getBorderStyles('right') : null),
        },

        "&[data-popper-placement^='right'] [data-popper-arrow]": {
            right: `calc(100% + ${borderWidth}px)`,
            borderColor: 'transparent currentColor transparent transparent',
        },
    };
};
