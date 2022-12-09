import { fontSizes, lineHeights } from '../../themes/constants';

import React from 'react';
import { Text } from './Text';
import { darkTheme } from '../../themes/default';
import { matchers } from 'jest-emotion';
import { render } from '@testing-library/react';

expect.extend(matchers);

describe('Text - dark theme', () => {
    it('render - variant body1', () => {
        const { getByTestId } = render(
            <Text variant="body1" theme={darkTheme} data-testid="text">
                Test Text
            </Text>
        );
        const text = getByTestId('text');

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('font-size', fontSizes.$16);
        expect(text).toHaveStyleRule('line-height', lineHeights.$24);
    });
    it('render - variant body2', () => {
        const { getByTestId } = render(
            <Text variant="body2" theme={darkTheme} data-testid="text">
                Test Text
            </Text>
        );
        const text = getByTestId('text');

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('font-size', fontSizes.$14);
        expect(text).toHaveStyleRule('line-height', lineHeights.$20);
    });
    it('render - variant caption', () => {
        const { getByTestId } = render(
            <Text variant="caption" theme={darkTheme} data-testid="text">
                Test Text
            </Text>
        );
        const text = getByTestId('text');

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('font-size', fontSizes.$12);
        expect(text).toHaveStyleRule('line-height', lineHeights.$16);
    });
    it('render - variant line', () => {
        const { getByTestId } = render(
            <Text variant="line" theme={darkTheme} data-testid="text">
                Test Text
            </Text>
        );
        const text = getByTestId('text');

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('font-size', fontSizes.$10);
        expect(text).toHaveStyleRule('line-height', lineHeights.$16);
    });

    it('render - variant heading1', () => {
        const { getByTestId } = render(
            <Text variant="heading1" theme={darkTheme} data-testid="text">
                Test Text
            </Text>
        );
        const text = getByTestId('text');

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('font-size', fontSizes.$56);
        expect(text).toHaveStyleRule('font-weight', '700');
        expect(text).toHaveStyleRule('line-height', lineHeights.$64);
    });
    it('render - variant heading2', () => {
        const { getByTestId } = render(
            <Text variant="heading2" theme={darkTheme} data-testid="text">
                Test Text
            </Text>
        );
        const text = getByTestId('text');

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('font-size', fontSizes.$48);
        expect(text).toHaveStyleRule('font-weight', '700');
        expect(text).toHaveStyleRule('line-height', lineHeights.$56);
    });
    it('render - variant heading3', () => {
        const { getByTestId } = render(
            <Text variant="heading3" theme={darkTheme} data-testid="text">
                Test Text
            </Text>
        );
        const text = getByTestId('text');

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('font-size', fontSizes.$32);
        expect(text).toHaveStyleRule('font-weight', '700');
        expect(text).toHaveStyleRule('line-height', lineHeights.$40);
    });
    it('render - variant heading4', () => {
        const { getByTestId } = render(
            <Text variant="heading4" theme={darkTheme} data-testid="text">
                Test Text
            </Text>
        );
        const text = getByTestId('text');

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('font-size', fontSizes.$24);
        expect(text).toHaveStyleRule('font-weight', '700');
        expect(text).toHaveStyleRule('line-height', lineHeights.$32);
    });
    it('render - variant heading5', () => {
        const { getByTestId } = render(
            <Text variant="heading5" theme={darkTheme} data-testid="text">
                Test Text
            </Text>
        );
        const text = getByTestId('text');

        expect(text).toHaveProperty('textContent', 'Test Text');
        expect(text).toHaveStyleRule('font-size', fontSizes.$20);
        expect(text).toHaveStyleRule('font-weight', '700');
        expect(text).toHaveStyleRule('line-height', lineHeights.$24);
    });

    it('truncates', () => {
        const { getByTestId } = render(
            <Text isTruncated={true} data-testid="text">
                Test Text
            </Text>
        );
        const text = getByTestId('text');

        expect(text).toHaveStyleRule('text-overflow', 'ellipsis');
    });
});
