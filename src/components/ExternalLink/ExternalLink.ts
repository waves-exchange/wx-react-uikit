import styled from '@emotion/styled';
import { AnchorHTMLAttributes } from 'react';
import { TTextProps, Text } from '../Text/Text';

export const ExternalLink =
    styled(Text)<AnchorHTMLAttributes<HTMLLinkElement> & TTextProps>();

ExternalLink.defaultProps = {
    as: 'a',
    display: 'inline',
    textDecoration: 'none',
    color: 'main',
    referrerPolicy: 'strict-origin',
    target: '_blank',
};

// TODO storybook
// TODO test
