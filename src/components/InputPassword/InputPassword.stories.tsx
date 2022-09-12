import { Box } from '../Box/Box';
import { InputPassword } from './InputPassword';
import { Label } from '../Label/Label';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('InputPassword', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="darkGrey.$800"
            color="standard.$0"
        >
            <Box mb="$20">
                <Label>
                    <Box mb="5px">Default</Box>
                    <InputPassword />
                </Label>
            </Box>

            <Box mb="$20">
                <Label>
                    <Box mb="5px">Disabled</Box>
                    <InputPassword disabled={true} />
                </Label>
            </Box>

            <Box mb="$20">
                <Label>
                    <Box mb="5px">Error</Box>
                    <InputPassword aria-invalid={true} />
                </Label>
            </Box>
        </Box>
    </ThemeProvider>
));
