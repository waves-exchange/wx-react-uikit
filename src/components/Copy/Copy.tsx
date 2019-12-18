import React, { useCallback, useState } from 'react';
import { Flex, Icon, Text } from '../..';
import copy from 'copy-to-clipboard';
import { iconCopy } from '../../assets/icons/copy';
import { Tooltip } from './Tooltip';

interface ICopyProps {
    toCopyText: string;
    text?: string;
    onCopy?: (text: string, result: boolean) => void;
    tooltipText?: string;
}

export const Copy: React.FC<ICopyProps> = ({
    toCopyText,
    text,
    onCopy,
    tooltipText = 'Copy address',
}) => {
    const [hovered, setHovered] = useState<boolean>(false);
    const [copied, setCopied] = useState<boolean>(false);
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout> | null>(
        null
    );

    const onClick = useCallback(() => {
        const result = copy(toCopyText);

        if (timer) {
            clearTimeout(timer);
            setTimer(null);
        }

        if (onCopy) {
            onCopy(toCopyText, result);
        }

        if (result) {
            setCopied(true);
            setTimer(
                setTimeout(() => {
                    setCopied(false);
                    setTimer(null);
                }, 1000)
            );
        }
    }, [toCopyText, timer, onCopy]);

    const onMouseEnter = useCallback(() => {
        setHovered(true);
    }, []);

    const onMouseLeave = useCallback(() => {
        setHovered(false);
    }, []);

    return (
        <Flex
            sx={{
                ':hover': {
                    backgroundColor: 'basic.$900',
                    cursor: 'pointer',
                },
            }}
            display="inline-flex"
            position="relative"
            py={2}
            px={4}
            borderRadius="$4"
            alignItems="center"
            onClick={onClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
        >
            {text && (
                <Text
                    fontSize={13}
                    color="standard.$0"
                    lineHeight="18px"
                    mr={5}
                >
                    {text}
                </Text>
            )}
            <Icon color={hovered ? '#5A81EA' : '#9BA6B2'} icon={iconCopy} />

            {hovered && !copied && (
                <Tooltip>
                    <TooltipText text={tooltipText} />
                </Tooltip>
            )}
            {copied && (
                <Tooltip>
                    <TooltipText text="Copied!" />
                </Tooltip>
            )}
        </Flex>
    );
};

const TooltipText: React.FC<{ text: string }> = ({ text }) => (
    <Text fontSize={11} color="standard.$0" lineHeight="$14">
        {text}
    </Text>
);
