import { Flex, TFlexProps } from '../Flex/Flex';
import React, { useCallback, useContext } from 'react';

import { AccordionItemContext } from './AccordionItemContext';
import { Icon } from '../Icon/Icon';
import { iconExpandAccordion } from '../../icons/expandAccordion';

export type TAccordionHeader = Omit<TFlexProps, 'onClick'> & {
    onClick?: () => void;
};

export const AccordionHeader: React.FC<TAccordionHeader> = ({
    onClick,
    children,
    ...rest
}) => {
    const { onToggle, isExpanded, isDisabled } =
        useContext(AccordionItemContext);

    const handleClick = useCallback(() => {
        if (isDisabled) {
            return;
        }
        if (typeof onClick === 'function') {
            onClick();
        }
        onToggle();
    }, [isDisabled, onClick, onToggle]);

    return (
        <Flex
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            px={16}
            py={14}
            // backgroundColor={isExpanded ? 'main.$500' : 'main.$600'}
            borderRadius="$4"
            boxShadow="0 2px 7px 0 rgba(0, 0, 0, .15)"
            transition="box-shadow 0.3s"
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            color="text"
            fontSize="$14"
            lineHeight="$24"
            // sx={
            //     !isDisabled
            //         ? {
            //               '&:hover': {
            //                   backgroundColor: 'main.$500',
            //                   boxShadow: '0 2px 7px 0 rgba(0, 0, 0, .12)',
            //               },
            //           }
            //         : {}
            // }
            {...rest}
            aria-disabled={isDisabled}
            aria-expanded={isExpanded}
            onClick={handleClick}
        >
            {children}
            <Icon
                icon={iconExpandAccordion}
                color="icon"
                transition="transform .3s"
                sx={{
                    transform: isExpanded ? 'rotate(-180deg)' : 'rotate(0deg)',
                }}
                size={16}
            />
        </Flex>
    );
};

AccordionHeader.displayName = 'AccordionHeader';
