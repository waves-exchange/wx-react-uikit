import { PlateNote } from '../PlateNote/PlateNote';
import React from 'react';
import { Text } from '../Text/Text';
import { ThemeProvider } from 'emotion-theming';
import { matchers } from 'jest-emotion';
import { render } from '@testing-library/react';

expect.extend(matchers);

describe('PlateNote', () => {
    let theme: any;

    beforeEach(() => {
        theme = {
            colors: {
                darkGrey: {
                    $500: '#495060',
                },
                basic: {
                    $300: '#B7BFD1',
                },
                danger: {
                    $300: '#E5494D',
                },
                yellow: {
                    $400: '#FAB400',
                },
                plateWarningTitle: '#FAB400',
                plateWarningBorder: '#FFB800',
            },
            fontSizes: {
                $12: '12px',
            },
        };
    });
    it('render default PlateNote', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <PlateNote text="Text" />
            </ThemeProvider>
        );
        const text = container.querySelector('span');
        const wrapper = container.querySelector('div');

        expect(text).toHaveStyleRule('color', '#495060');
        expect(text).toHaveStyleRule('font-size', '12px');
        expect(wrapper).toHaveStyleRule('border', '1px dashed');
        expect(wrapper).toHaveStyleRule('border-color', '#495060');
    });
    it('render error PlateNote', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <PlateNote text="Text" type="error" />
            </ThemeProvider>
        );
        const text = container.querySelector('span');
        const wrapper = container.querySelector('div');

        expect(text).toHaveStyleRule('color', '#E5494D');
        expect(wrapper).toHaveStyleRule('border-color', '#E5494D');
    });
    it('render warning PlateNote with custom styles', () => {
        const { container } = render(
            <ThemeProvider theme={theme}>
                <PlateNote text="Text" type="warning" p={40} />
            </ThemeProvider>
        );
        const wrapper = container.querySelector('div');
        const text = container.querySelector('span');

        expect(text).toHaveStyleRule('color', '#FAB400');
        expect(wrapper).toHaveStyleRule('border-color', '#FFB800');
        expect(wrapper).toHaveStyleRule('padding', '40px');
    });
    it('render warning PlateNote with children', () => {
        const { getByTestId } = render(
            <ThemeProvider theme={theme}>
                <PlateNote>
                    <Text data-testid="text" color="basic.$300">
                        TEXT
                    </Text>
                </PlateNote>
            </ThemeProvider>
        );
        const text = getByTestId('text');

        expect(text).toHaveStyleRule('color', '#B7BFD1');
    });
});
