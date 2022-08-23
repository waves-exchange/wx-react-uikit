import { Box } from '../Box/Box';
import { InputWithTag } from './InputWithTag';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('InputWithTag', module);

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
                    WithTag
                    <InputWithTag placeholder="Placeholder" tag="name" />
                </label>
            </Box>
            <Box mb="$20">
                <label>
                    Disabled
                    <InputWithTag
                        placeholder="Placeholder"
                        tag="name"
                        disabled={true}
                    />
                </label>
            </Box>
        </Box>
    </ThemeProvider>
));
