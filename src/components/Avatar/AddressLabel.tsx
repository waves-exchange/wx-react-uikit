import React, { FC } from 'react';

import { BoxProps } from '../Box/Box';
import { Copy } from '../Copy/Copy';
import { Flex } from '../Flex/Flex';
import { Text } from '../Text/Text';

const getShortAddress = (address: string): string =>
    `${address.slice(0, 8)}***${address.slice(-8)}`;

type Props = BoxProps & {
    address: string;
    isShort?: boolean;
    withCopy?: boolean;
    alias?: string;
    name?: string;
};

export const AddressLabel: FC<Props> = ({
    isShort,
    alias,
    name,
    withCopy,
    address,
    children,
    ...rest
}) => {
    const displayAddress =
        typeof alias === 'string'
            ? alias
            : isShort
            ? getShortAddress(address)
            : address;

    return (
        <Flex alignItems="center" {...rest}>
            {children}
            <Flex
                ml="$10"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
            >
                {name && (
                    <Text variant="caption" color="basic.$500">
                        {name}
                    </Text>
                )}
                {withCopy ? (
                    <Copy
                        inititialTooltipLabel="Copy address"
                        copiedTooltipLabel="Copied!"
                        text={address}
                    >
                        <Text variant="body2" color="standard.$0">
                            {displayAddress}
                        </Text>
                    </Copy>
                ) : (
                    <Text variant="body2" color="standard.$0">
                        {displayAddress}
                    </Text>
                )}
            </Flex>
        </Flex>
    );
};
