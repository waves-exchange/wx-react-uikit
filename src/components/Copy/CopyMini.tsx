import React, {
    FC,
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { BoxProps } from '../Box/Box';
import { Flex, TFlexProps } from '../Flex/Flex';
import { Icon, IconProps } from '../Icon/Icon';
import { LightCopy } from './LightCopy';
import { iconCopy } from '../../icons/copy';
import { iconCheck } from '../../icons/check';

type CopyMiniProps = BoxProps & {
    text: string;
    initLabel?: string;
    copiedLabel?: string;
    onTextCopy?(text: string): void;
    wrapperStyles?: ((state: 'initial' | 'copied') => TFlexProps) | TFlexProps;
    iconSize?: IconProps['iconSize'];
};

const iconTestId = 'copy-icon';

export const CopyMini: FC<CopyMiniProps> = ({
    initLabel,
    copiedLabel,
    onTextCopy,
    text,
    wrapperStyles = {},
    iconSize,
    ...rest
}) => {
    const [resetTimeout, setResetTimeout] = useState(-1);
    const [state, setState] = useState<'initial' | 'copied'>('initial');
    const isMounted = useRef(true);

    const label = useMemo(
        () => (state === 'copied' ? copiedLabel || initLabel : initLabel),
        [copiedLabel, initLabel, state]
    );
    const handleClick = useCallback<(copiedText: string) => void>(() => {
        onTextCopy && onTextCopy(text);

        clearTimeout(resetTimeout);
        setState('copied');
        const timeout = window.setTimeout(() => {
            if (isMounted.current) {
                setState('initial');
            }
        }, 2000);

        setResetTimeout(timeout);
    }, [onTextCopy, resetTimeout, text]);

    useEffect(() => {
        return (): void => {
            isMounted.current = false;
        };
    }, []);

    return (
        <LightCopy text={text} onTextCopy={handleClick} {...rest}>
            <Flex
                sx={{
                    cursor: 'pointer',
                    ':hover': {
                        opacity: state === 'copied' ? 1 : 0.8,
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
                transition="0.3s"
                {...(typeof wrapperStyles === 'function'
                    ? wrapperStyles(state)
                    : wrapperStyles)}
            >
                <Icon
                    data-testid={iconTestId}
                    color={state === 'copied' ? 'textpositive' : 'icon'}
                    icon={state === 'copied' ? iconCheck : iconCopy}
                    mr={label ? '10px' : 0}
                    iconSize={iconSize}
                />
                {label}
            </Flex>
        </LightCopy>
    );
};
