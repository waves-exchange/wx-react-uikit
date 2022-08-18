import { Box, BoxProps } from '../Box/Box';
import {
    TextShadowProps,
    styleFn,
    system,
    textShadow,
    variant,
} from 'styled-system';
import styled, { WithTheme } from '@emotion/styled';

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

export type TTextVariant = keyof typeof variants;

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
    })
);

Text.defaultProps = {
    as: 'span',
    variant: 'body1',
};
