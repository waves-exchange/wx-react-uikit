import { Box, BoxProps } from '../Box/Box';
import React, {
    Children,
    cloneElement,
    isValidElement,
    useCallback,
    useEffect,
    useState,
} from 'react';

type TExpendedIndex = Array<number> | number;
export type TVariant = 'default' | 'faq' | 'transparent-faq';
export type TAccordion = Omit<BoxProps, 'onChange'> & {
    allowMultiple?: boolean;
    defaultIndex?: TExpendedIndex;
    onChange?: (expandedIndex?: TExpendedIndex) => void;
    variant?: TVariant;
};

export const Accordion: React.FC<TAccordion> = ({
    allowMultiple,
    defaultIndex,
    onChange,
    variant = 'default',
    children,
    ...rest
}) => {
    const initializeExpendedIndex = useCallback(() => {
        if (allowMultiple) {
            return Array.isArray(defaultIndex)
                ? defaultIndex
                : defaultIndex !== undefined
                ? [defaultIndex]
                : [];
        } else {
            return Array.isArray(defaultIndex) && defaultIndex.length > 0
                ? defaultIndex[0]
                : defaultIndex !== undefined
                ? defaultIndex
                : -1;
        }
    }, [allowMultiple, defaultIndex]);

    const [expandedIndex, setExpandedIndex] = useState<TExpendedIndex>(
        initializeExpendedIndex
    );

    useEffect(() => {
        setExpandedIndex(initializeExpendedIndex);
    }, [defaultIndex, initializeExpendedIndex]);

    const clones = Children.map(children, (child, index) => {
        const checkIsChildExpanded = (): boolean => {
            if (Array.isArray(expandedIndex)) {
                return expandedIndex.includes(index);
            }

            return expandedIndex === index;
        };

        if (isValidElement(child)) {
            return cloneElement(child, {
                isOpen: checkIsChildExpanded(),
                onChange: (isExpanded: boolean) => {
                    if (allowMultiple) {
                        let newIndexes;
                        const prevIndexes = Array.isArray(expandedIndex)
                            ? expandedIndex
                            : [expandedIndex];

                        if (isExpanded) {
                            newIndexes = [...prevIndexes, index];
                        } else {
                            newIndexes = prevIndexes.filter(
                                (itemIndex) => itemIndex !== index
                            );
                        }

                        setExpandedIndex(newIndexes);

                        if (typeof onChange === 'function') {
                            onChange(newIndexes);
                        }
                    } else {
                        let newIndex = -1;

                        if (isExpanded) {
                            newIndex = index;
                        }
                        setExpandedIndex(newIndex);
                        if (typeof onChange === 'function') {
                            onChange(newIndex);
                        }
                    }
                },
                variant,
            });
        } else {
            return null;
        }
    });

    return (
        <Box width="100%" {...rest}>
            {clones}
        </Box>
    );
};

Accordion.displayName = 'Accordion';
