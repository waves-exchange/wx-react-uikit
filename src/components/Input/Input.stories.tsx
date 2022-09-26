import { Box } from '../Box/Box';
import { Input } from './Input';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { darkTheme, lightTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Input', module);

stories.add('simple DT', () => (
    <ThemeProvider theme={darkTheme}>
        <Box height="100vh" p="$20" backgroundColor="bg" color="text">
            <Box mb="$20">
                <label>
                    Default
                    <Input placeholder="Placeholder" />
                </label>
            </Box>

            <Box mb="$20">
                <label>
                    Disabled
                    <Input
                        disabled={true}
                        placeholder="Placeholder"
                        name="name"
                    />
                </label>
            </Box>

            <Box mb="$20">
                <label>
                    Error
                    <Input aria-invalid={true} />
                </label>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('simple LT', () => (
    <ThemeProvider theme={lightTheme}>
        <Box height="100vh" p="$20" backgroundColor="bg" color="text">
            <Box mb="$20">
                <label>
                    Default
                    <Input placeholder="Placeholder" />
                </label>
            </Box>

            <Box mb="$20">
                <label>
                    Disabled
                    <Input
                        disabled={true}
                        placeholder="Placeholder"
                        name="name"
                    />
                </label>
            </Box>

            <Box mb="$20">
                <label>
                    Error
                    <Input aria-invalid={true} />
                </label>
            </Box>
        </Box>
    </ThemeProvider>
));
