import { Box } from '../Box/Box';
import { Input } from './Input';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Input', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="main.$800"
            color="standard.$0"
        >
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

            <Box mb="$20">
                <label>
                    Default Waves Exchange
                    <Input variant="defaultWE" variantSize="mediumWE" />
                </label>
            </Box>
        </Box>
    </ThemeProvider>
));
