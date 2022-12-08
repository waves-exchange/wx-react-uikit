import React, { FC, useCallback, useMemo, useState } from 'react';
import { BoxProps } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { LightCopy } from './LightCopy';
import { iconCopy } from '../../icons/copy';
import { iconCheck } from '../../icons/check';

type CopyMiniProps = BoxProps & {
    text: string;
    initLabel?: string;
    copiedLabel?: string;
    onTextCopy?(text: string): void;
};

export const iconTestId = 'copy-icon';

export const CopyMini: FC<CopyMiniProps> = ({
    initLabel,
    copiedLabel,
    onTextCopy,
    text,
    ...rest
}) => {
    const [resetTimeout, setResetTimeout] = useState(-1);
    const [state, setState] = useState<'initial' | 'copied'>('initial');

    const label = useMemo(
        () => (state === 'copied' ? copiedLabel : initLabel),
        [copiedLabel, initLabel, state]
    );
    const handleClick = useCallback<(copiedText: string) => void>(() => {
        onTextCopy && onTextCopy(text);

        clearTimeout(resetTimeout);
        setState('copied');
        setResetTimeout(
            window.setTimeout(() => {
                setState('initial');
            }, 2000)
        );
    }, [onTextCopy, resetTimeout, text]);

    return (
        <LightCopy text={text} onTextCopy={handleClick} {...rest}>
            <Flex
                sx={{
                    cursor: 'pointer',
                    ':hover': {
                        '& > svg': {
                            color: state === 'copied' ? 'textpositive' : 'icon',
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
                color={state === 'copied' ? 'textpositive' : 'textsec'}
            >
                <Icon
                    data-testid={iconTestId}
                    color={state === 'copied' ? 'textpositive' : 'iconsec'}
                    icon={state === 'copied' ? iconCheck : iconCopy}
                    mr={label ? '5px' : 0}
                />
                {label}
            </Flex>
        </LightCopy>
    );
};
