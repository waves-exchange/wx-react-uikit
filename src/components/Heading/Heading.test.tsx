import { Heading } from './Heading';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { darkTheme } from '../../themes/default';
import { render } from 'test-utils';

describe('<Heading>', () => {
    const text = 'Heading';

    it('forwards style props', () => {
        const marginTop = 40;

        const { getByText } = render(<Heading mt={marginTop}>{text}</Heading>);

        expect(getByText(text)).toHaveStyle(`margin-top: ${marginTop}px`);
    });

    it('render as tag H1', () => {
        const level = 1;

        const { getByText } = render(
            <ThemeProvider theme={darkTheme}>
                <Heading>{text}</Heading>
            </ThemeProvider>
        );

        expect(getByText(text)).toHaveStyleRule('font-weight', '700');
        expect(getByText(text).tagName).toBe(`H${level}`);
    });

    it('render as tag H2', () => {
        const level = 2;

        const { getByText } = render(
            <ThemeProvider theme={darkTheme}>
                <Heading level={level}>{text}</Heading>
            </ThemeProvider>
        );

        expect(getByText(text)).toHaveStyleRule('font-weight', '700');
        expect(getByText(text).tagName).toBe(`H${level}`);
    });

    it('render as tag H3', () => {
        const level = 3;

        const { getByText } = render(
            <ThemeProvider theme={darkTheme}>
                <Heading level={level}>{text}</Heading>
            </ThemeProvider>
        );

        expect(getByText(text)).toHaveStyleRule('font-weight', '700');
        expect(getByText(text).tagName).toBe(`H${level}`);
    });

    it('render as tag H4', () => {
        const level = 4;

        const { getByText } = render(
            <ThemeProvider theme={darkTheme}>
                <Heading level={level}>{text}</Heading>
            </ThemeProvider>
        );

        expect(getByText(text)).toHaveStyleRule('font-weight', '700');
        expect(getByText(text).tagName).toBe(`H${level}`);
    });

    it('render as tag H5', () => {
        const level = 5;

        const { getByText } = render(
            <ThemeProvider theme={darkTheme}>
                <Heading level={level}>{text}</Heading>
            </ThemeProvider>
        );

        expect(getByText(text)).toHaveStyleRule('font-weight', '700');
        expect(getByText(text).tagName).toBe(`H${level}`);
    });
});
