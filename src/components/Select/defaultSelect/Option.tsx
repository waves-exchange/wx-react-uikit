import React from 'react';
import { Flex, TFlexProps } from '../../Flex/Flex';

export type DefaultOption = {
    id: string | null;
    value?: () => React.ReactNode;
    renderPlaceholder?: () => React.ReactNode;
};

export const Option: React.FC<TFlexProps & { option: DefaultOption }> = ({
    option: { value, renderPlaceholder },
    ...rest
}) => {
    return (
        <Flex
            justifyContent="space-between"
            flex={1}
            fontSize="$14"
            lineHeight="$24"
            {...rest}
        >
            {value ? value() : renderPlaceholder ? renderPlaceholder() : ''}
        </Flex>
    );
};
