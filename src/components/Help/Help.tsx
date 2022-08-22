import React, { FC, useCallback, useMemo } from 'react';
import { fontSizes, lineHeights } from '../../themes/constants';

import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { Placement } from '@popperjs/core';
import { TThemeCustom } from '../../themes/default';
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
    colorHoverIcon?: string;
    disabledIcon?: boolean;
    isOpenContent?: boolean;
    disabledColorIcon?: string;
    sizeIcon?: string;
    defaultColorIcon?: string;
};

export const Help: FC<HelpProps> = ({
    align,
    direction = 'auto',
    maxWidth = '288px',
    color,
    contentBefore,
    contentAfter,
    children,
    colorHoverIcon,
    disabledColorIcon,
    disabledIcon = false,
    isOpenContent = undefined,
    defaultColorIcon,
    sizeIcon = '16px',
}) => {
    const theme = useTheme<TThemeCustom>();
    const { help } = theme;

    color = color || help.hover;

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
                fontSize={fontSizes.$14}
                lineHeight={lineHeights.$24}
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

    const currentСolorOnHover = React.useMemo(() => {
        const currentColor = disabledIcon
            ? disabledColorIcon || help.disabled
            : colorHoverIcon || color;

        return {
            svg: {
                color: currentColor,
            },
        };
    }, [color, colorHoverIcon, disabledColorIcon, disabledIcon, help.disabled]);

    const currentColorIcon = React.useMemo(() => {
        return disabledIcon
            ? disabledColorIcon || help.disabled
            : defaultColorIcon || help.active;
    }, [
        defaultColorIcon,
        disabledColorIcon,
        disabledIcon,
        help.active,
        help.disabled,
    ]);

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
            isOpen={isOpenContent}
        >
            <Flex
                alignItems="center"
                cursor="pointer"
                sx={{
                    ':hover': currentСolorOnHover,
                    svg: {
                        fill: 'transparent',
                    },
                }}
            >
                {typeof contentBefore === 'function' && (
                    <Box>{contentBefore()}</Box>
                )}
                <Icon
                    icon={iconQuestion}
                    size={sizeIcon}
                    color={currentColorIcon}
                />
                {typeof contentAfter === 'function' && (
                    <Box>{contentAfter()}</Box>
                )}
            </Flex>
        </Tooltip>
    );
};

Help.displayName = 'Help';
