import React from 'react';
import { DefaultOption, Option } from './Option';
import { Flex, TFlexProps } from '../../Flex/Flex';
import { closeSelectDefault } from '../../../icons/closeSelectDefault';
import { Icon } from '../../Icon/Icon';

type TSelectedProps = TFlexProps & {
    opened: boolean;
    selected: DefaultOption;
    selectedOptionStylesProps?: TFlexProps;
    isDisabled?: boolean;
    isError?: boolean;
};

export const Selected: React.FC<TSelectedProps> = ({
    opened,
    selected,
    selectedOptionStylesProps,
    isDisabled,
    isError,
    ...rest
}) => {
    return (
        <Flex
            justifyContent="space-between"
            backgroundColor="surf"
            alignItems="center"
            py={12}
            pl={16}
            pr={12}
            className="selected"
            color={
                isDisabled
                    ? 'textmuted'
                    : selected.renderPlaceholder || isError
                    ? 'textsec'
                    : 'text'
            }
            {...rest}
        >
            <Option option={selected} {...selectedOptionStylesProps} />

            <Icon
                icon={closeSelectDefault}
                color="icon"
                transition="transform .3s"
                sx={{
                    transform: opened ? 'rotate(-180deg)' : 'rotate(0deg)',
                }}
                size={24}
            />
        </Flex>
    );
};
