import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from '../../themes/default';
import { DotLoader } from './DotLoader';
import { Flex } from '../Flex/Flex';
import { ThemeProvider } from 'emotion-theming';

const stories = storiesOf('DotLoader', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            p={30}
            backgroundColor="bg"
            justifyContent="center"
            alignItems="center"
        >
            <DotLoader />
        </Flex>
    </ThemeProvider>
));
