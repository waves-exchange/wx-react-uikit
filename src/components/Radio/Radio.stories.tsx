import { Box } from '../Box/Box';
import { Radio } from './Radio';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Radio', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box>
            <Box mb="8px">
                <Radio name="radio1" value="1" defaultChecked={true}>
                    Radio 1
                </Radio>
            </Box>
            <Box mb="8px">
                <Radio name="radio1" value="2">
                    Radio 2
                </Radio>
            </Box>
        </Box>
    </ThemeProvider>
));
