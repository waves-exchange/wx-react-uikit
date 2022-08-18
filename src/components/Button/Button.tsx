import { Box, BoxAsElement, BoxProps } from '../Box/Box';
import { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { styleFn, variant } from 'styled-system';
import styled, { WithTheme } from '@emotion/styled';
import { variantSizes, variants } from './styles';

export type Variant = keyof typeof variants;
export type VariantSize = keyof typeof variantSizes;

const flexCenter: styleFn = (
    props: WithTheme<PropsWithChildren<{ isFlexCenter?: boolean }>, object>
) => {
    if (props.isFlexCenter === true) {
        return {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        };
    }
};

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
    flexCenter,
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
