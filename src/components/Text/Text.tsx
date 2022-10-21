import { Box, BoxProps } from '../Box/Box';
import {
    TextShadowProps,
    styleFn,
    system,
    textShadow,
    variant,
} from 'styled-system';
import styled, { WithTheme } from '@emotion/styled';
import css from '@styled-system/css';

import CSS from 'csstype';
import { PropsWithChildren } from 'react';
import { TDefaultTheme } from '../../interface';
import { variants } from './styles';

const truncate: styleFn = (
    props: WithTheme<PropsWithChildren<{ isTruncated?: boolean }>, object>
) => {
    if (props.isTruncated === true) {
        return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        };
    }
};

export type TTextVariant =
    | keyof typeof variants
    | Array<keyof typeof variants | undefined | null>;

type TextSpecificProps = {
    isTruncated?: boolean;
    variant?: TTextVariant;
    textDecoration?: CSS.TextDecorationProperty;
};

export type TTextProps = BoxProps & TextShadowProps & TextSpecificProps;

export const Text = styled(Box)<TTextProps, TDefaultTheme>(
    truncate,
    textShadow,
    system({ textDecoration: true }),
    variant({
        prop: 'variant',
        variants,
    }),
    (props) => {
        const _variantsKeys = props.variant;

        if (!Array.isArray(_variantsKeys)) {
            return {};
        }
        const breakpoints = props.theme.breakpoints;

        const getStyle = (
            property: keyof typeof variants[keyof typeof variants]
        ) => {
            return breakpoints.map((bp, i) => {
                const variant = _variantsKeys[i]
                    ? variants[_variantsKeys[i] as 'string']
                    : variants[_variantsKeys[Math.max(i - 1, 0)] || 'body1'];

                return variant[property];
            });
        };

        const fontProps = {
            fontSize: getStyle('fontSize'),
            lineHeight: getStyle('lineHeight'),
            fontWeight: getStyle('fontWeight'),
            variant: undefined,
        };

        return css({ ...fontProps })(props.theme);
    }
);

Text.defaultProps = {
    as: 'span',
};
