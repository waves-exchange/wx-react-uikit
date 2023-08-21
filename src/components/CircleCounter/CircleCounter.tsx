import * as React from 'react';
import { Flex, TFlexProps } from '../Flex/Flex';
import { Text } from '../Text/Text';

interface ICircleCounter extends TFlexProps {
    count?: string | number;
}

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

export const CircleCounter: React.FC<ICircleCounter> = ({ count, ...rest }) => {
    return (
        <Flex
            width={16}
            height={16}
            justifyContent="center"
            alignItems="center"
            borderRadius="circle"
            backgroundColor="textnegative"
            {...rest}
        >
            <Text variant="line" color="standard.$0">
                {normalizeCount(count)}
            </Text>
        </Flex>
    );
};

CircleCounter.displayName = 'CircleCounter';
