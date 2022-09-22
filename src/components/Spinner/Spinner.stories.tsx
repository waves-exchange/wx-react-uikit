import React from 'react';
import { storiesOf } from '@storybook/react';
import { Spinner } from './Spinner';
import { ThemeProvider } from 'emotion-theming';
import { Flex } from '../Flex/Flex';
import { darkTheme, lightTheme } from '../../themes/default';

const stories = storiesOf('Spinner', module);

stories.add('simple DT', () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <Flex backgroundColor="bg" height="100vh" justifyContent="center">
                <Spinner />
            </Flex>
        </ThemeProvider>
    );
});

stories.add('simple LT', () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Flex backgroundColor="bg" height="100vh" justifyContent="center">
                <Spinner />
            </Flex>
        </ThemeProvider>
    );
});
