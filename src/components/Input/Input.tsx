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
};

const defaultStyles = {
    backgroundColor: 'surf',
    borderColor: 'surf',
    borderRadius: '$4',
    color: 'text',
    '::placeholder': {
        color: 'textsec',
    },
    ':hover:not(:disabled)': {
        borderColor: 'surf',
    },
    ':focus:not(:disabled)': {
        borderColor: 'main',
    },
    ':disabled': {
        color: 'textmuted',
        backgroundColor: 'surfmut',
        borderColor: 'surfmut',
        '::placeholder': {
            color: 'textmuted',
        },
    },
    '&[aria-invalid="true"]': {
        '&, &:hover, &:focus': {
            borderColor: 'negative',
        },
    },
};

export const inputVariants = { default: defaultStyles };

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
