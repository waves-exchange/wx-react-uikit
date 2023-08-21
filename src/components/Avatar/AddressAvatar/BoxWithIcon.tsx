import * as React from 'react';
import { Box, BoxProps, Flex, IIcon, Icon, Text } from '../../..';
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
        <Icon icon={icon} size={10} color="text" />
    </Flex>
);

function normalizeCount(count?: string | number): string {
    const countNumber = Number(count);

    switch (true) {
        case isNaN(countNumber):
        case countNumber < 0:
            return '';
        case countNumber > 99:
            return '!';
        default:
            return String(countNumber);
    }
}

export const NotifyNode: React.FC<{ count?: number | string; bg?: string }> = ({
    count,
    bg,
}) => {
    return (
        <Box
            position="absolute"
            top={-4}
            left={-4}
            width={44}
            height={44}
            borderRadius="circle"
            border="2px solid"
            borderColor="textnegative"
        >
            <Box
                position="relative"
                width="100%"
                height="100%"
                borderRadius="circle"
                overflow="hidden"
            >
                <Box
                    position="absolute"
                    top={-5}
                    right={-5}
                    width={24}
                    height={24}
                    borderRadius="circle"
                    backgroundColor={bg}
                />
            </Box>
            <Flex
                position="absolute"
                zIndex={1}
                top={-5}
                right={-5}
                width={24}
                height={24}
                justifyContent="center"
                alignItems="center"
                borderRadius="circle"
            >
                <Flex
                    width={16}
                    height={16}
                    justifyContent="center"
                    alignItems="center"
                    borderRadius="circle"
                    backgroundColor="textnegative"
                >
                    <Text variant="line" color="standard.$0">
                        {count}
                    </Text>
                </Flex>
            </Flex>
        </Box>
    );
};

IconNode.displayName = 'IconNode';

type IBoxWithIcon = {
    icon: IIcon | null;
    tooltipLabel?: TTooltipLabel | null;
    popperOptions?: Partial<Options>;
    newsCounter?: number | string;
    bg?: string;
};

export const BoxWithIcon: React.FC<IBoxWithIcon & BoxProps> = ({
    children,
    icon,
    tooltipLabel,
    popperOptions,
    newsCounter,
    bg,
    ...rest
}) => {
    const notifyNode = useMemo(() => {
        const normalizedCounter = normalizeCount(newsCounter);

        return normalizedCounter ? (
            <NotifyNode count={normalizedCounter} bg={bg} />
        ) : null;
    }, [newsCounter, bg]);

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
