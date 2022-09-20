import * as React from 'react';
import { Flex, TFlexProps } from '../Flex/Flex';
import { TTextProps, Text } from '../Text/Text';
import { getMainColors } from './helpers';

export type TPlateNoteType = 'info' | 'warning' | 'error';

export type TPlateNote = TFlexProps & {
    type?: TPlateNoteType;
    text?: string;
    textProps?: TTextProps;
};

export const PlateNote: React.FC<TPlateNote> = ({
    type = 'info',
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
            {text ? (
                <Text variant="caption" color={titleColor} {...textProps}>
                    {text}
                </Text>
            ) : null}
            {children}
        </Flex>
    );
};
