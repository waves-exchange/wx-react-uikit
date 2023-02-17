import { AssetLogo, AssetLogoProps } from './AssetLogo';
import { Box, BoxProps } from '../Box/Box';
import { IIcon, Icon } from '../Icon/Icon';
import React, { FC, ReactNode } from 'react';
import { Flex } from '../Flex/Flex';
import { Options } from '@popperjs/core';
import { Text } from '../Text/Text';
import { Tooltip } from '../Tooltip/Tooltip';

type AssetLogoWithIconProps = BoxProps &
    AssetLogoProps & {
        icon: IIcon;
        iconLabel: string;
        iconVisible: boolean;
        popperOptions: Partial<Options>;
    };

export const AssetLogoWithIcon: FC<AssetLogoWithIconProps> = ({
    assetId,
    name,
    logo,
    variant,
    popperOptions,
    icon,
    iconLabel,
    iconVisible,
    size,
    ...rest
}) => {
    return (
        <Box position="relative" {...rest}>
            <AssetLogo
                assetId={assetId}
                name={name}
                logo={logo}
                variant={variant}
                size={size}
            />
            {iconVisible && (
                <Tooltip
                    variant="info"
                    label={(): ReactNode => (
                        <Flex
                            color="text"
                            width="max-content"
                            maxWidth="100%"
                            alignItems="center"
                        >
                            <Flex
                                alignItems="center"
                                justifyContent="center"
                                size="16px"
                                borderRadius="circle"
                                backgroundColor="surf"
                                flex="none"
                            >
                                <Icon icon={icon} size={10} color="icon" />
                            </Flex>
                            <Text ml="$8" variant="body2">
                                {iconLabel}
                            </Text>
                        </Flex>
                    )}
                    popperOptions={{
                        modifiers: [
                            {
                                name: 'flip',
                                enabled: false,
                            },
                        ],
                        strategy: 'fixed',
                        ...popperOptions,
                    }}
                >
                    <Flex
                        position="absolute"
                        bottom={0}
                        right={0}
                        width={14}
                        height={14}
                        justifyContent="center"
                        alignItems="center"
                        borderRadius="circle"
                        backgroundColor="surf"
                        cursor="pointer"
                        zIndex={2}
                    >
                        <Icon icon={icon} size={8} color="icon" />
                    </Flex>
                </Tooltip>
            )}
        </Box>
    );
};
