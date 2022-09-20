import React, { FC, useCallback, useState } from 'react';
import { BoxProps } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { LightCopy } from './LightCopy';
import { Tooltip } from '../Tooltip/Tooltip';
import { iconCopy } from '../../icons/copy';

type CopyProps = BoxProps & {
    text: string;
    inititialTooltipLabel: string;
    copiedTooltipLabel: string;
    onTextCopy?(text: string): void;
};

export const iconTestId = 'copy-icon';

export const Copy: FC<CopyProps> = ({
    children,
    inititialTooltipLabel,
    copiedTooltipLabel,
    onTextCopy,
    text,
    ...rest
}) => {
    const [resetTimeout, setResetTimeout] = useState(-1);
    const [label, setLabel] = useState(inititialTooltipLabel);

    const handleClick = useCallback<(copiedText: string) => void>(() => {
        clearTimeout(resetTimeout);

        setLabel(copiedTooltipLabel);
        onTextCopy && onTextCopy(text);

        setResetTimeout(
            window.setTimeout(() => {
                setLabel(inititialTooltipLabel);
            }, 4000)
        );
    }, [
        copiedTooltipLabel,
        inititialTooltipLabel,
        onTextCopy,
        resetTimeout,
        text,
    ]);

    return (
        <LightCopy text={text} onTextCopy={handleClick} {...rest}>
            <Tooltip
                label={label}
                fontSize="$11"
                px="6px"
                py="3px"
                color="standard.$0"
                backgroundColor="darkGrey.$500"
                hasArrow={true}
                arrowSize="4px"
                arrowColor="darkGrey.$500"
                placement="bottom"
                borderRadius="$4"
                offset={2}
                showDelay={200}
            >
                <Flex
                    sx={{
                        cursor: 'pointer',
                        ':hover': {
                            '& > svg': {
                                color: 'icon',
                            },
                        },
                    }}
                    display="inline-flex"
                    position="relative"
                    py={2}
                    px={4}
                    ml={-4}
                    borderRadius="$4"
                    alignItems="center"
                >
                    {children}
                    <Icon
                        data-testid={iconTestId}
                        color="iconsec"
                        icon={iconCopy}
                        ml={children ? '5px' : 0}
                    />
                </Flex>
            </Tooltip>
        </LightCopy>
    );
};
