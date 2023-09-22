import { Box } from '../Box/Box';
import { Radio } from './Radio';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { darkTheme, lightTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';
import { Flex } from '../Flex/Flex';

const stories = storiesOf('Radio', module);

const RadioExamples: React.FC = () => {
    return (
        <Flex
            flexDirection="column"
            backgroundColor="bg"
            color="text"
            height="100vh"
            p="$20"
        >
            <Box mb={24}>
                <Box mb="8px">
                    <Radio name="radio1" value="1">
                        Radio 1
                    </Radio>
                </Box>
                <Box mb="8px">
                    <Radio name="radio1" value="2">
                        Radio 2
                    </Radio>
                </Box>
                <Box mb="8px">
                    <Radio name="radio1" value="3" disabled>
                        Radio 3 Disabled
                    </Radio>
                </Box>
                <Box mb="8px">
                    <Radio name="radio1" value="4" defaultChecked disabled>
                        Radio 4 Disabled and checked by default
                    </Radio>
                </Box>
                <Box mb="8px">
                    <Radio name="radio1" value="5" isInvalid>
                        Radio 4 Invalid
                    </Radio>
                </Box>
            </Box>
        </Flex>
    );
};

stories.add('dark theme', () => (
    <ThemeProvider theme={darkTheme}>
        <RadioExamples />
    </ThemeProvider>
));

stories.add('light theme', () => (
    <ThemeProvider theme={lightTheme}>
        <RadioExamples />
    </ThemeProvider>
));
