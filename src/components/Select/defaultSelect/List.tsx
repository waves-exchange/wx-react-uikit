import React from 'react';
import { Flex, TFlexProps } from '../../Flex/Flex';
import { Box } from '../../Box/Box';
import { DefaultOption, Option } from './Option';

type TListProps = Omit<TFlexProps, 'onSelect'> & {
    options: Array<DefaultOption>;
    onSelect: (option: DefaultOption) => void;
    optionStylesProps?: TFlexProps;
};

export const List: React.FC<TListProps> = ({
    options,
    onSelect,
    optionStylesProps,
    ...rest
}) => {
    return (
        <Flex
            flexDirection="column"
            justifyContent="space-between"
            borderRadius="$4"
            backgroundColor="surfmut"
            overflowY="auto"
            className="list"
            {...rest}
        >
            {options
                .filter((item) => item.id !== 'placeholder')
                .map((option) => (
                    <Box
                        key={option.id as string}
                        sx={{
                            ':hover': {
                                backgroundColor: 'surf',
                            },
                        }}
                        px={16}
                        py={12}
                        onClick={(): void => onSelect(option)}
                    >
                        <Option option={option} {...optionStylesProps} />
                    </Box>
                ))}
        </Flex>
    );
};
