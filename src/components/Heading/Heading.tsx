import React, { ElementType, FC } from 'react';
import { TTextProps, Text } from '../Text/Text';

type HeadingLevel = 1 | 2 | 3 | 4 | 5;

export type HeadingProps = TTextProps & {
    level?: HeadingLevel;
};

export const Heading: FC<HeadingProps> = ({ level, children, ...rest }) => (
    <Text
        as={`h${String(level)}` as ElementType}
        m={0}
        variant={[
            `heading${level}Mobile`,
            `heading${level}Mobile`,
            `heading${level}`,
        ]}
        {...rest}
    >
        {children}
    </Text>
);

Heading.defaultProps = {
    level: 1,
    fontWeight: 700,
};
