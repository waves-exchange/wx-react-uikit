import { NAMES_THEME, TThemeCustom } from '../../themes/default';
import React, { FC, useCallback, useMemo } from 'react';

import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { Placement } from '@popperjs/core';
import { Tooltip } from '../Tooltip/Tooltip';
import { iconQuestion } from '../../icons/question';
import { useTheme } from 'emotion-theming';

type HelpProps = {
    direction?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
    align?: 'left' | 'center' | 'right' | 'auto';
    maxWidth?: string;
    color?: string;
    contentBefore?: () => React.ReactElement | undefined;
    contentAfter?: () => React.ReactElement | undefined;
    colorIcon?: string;
    disabled?: boolean;
    isOpen?: boolean;
    disabledColor?: string;
    sizeIcon?: string;
    defaultColorIcon?: string;
};

export const Help: FC<HelpProps> = ({
    align,
    direction = 'auto',
    maxWidth = '288px',
    color = 'primary.$300',
    contentBefore,
    contentAfter,
    children,
    colorIcon,
    disabledColor,
    disabled = false,
    isOpen = undefined,
    defaultColorIcon = '#848E9F',
    sizeIcon = '16px',
}) => {
    const theme = useTheme<TThemeCustom>();

    const placement = useMemo<Placement>(() => {
        switch (align) {
            case 'left':
                return `${direction}-start` as Placement;
            case 'right':
                return `${direction}-end` as Placement;
            default:
                return direction as Placement;
        }
    }, [direction, align]);

    const offset = useMemo(() => {
        const offsetY = direction === 'top' ? 12 : 8;

        switch (align) {
            case 'left':
                return [-16, offsetY];
            case 'right':
                return [16, offsetY];
            default:
                return [0, offsetY];
        }
    }, [align, direction]);

    const tooltipContentFactory = useCallback(
        () => (
            <Box
                backgroundColor="main.$300"
                color="basic.$400"
                padding="9px 16px"
                borderRadius="$4"
                borderColor={color}
                borderWidth="4px"
                fontSize="14px"
                lineHeight="24px"
                sx={{
                    '[data-popper-placement^="top"] &': {
                        borderBottomStyle: 'solid',
                    },
                    '[data-popper-placement^="bottom"] &': {
                        borderTopStyle: 'solid',
                    },
                    '[data-popper-placement^="left"] &': {
                        borderRightStyle: 'solid',
                    },
                    '[data-popper-placement^="right"] &': {
                        borderLeftStyle: 'solid',
                    },
                }}
            >
                {children}
            </Box>
        ),
        [children, color]
    );
    const defaultDisableColorIcon = React.useMemo(() => {
        return theme.name === NAMES_THEME.darkTheme ? 'main.$100' : 'main.$800';
    }, [theme.name]);

    const currentThemeOnHover = React.useMemo(() => {
        const currentColor = disabled
            ? disabledColor || defaultDisableColorIcon
            : colorIcon || color;

        return {
            '#circle': {
                stroke: currentColor,
            },
            '#figure': {
                stroke: currentColor,
            },
            '#dot': {
                fill: currentColor,
            },
        };
    }, [color, colorIcon, defaultDisableColorIcon, disabled, disabledColor]);

    return (
        <Tooltip
            label={tooltipContentFactory}
            placement={placement}
            hasArrow={true}
            arrowSize="4px"
            arrowColor={color}
            arrowPadding={align === 'center' ? 0 : 16}
            offset={offset}
            showDelay={500}
            interactive={true}
            maxWidth={maxWidth}
            isOpen={isOpen}
        >
            <Flex
                alignItems="center"
                cursor="pointer"
                sx={{
                    ':hover': currentThemeOnHover,
                    svg: {
                        fill: 'transparent',
                    },
                }}
            >
                {typeof contentBefore === 'function' && (
                    <Box>{contentBefore()}</Box>
                )}
                <Icon
                    icon={iconQuestion(
                        disabled
                            ? disabledColor || defaultDisableColorIcon
                            : defaultColorIcon,
                        Boolean(disabledColor || disabled),
                        theme
                    )}
                    size={sizeIcon}
                />
                {typeof contentAfter === 'function' && (
                    <Box>{contentAfter()}</Box>
                )}
            </Flex>
        </Tooltip>
    );
};

Help.displayName = 'Help';
