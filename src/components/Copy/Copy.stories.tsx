import { Copy } from './Copy';
import { Flex } from '../Flex/Flex';
import { LightCopy } from './LightCopy';
import { CopyMini } from './CopyMini';
import React from 'react';
import { Text } from '../Text/Text';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Copy', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex p={20} backgroundColor="bg" flexDirection="column">
            <Copy
                inititialTooltipLabel="Copy address"
                copiedTooltipLabel="Copied!"
                text="this is text to be copied"
                ml={50}
            />
            <LightCopy text="this is text to be copied" ml={50}>
                <Text variant="body2" color="standard.$0">
                    3PCAB4sHXgvtu5NPoen6
                </Text>
            </LightCopy>
            <Copy
                mt={30}
                inititialTooltipLabel="Copy address"
                copiedTooltipLabel="Copied!"
                text="this is text to be copied"
            >
                <Text variant="body2" color="standard.$0">
                    3PCAB4sHXgvtu5NPoen6
                </Text>
            </Copy>
            <CopyMini
                mt={30}
                initLabel="Copy"
                copiedLabel="Copied!"
                text="this is text to be copied"
            />
            <CopyMini
                mt={30}
                initLabel="Copy"
                text="this is text to be copied"
                iconSize="large"
                wrapperStyles={(state) =>
                    state === 'copied' ? { color: 'main' } : {}
                }
            />
        </Flex>
    </ThemeProvider>
));
