import * as React from 'react';
import { Box, BoxProps, Flex, IIcon, Icon } from '../../..';
import { TTooltipLabel, TooltipIcon } from './TooltipIcon';
import { Options } from '@popperjs/core';
import { useMemo } from 'react';

interface IIconNode {
    icon: IIcon;
}

export const IconNode: React.FC<IIconNode> = ({ icon }) => (
    <Flex
        position="absolute"
        zIndex={1}
        bottom={0}
        right={0}
        width={16}
        height={16}
        justifyContent="center"
        alignItems="center"
        borderRadius="circle"
        backgroundColor="bgsec"
        cursor="pointer"
    >
        <Icon icon={icon} size={10} color="standard.$0" />
    </Flex>
);

export const NotifyNode: React.FC = () => (
    <Flex
        position="absolute"
        zIndex={1}
        top={0}
        right={0}
        width={10}
        height={10}
        justifyContent="center"
        alignItems="center"
        borderRadius="circle"
        backgroundColor="bgsec"
        cursor="pointer"
    >
        <Box size={6} borderRadius="circle" backgroundColor="textnegative" />
    </Flex>
);

IconNode.displayName = 'IconNode';

type IBoxWithIcon = {
    icon: IIcon | null;
    tooltipLabel?: TTooltipLabel | null;
    popperOptions?: Partial<Options>;
    hasNotify?: boolean;
};

export const BoxWithIcon: React.FC<IBoxWithIcon & BoxProps> = ({
    children,
    icon,
    tooltipLabel,
    popperOptions,
    hasNotify,
    ...rest
}) => {
    const notifyNode = useMemo(() => {
        return hasNotify ? <NotifyNode /> : null;
    }, [hasNotify]);

    const iconNode = useMemo(() => {
        if (!icon) {
            return null;
        }

        if (!tooltipLabel) {
            return <IconNode icon={icon} />;
        }

        return (
            <TooltipIcon
                icon={icon}
                label={tooltipLabel}
                popperOptions={popperOptions}
            />
        );
    }, [tooltipLabel, icon, popperOptions]);

    return (
        <Box position="relative" display="inline-block" {...rest}>
            {children}
            {notifyNode}
            {iconNode}
        </Box>
    );
};

BoxWithIcon.displayName = 'BoxWithIcon';
