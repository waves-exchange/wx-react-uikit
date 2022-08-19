import { Box } from '../Box/Box';
import { Heading } from './Heading';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Heading', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box p="10px">
            <Box>
                <Heading mb="10px">Heading 1</Heading>
            </Box>

            <Box>
                <Heading level={2} mb="10px">
                    Heading 2
                </Heading>
            </Box>

            <Box>
                <Heading level={3} mb="10px">
                    Heading 3
                </Heading>
            </Box>

            <Box>
                <Heading level={4} mb="10px">
                    Heading 4
                </Heading>
            </Box>

            <Box>
                <Heading level={5} mb="10px">
                    Heading 5
                </Heading>
            </Box>
        </Box>
    </ThemeProvider>
));
