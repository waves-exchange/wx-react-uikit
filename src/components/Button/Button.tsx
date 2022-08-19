import { Box, BoxAsElement, BoxProps } from '../Box/Box';
import { variantSizes, variants } from './styles';

import { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

export type Variant = keyof typeof variants;
export type VariantSize = keyof typeof variantSizes;

type ButtonSpecificProps = {
    isFlexCenter?: boolean;
    variant?: Variant;
    variantSize?: VariantSize;
};

export type ButtonProps = BoxProps<
    HTMLButtonElement,
    ButtonHTMLAttributes<HTMLButtonElement>
> &
    ButtonSpecificProps;

export const Button = styled(Box as BoxAsElement<'button', ButtonProps>)(
    {
        cursor: 'pointer',
        ':disabled': {
            cursor: 'not-allowed',
        },
    },
    variant({
        prop: 'variant',
        variants,
    }),
    variant({
        prop: 'variantSize',
        variants: variantSizes,
    })
);

Button.defaultProps = {
    as: 'button',
    type: 'button',
    border: 0,
    borderRadius: '$4',
    transition: 'default',
    fontWeight: 500,
    variant: 'primary',
    variantSize: 'medium',
};
