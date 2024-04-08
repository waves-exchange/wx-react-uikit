import { Interpolation } from '@emotion/core';
import { Placement } from '@popperjs/core';
import { TVariants } from './Tooltip';

type GetPopperArrowStyle = (options: {
    arrowSize: string;
    hasArrow: boolean;
    variant: TVariants;
    color?: string;
}) => Interpolation;

const borderWidth = 4;

export const variants = {
    default: {
        styles: {
            p: '10px',
            borderRadius: '$4',
            border: '1px solid',
            borderColor: 'iconsec',
            bg: 'rgba(0, 0, 0, .7)',
            color: 'standrard.$0',
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
    error: {
        styles: {
            p: '16px',
            bg: 'surf',
            color: 'text',
            fontSize: '12px',
            lineHeight: '16px',
        },
        arrowColor: 'negative',
    },
};

const getBorderStyles = (
    variant: TVariants,
    placement: Placement
): Record<string, string> | null => {
    if (variant === 'default') {
        return null;
    }
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

    return { ...styles[key], borderColor: variants[variant].arrowColor };
};

export const getPopperArrowStyle: GetPopperArrowStyle = ({
    arrowSize,
    hasArrow,
    color = 'currentColor',
    variant,
}) => {
    const arrowSizeNum = Number(arrowSize.replace('px', ''));

    return {
        '[data-popper-arrow]': {
            position: 'absolute',
            overflow: 'hidden',
        },
        '[data-popper-arrow] div': {
            color,
            border: `${arrowSizeNum}px solid`,
            borderColor: 'currentColor',
        },

        "&[data-popper-placement^='top']": {
            marginTop: hasArrow ? `-${arrowSizeNum + borderWidth}px` : '0px',
            ...getBorderStyles(variant, 'top'),
        },

        "&[data-popper-placement^='top'] [data-popper-arrow]": {
            top: `calc(100% + ${borderWidth}px)`,
            height: `${arrowSizeNum}px`,
        },
        "&[data-popper-placement^='top'] [data-popper-arrow] div": {
            borderColor: 'currentColor transparent transparent transparent',
        },

        "&[data-popper-placement^='bottom']": {
            marginTop: hasArrow ? `${arrowSizeNum}px` : '0px',
            ...getBorderStyles(variant, 'bottom'),
        },

        "&[data-popper-placement^='bottom'] [data-popper-arrow]": {
            bottom: `calc(100% + ${borderWidth}px)`,
            height: `${arrowSizeNum}px`,
        },
        "&[data-popper-placement^='bottom'] [data-popper-arrow] div": {
            borderColor: 'transparent transparent currentColor transparent',
            transform: 'translateY(-50%)',
        },

        "&[data-popper-placement^='left']": {
            marginLeft: hasArrow ? `-${arrowSizeNum + borderWidth}px` : '0px',
            ...getBorderStyles(variant, 'left'),
        },

        "&[data-popper-placement^='left'] [data-popper-arrow]": {
            left: `calc(100% + ${borderWidth}px)`,
            width: `${arrowSizeNum}px`,
        },
        "&[data-popper-placement^='left'] [data-popper-arrow] div": {
            borderColor: 'transparent transparent transparent currentColor',
        },

        "&[data-popper-placement^='right']": {
            marginLeft: hasArrow ? `${arrowSizeNum}px` : '0px',
            ...getBorderStyles(variant, 'right'),
        },

        "&[data-popper-placement^='right'] [data-popper-arrow]": {
            right: `calc(100% + ${borderWidth}px)`,
            width: `${arrowSizeNum}px`,
        },
        "&[data-popper-placement^='right'] [data-popper-arrow] div": {
            borderColor: 'transparent currentColor transparent transparent',
            transform: 'translateX(-50%)',
        },
    };
};
