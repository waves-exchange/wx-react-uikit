import React, {
    FC,
    forwardRef,
    useCallback,
    useLayoutEffect,
    useMemo,
    useRef,
} from 'react';
import {
    Instance,
    Options,
    VirtualElement,
    createPopper,
} from '@popperjs/core';
import { Box, BoxProps } from '../Box/Box';
import { mergeOptions } from './helpers';

export type PopperModifierOptions = {
    arrowPadding?: number; // prevents arrow from shifting to very edge of popper(needed when popper has border radius)
    offset?: number | number[]; // displace a popper from its anchor element
};

type Popper = BoxProps & {
    arrowEl?: Element;
    anchorEl: Element | VirtualElement;
    isOpen?: boolean;
    options?: Partial<Options>;
    modifierOptions?: PopperModifierOptions;
};

const defaultOptions: Partial<Options> = {
    placement: 'left',
    strategy: 'absolute',
};
const defaultModifierOptions: PopperModifierOptions = {
    arrowPadding: 5,
    offset: [0, 8],
};

export const Popper: FC<Popper> = ({
    arrowEl,
    anchorEl,
    children,
    isOpen,
    options = {},
    modifierOptions = {},
    ...rest
}) => {
    const popperElemRef = useRef<HTMLElement>();
    const popperInstanceRef = useRef<Instance>();

    const mergedOptions = useMemo(
        () =>
            mergeOptions(
                {
                    ...defaultOptions,
                    ...options,
                },
                { ...defaultModifierOptions, ...modifierOptions },
                arrowEl
            ),
        [options, modifierOptions, arrowEl]
    );

    const handlePopperRender = useCallback(() => {
        if (!anchorEl || !popperElemRef.current || !arrowEl) {
            return;
        }

        popperInstanceRef.current = createPopper(
            anchorEl,
            popperElemRef.current,
            mergedOptions
        );
    }, [anchorEl, arrowEl, mergedOptions]);

    const handleMountRef = useCallback(
        (node) => {
            popperElemRef.current = node;
            handlePopperRender();
        },
        [handlePopperRender]
    );

    useLayoutEffect(() => {
        return (): void => {
            popperInstanceRef.current && popperInstanceRef.current.destroy();
        };
    });

    if (!isOpen) return null;

    return (
        <Box ref={handleMountRef} {...rest}>
            {children}
        </Box>
    );
};

export const PopperArrow = forwardRef<HTMLDivElement>((props, ref) => {
    return (
        <div x-arrow="" data-popper-arrow={true} ref={ref}>
            <div />
        </div>
    );
});
