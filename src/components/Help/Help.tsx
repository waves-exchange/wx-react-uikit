import React, { FC, useCallback, useMemo } from 'react';

import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { Placement } from '@popperjs/core';
import { Tooltip } from '../Tooltip/Tooltip';
import { iconQuestion } from '../../icons/question';

type HelpProps = {
    direction?: 'top' | 'bottom' | 'left' | 'right' | 'auto';
    align?: 'left' | 'center' | 'right' | 'auto';
    maxWidth?: string;
    contentBefore?: () => React.ReactElement | undefined;
    contentAfter?: () => React.ReactElement | undefined;
    isDisabledIcon?: boolean;
    isOpenContent?: boolean;
    sizeIcon?: string;
    colors?: {
        active?: string;
        hovered?: string;
        disabled?: string;
    };
};

export const Help: FC<HelpProps> = ({
    align,
    direction = 'auto',
    maxWidth = '288px',
    contentBefore,
    contentAfter,
    children,
    isDisabledIcon = false,
    isOpenContent = undefined,
    sizeIcon = '16px',
    colors = {},
}) => {
    colors.hovered = colors.hovered || 'help.hover';
    colors.active = colors.active || 'help.active';
    colors.disabled = colors.disabled || 'help.disabled';

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
                backgroundColor="surf"
                color="textsec"
                padding="9px 16px"
                borderRadius="$4"
                borderColor={colors.hovered}
                borderWidth="4px"
                fontSize="$14"
                lineHeight="$24"
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
        [children, colors]
    );

    const currentСolorOnHover = React.useMemo(() => {
        const currentColor = isDisabledIcon ? colors.disabled : colors.hovered;

        return {
            svg: {
                color: currentColor,
            },
        };
    }, [isDisabledIcon, colors]);

    const currentColorIcon = React.useMemo(() => {
        return isDisabledIcon ? colors.disabled : colors.active;
    }, [isDisabledIcon, colors]);

    return (
        <Tooltip
            label={tooltipContentFactory}
            placement={placement}
            hasArrow={true}
            arrowSize="4px"
            arrowColor={colors.hovered}
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
                }}
            >
                {typeof contentBefore === 'function' && (
                    <Box>{contentBefore()}</Box>
                )}
                <Icon
                    icon={iconQuestion}
                    size={sizeIcon}
                    color={currentColorIcon}
                    sx={{
                        fill: 'transparent',
                    }}
                />
                {typeof contentAfter === 'function' && (
                    <Box>{contentAfter()}</Box>
                )}
            </Flex>
        </Tooltip>
    );
};

Help.displayName = 'Help';
