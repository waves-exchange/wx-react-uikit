import React from 'react';
import { Flex, TFlexProps } from '../../Flex/Flex';
import { Box } from '../../Box/Box';
import { FeeOption, Option } from './Option';

type TListProps = Omit<TFlexProps, 'onSelect'> & {
    options: Array<FeeOption>;
    onSelect: (option: FeeOption) => void;
    optionStylesProps?: TFlexProps;
};

export const List: React.FC<TListProps> = ({
    options,
    onSelect,
    optionStylesProps,
    ...rest
}) => (
    <Flex
        flexDirection="column"
        justifyContent="space-between"
        borderRadius="$4"
        backgroundColor="basic.$900"
        mt={5}
        mb={5}
        sx={{
            '::-webkit-scrollbar': {
                width: 3,
            },
            '::-webkit-scrollbar-thumb': {
                backgroundColor: 'darkGrey.$200',
                borderRadius: 1.5,
                width: 3,
            },
            '::-webkit-scrollbar-track-piece': {
                marginBottom: 3,
                marginTop: 3,
            },
        }}
        maxHeight={147}
        overflowY="auto"
        {...rest}
    >
        {options.map((option) => (
            <Box
                key={option.id || 'WAVES'}
                sx={{
                    ':hover': {
                        backgroundColor: 'darkGrey.$600',
                    },
                }}
                px={15}
                py={12}
                onClick={() => onSelect(option)}
            >
                <Option option={option} {...optionStylesProps} />
            </Box>
        ))}
    </Flex>
);
