import React from 'react';
import { storiesOf } from '@storybook/react';
import { defaultTheme } from '../../themes/default';
import { CircleCounter } from './CircleCounter';
import { Flex } from '../Flex/Flex';
import { ThemeProvider } from 'emotion-theming';

const stories = storiesOf('CircleCounter', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            p={30}
            backgroundColor="bg"
            justifyContent="center"
            alignItems="center"
        >
            <CircleCounter count={2} />
            <CircleCounter count={99} backgroundColor="main" />
            <CircleCounter count={999} backgroundColor="main" />
        </Flex>
    </ThemeProvider>
));
