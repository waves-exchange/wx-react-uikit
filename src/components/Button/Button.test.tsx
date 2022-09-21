import {
    darkThemeColors,
    fontSizes,
    lineHeights,
    space,
} from '../../themes/constants';

import { Button } from './Button';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { darkTheme } from '../../themes/default';
import { render } from '@testing-library/react';

describe('Button', () => {
    it('render - primary extraLarge', () => {
        const { container } = render(
            <ThemeProvider theme={darkTheme}>
                <Button variant="primary" variantSize="extraLarge">
                    Test Button
                </Button>
            </ThemeProvider>
        );

        const button = container.firstChild;

        expect(button).toHaveProperty('textContent', 'Test Button');
        expect(button).toHaveProperty('type', 'button');
        expect(button).toHaveStyleRule('color', '#fff');
        expect(button).toHaveStyleRule('font-size', fontSizes.$16);
        expect(button).toHaveStyleRule('line-height', lineHeights.$24);
        expect(button).toHaveStyleRule(
            'background-color',
            darkThemeColors.primary.$300
        );
        expect(button).toHaveStyleRule('height', '56px');
        expect(button).toHaveStyleRule('font-weight', '500');
        expect(button).toHaveStyleRule('padding-left', space.$16);
        expect(button).toHaveStyleRule('padding-right', space.$16);
    });

    it('render - transparent extraLarge', () => {
        const { container } = render(
            <ThemeProvider theme={darkTheme}>
                <Button variant="transparent" variantSize="extraLarge">
                    Test Button
                </Button>
            </ThemeProvider>
        );

        const button = container.firstChild;

        expect(button).toHaveProperty('textContent', 'Test Button');
        expect(button).toHaveProperty('type', 'button');
        expect(button).toHaveStyleRule('color', '#fff');
        expect(button).toHaveStyleRule('font-size', fontSizes.$16);
        expect(button).toHaveStyleRule('line-height', lineHeights.$24);
        expect(button).toHaveStyleRule('background-color', 'transparent');
        expect(button).toHaveStyleRule('height', '56px');
        expect(button).toHaveStyleRule('font-weight', '500');
        expect(button).toHaveStyleRule('padding-left', space.$16);
        expect(button).toHaveStyleRule('padding-right', space.$16);
    });
});
