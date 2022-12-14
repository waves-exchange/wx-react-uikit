import {
    AccordionItemProvider,
    IAccordionItemContext,
} from './AccordionItemContext';
import { Box, BoxProps } from '../Box/Box';
import React, { forwardRef, useCallback, useEffect, useState } from 'react';

export type IAccordionItem = BoxProps & {
    isOpen?: boolean;
    isDisabled?: boolean;
    onChange?: (isExpanded: boolean) => void;
};

export const AccordionItem = forwardRef<HTMLDivElement, IAccordionItem>(
    (
        { isOpen = false, isDisabled = false, children, onChange, ...rest },
        ref
    ) => {
        const [isExpanded, setIsExpanded] = useState(isOpen);

        useEffect(() => {
            setIsExpanded(isOpen);
        }, [isOpen]);

        const onToggle = useCallback(() => {
            setIsExpanded(!isExpanded);
            if (typeof onChange === 'function') {
                onChange(!isExpanded);
            }
        }, [isExpanded, onChange]);

        const context: IAccordionItemContext = {
            isExpanded,
            isDisabled,
            onToggle,
        };

        return (
            <AccordionItemProvider context={context}>
                <Box mb={10} ref={ref} {...rest}>
                    {children}
                </Box>
            </AccordionItemProvider>
        );
    }
);

AccordionItem.displayName = 'AccordionItem';
