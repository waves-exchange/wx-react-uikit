import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Input } from '../Input/Input';
import { Label } from './Label';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Label', module);

stories.add('Label', () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Flex
                height="100vh"
                flexDirection="column"
                p={16}
                bg="darkGrey.$700"
                color="standard.$0"
            >
                <Box p="10px">
                    <Label>Label</Label>
                </Box>
                <Box p="10px">
                    <Label htmlFor="label">Label for input</Label>
                    <Input id="label" mt="5px" placeholder="Placeholder" />
                </Box>
            </Flex>
        </ThemeProvider>
    );
});
