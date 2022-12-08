import * as React from 'react';
import { Flex, TFlexProps } from '../Flex/Flex';
import { TTextProps, Text } from '../Text/Text';
import { getMainColors } from './helpers';

export type TPlateNoteType = 'info' | 'warning' | 'error';

export type TPlateNote = TFlexProps & {
    type?: TPlateNoteType;
    title?: string;
    text?: string;
    textProps?: TTextProps;
};

export const PlateNote: React.FC<TPlateNote> = ({
    type = 'info',
    title,
    text,
    textProps = {},
    children,
    ...rest
}) => {
    const { borderColor, titleColor, bgColor } = getMainColors(type);

    return (
        <Flex
            flexDirection="column"
            border="1px dashed"
            borderColor={borderColor}
            borderRadius="$4"
            backgroundColor={bgColor}
            p="16px"
            {...rest}
        >
            {title ? (
                <Text
                    variant="bodySemiBold1"
                    color={titleColor}
                    mb="12px"
                    {...textProps}
                >
                    {title}
                </Text>
            ) : null}
            {text ? (
                <Text
                    variant="body2"
                    color={titleColor}
                    mb="12px"
                    {...textProps}
                >
                    {text}
                </Text>
            ) : null}
            {children ? (
                <Text variant="caption" color="text">
                    {children}
                </Text>
            ) : null}
        </Flex>
    );
};
