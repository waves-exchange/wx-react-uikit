import React from 'react';
import { Flex, TFlexProps } from '../../Flex/Flex';
import { FeeOption, Option } from './Option';
import { iconCloseSelect } from '../../../icons/closeSelect';
import { iconOpenSelect } from '../../../icons/openSelect';
import { Icon } from '../../Icon/Icon';

type TSelectedProps = TFlexProps & {
    opened: boolean;
    selected: FeeOption;
    selectedOptionStylesProps?: TFlexProps;
};

export const Selected: React.FC<TSelectedProps> = ({
    opened,
    selected,
    selectedOptionStylesProps,
    ...rest
}) => (
    <Flex
        justifyContent="space-between"
        backgroundColor="basic.$900"
        border="1px solid"
        borderColor="darkGrey.$600"
        borderRadius="$4"
        p={15}
        {...rest}
    >
        <Option option={selected} {...selectedOptionStylesProps} />
        {opened ? (
            <Icon icon={iconCloseSelect} color="primary.$300" ml={10} />
        ) : (
            <Icon icon={iconOpenSelect} color="darkGrey.$100" ml={10} />
        )}
    </Flex>
);
