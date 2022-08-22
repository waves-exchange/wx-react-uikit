import {
    InputHTMLAttributes,
    ReactElement,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Box } from '../Box/Box';
import { InterpolationWithTheme } from '@emotion/core';
import React from 'react';
import { TDefaultTheme } from '../../interface';
import { Text } from '../Text/Text';
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

type Input = (props: InputProps & { name?: string }) => ReactElement;
export const Input: Input = ({ name, ...props }) => {
    const [paddingRight, setPaddingRight] = useState(16);
    const nameRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(() => {
            if (nameRef.current) {
                console.log(nameRef.current.clientWidth + 24);
                setPaddingRight(nameRef.current.clientWidth + 24);
            }
        });
    }, [name]);

    return (
        <Box position="relative">
            <InputFC
                {...props}
                paddingRight={name ? `${paddingRight}px` : '16px'}
            />
            {name ? (
                <Text
                    fontSize="10px"
                    lineHeight="16px"
                    color={props.disabled ? 'main.$100' : 'basic.$400'}
                    position="absolute"
                    top="50%"
                    right="16px"
                    ref={nameRef}
                    sx={{
                        transform: 'translateY(-50%)',
                        textTransform: 'uppercase',
                    }}
                >
                    {name}
                </Text>
            ) : null}
        </Box>
    );
};

const InputFC = styled(Box)<InputProps, TDefaultTheme>(
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

InputFC.defaultProps = {
    as: 'input',
    border: 'solid 1px',
    width: '100%',
    variant: 'default',
    variantSize: 'medium',
};
