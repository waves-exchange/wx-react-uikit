import { Box } from '../Box/Box';
import { InputHTMLAttributes } from 'react';
import { InterpolationWithTheme } from '@emotion/core';
import { TDefaultTheme } from '../../interface';
import styled from '@emotion/styled';
import { variant } from 'styled-system';

export const inputSizeVariants = {
    medium: {
        fontSize: '$16',
        height: 'medium',
        paddingLeft: '$16',
        paddingRight: '$16',
    },
    mediumWE: {
        fontSize: '$13',
        height: 'medium',
    },
};

const defaultStyles = {
    backgroundColor: 'main.$300',
    borderColor: 'main.$300',
    borderRadius: '$4',
    color: 'standard.$0',
    '::placeholder': {
        color: 'basic.$400',
    },
    ':hover:not(:disabled)': {
        borderColor: 'basic.$800',
    },
    ':focus:not(:disabled)': {
        borderColor: 'primary.$300',
    },
    ':disabled': {
        backgroundColor: 'main.$600',
        '::placeholder': {
            color: 'main.$100',
        },
    },
    '&[aria-invalid="true"]': {
        '&, &:hover, &:focus': {
            borderColor: 'danger.$600',
        },
    },
};

export const inputVariants = {
    default: defaultStyles,
    defaultWE: {
        ...defaultStyles,
        '&[aria-checked="true"]': {
            borderColor: 'success.$500',
        },
    },
};

export type InputSize = keyof typeof inputSizeVariants;
export type InputVariant = keyof typeof inputVariants;

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    variantSize?: InputSize;
    variant?: InputVariant;
    paddingRight?: string;
    sx?: InterpolationWithTheme<TDefaultTheme>;
};

export const Input = styled(Box)<InputProps, TDefaultTheme>(
    variant({
        prop: 'variantSize',
        variants: inputSizeVariants,
    }),
    variant({
        prop: 'variant',
        variants: inputVariants,
    }),
    ({ paddingRight }) => (paddingRight ? { paddingRight } : undefined), // TODO Виктор обещал починить
    {
        outline: 0,
    }
);

Input.defaultProps = {
    as: 'input',
    border: 'solid 1px',
    width: '100%',
    variant: 'default',
    variantSize: 'medium',
};
