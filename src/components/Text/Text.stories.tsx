import { Box } from '../Box/Box';
import React from 'react';
import { Text } from './Text';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Text', module);

stories.add('simple - light theme', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box bg="#F3F3F3" color="main.$100" height="100vh">
            <Box p="10px">
                <Text>Body-1</Text>
            </Box>
            <Box p="10px">
                <Text variant="bodySemiBold1">Body SemiBold-1</Text>
            </Box>
            <Box p="10px">
                <Text variant="body2">Body 2</Text>
            </Box>
            <Box p="10px">
                <Text variant="bodySemiBold2">Body SemiBold - 2</Text>
            </Box>
            <Box p="10px">
                <Text variant="caption">Caption</Text>
            </Box>
            <Box p="10px">
                <Text variant="line">Line</Text>
            </Box>
            <Box p="10px">
                <Text variant="heading1">Heading-1</Text>
            </Box>
            <Box p="10px">
                <Text variant="heading2">Heading-2</Text>
            </Box>
            <Box p="10px">
                <Text variant="heading3">Heading-3</Text>
            </Box>
            <Box p="10px">
                <Text variant="heading4">Heading-4</Text>
            </Box>
            <Box p="10px">
                <Text variant="heading5">Heading-5</Text>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('simple - dark theme', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box bg="main.$800" color="secondary.$100" height="100vh">
            <Box p="10px">
                <Text>Body-1</Text>
            </Box>
            <Box p="10px">
                <Text variant="bodySemiBold1">Body SemiBold-1</Text>
            </Box>
            <Box p="10px">
                <Text variant="body2">Body 2</Text>
            </Box>
            <Box p="10px">
                <Text variant="bodySemiBold2">Body SemiBold - 2</Text>
            </Box>
            <Box p="10px">
                <Text variant="caption">Caption</Text>
            </Box>
            <Box p="10px">
                <Text variant="line">Line</Text>
            </Box>
            <Box p="10px">
                <Text variant="heading1">Heading-1</Text>
            </Box>
            <Box p="10px">
                <Text variant="heading2">Heading-2</Text>
            </Box>
            <Box p="10px">
                <Text variant="heading3">Heading-3</Text>
            </Box>
            <Box p="10px">
                <Text variant="heading4">Heading-4</Text>
            </Box>
            <Box p="10px">
                <Text variant="heading5">Heading-5</Text>
            </Box>
        </Box>
    </ThemeProvider>
));
