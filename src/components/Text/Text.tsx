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

const getStyleFabric =
    (
        breakpoints: string[],
        _variantsKeys: Array<keyof typeof variants | undefined | null>
    ) =>
    (property: keyof typeof variants[keyof typeof variants]) => {
        const findVariantKey = (index: number): string => {
            return _variantsKeys[index]
                ? (_variantsKeys[index] as 'string')
                : (_variantsKeys[Math.max(index - 1, 0)] as string);
        };

        const getValidKey = (i: number): string => findVariantKey(i) || 'body1';

        return breakpoints.map((bp, i) => {
            return variants[getValidKey(i)][property];
        });
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
        const stylesByVariant = getStyleFabric(
            props.theme.breakpoints,
            _variantsKeys
        );
        const fontProps = {
            fontSize: stylesByVariant('fontSize'),
            lineHeight: stylesByVariant('lineHeight'),
            fontWeight: stylesByVariant('fontWeight'),
            variant: undefined,
        };

        return css({ ...fontProps })(props.theme);
    }
);

Text.defaultProps = {
    as: 'span',
};
