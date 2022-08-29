import { getByLabelText, render } from '@testing-library/react';

import { Box } from '../Box/Box';
import { Input } from '../Input/Input';
import { Label } from './Label';
import React from 'react';
import { matchers } from 'jest-emotion';

expect.extend(matchers);

describe('Label', () => {
    it('should render input element with label', () => {
        const { container } = render(
            <Label data-testid="label">
                <Box mb="10px">Label Text</Box>
                <Input data-testid="input" />
            </Label>
        );

        expect(getByLabelText(container, 'Label Text')).toBeTruthy();
    });
});
