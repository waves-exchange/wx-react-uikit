import { IconButton, iconButtonTestId } from './IconButton';

import React from 'react';
import { render } from 'test-utils';

describe('<IconButton>', () => {
    it('renders with passed styles', () => {
        const hoverColor = 'black';
        const focusColor = 'red';
        const disabledColor = 'tomato';
        const disabledAndHoverColor = 'lightcoral';
        const _hover = { borderColor: hoverColor };
        const _focus = { borderColor: focusColor };
        const _disabled = { borderColor: disabledColor };
        const _disabledAndHover = { borderColor: disabledAndHoverColor };
        const { getByTestId } = render(
            <IconButton
                _hover={_hover}
                _focus={_focus}
                _disabled={_disabled}
                _disabledAndHover={_disabledAndHover}
            />
        );
        const iconButton = getByTestId(iconButtonTestId);

        expect(iconButton).toHaveStyleRule('border-color', hoverColor, {
            target: ':hover',
        });
        expect(iconButton).toHaveStyleRule('border-color', disabledColor, {
            target: ':disabled',
        });
        expect(iconButton).toHaveStyleRule(
            'border-color',
            disabledAndHoverColor,
            {
                target: ':hover:disabled',
            }
        );
        expect(iconButton).toHaveStyleRule('border-color', focusColor, {
            target: ':focus',
        });
    });

    it('forwards style prop', () => {
        const marginTop = 40;
        const { getByTestId } = render(<IconButton mt={marginTop} />);

        expect(getByTestId(iconButtonTestId)).toHaveStyle(
            `margin-top: ${marginTop}px`
        );
    });
});
