import { defaultTheme, lightTheme } from '../../themes/default';

import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Help } from './Help';
import React from 'react';
import { Text } from '../Text/Text';
import { ThemeProvider } from 'emotion-theming';
import { colors } from '../../themes/constants';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Help', module);
const box = (
    <Box width="200px">
        <Text variant="body2">
            Enter this address into your Bitcoin client or wallet
        </Text>
        <Text variant="body2">
            Once the transaction is confirmed, the gateway will process the
            transfer of BTC to a token in your Waves account.
        </Text>
        <Text variant="body2">
            Please note that the gateway doesn't apply any fees for this
            operation.
        </Text>
        Please note that the gateway doesn't apply any fees for this operation.
        Please note that the gateway doesn't apply any fees for this operation.
    </Box>
);

stories.add('Bottom Left', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="main.$800"
        >
            <Text
                mr="10px"
                fontSize="15px"
                fontFamily="Roboto"
                color="basic.$500"
            >
                Set a single password for all your Waves.Exchange accounts.
            </Text>
            <Help direction="bottom" align="left">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Bottom Center', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="main.$800"
        >
            <Help direction="bottom" align="center">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Bottom Right', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="main.$800"
        >
            <Help direction="bottom" align="right">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Top Left', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="main.$800"
        >
            <Help direction="top" align="right">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Top Left width before content and after content', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="main.$800"
        >
            <Help
                direction="top"
                align="left"
                contentBefore={() => (
                    <Box color="standard.$0" mr="4px">
                        Before content
                    </Box>
                )}
                contentAfter={() => (
                    <Box color="standard.$0" ml="4px">
                        After content After content
                    </Box>
                )}
            >
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Top Left CustomColor', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="main.$800"
        >
            <Help
                direction="top"
                align="right"
                colors={{ hovered: colors.yellow.$600 }}
            >
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Disabled - dark theme', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="#000"
        >
            <Help
                direction="top"
                align="right"
                isDisabledIcon={true}
                isOpenContent={false}
            >
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Disabled - light theme', () => (
    <ThemeProvider theme={lightTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="#fff"
        >
            <Help
                direction="top"
                align="right"
                isDisabledIcon={true}
                isOpenContent={false}
            >
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Custom color Icon on hover', () => (
    <ThemeProvider theme={lightTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="#000"
        >
            <Help direction="top" align="right" colors={{ hovered: 'yellow' }}>
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Default custom color Icon', () => (
    <ThemeProvider theme={lightTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="#000"
        >
            <Help direction="top" align="right" colors={{ active: 'red' }}>
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Content help - light theme', () => (
    <ThemeProvider theme={lightTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="#fff"
        >
            <Help direction="top" align="right" isOpenContent={true}>
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Content help - dark theme', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="#000"
        >
            <Help direction="top" align="right" isOpenContent={true}>
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));

stories.add('Custom size icon', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex
            position="fixed"
            width="100%"
            height="100%"
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            p="16px"
            backgroundColor="#000"
        >
            <Help direction="top" align="right" sizeIcon="50px">
                {box}
            </Help>
        </Flex>
    </ThemeProvider>
));
