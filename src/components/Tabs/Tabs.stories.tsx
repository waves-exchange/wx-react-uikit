import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import React from 'react';
import { defaultTheme, lightTheme } from '../../themes/default';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';
import { Tab, TabPanel, TabPanels, Tabs, TabsList } from './Tabs';

const stories = storiesOf('Tabs', module);

stories.add('border', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="darkGrey.$800"
            color="standard.$0"
        >
            <Box mb="20px">
                <Tabs>
                    <TabsList variant="border" mb="16px">
                        <Tab variant="border" mr="32px">
                            <Text variant="body1">First</Text>
                        </Tab>
                        <Tab variant="border" mr="32px">
                            <Text variant="body1">Second</Text>
                        </Tab>
                        <Tab variant="border" mr="32px">
                            <Text variant="body1">Third</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('round', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="darkGrey.$800"
            color="standard.$0"
        >
            <Box mb="20px">
                <Tabs>
                    <TabsList variant="round" mb="16px">
                        <Tab variant="round">
                            <Text variant="body2">First</Text>
                        </Tab>
                        <Tab variant="round">
                            <Text variant="body2">Second</Text>
                        </Tab>
                        <Tab variant="round">
                            <Text variant="body2">Third</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('round light theme', () => (
    <ThemeProvider theme={lightTheme}>
        <Box height="100vh" p="$20" backgroundColor="bg" color="standard.$0">
            <Box mb="20px">
                <Tabs>
                    <TabsList variant="round" mb="16px">
                        <Tab variant="round">
                            <Text variant="body2">First</Text>
                        </Tab>
                        <Tab variant="round">
                            <Text variant="body2">Second</Text>
                        </Tab>
                        <Tab variant="round">
                            <Text variant="body2">Third</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('square', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="darkGrey.$800"
            color="standard.$0"
        >
            <Box mb="20px">
                <Tabs>
                    <TabsList variant="square" mb="16px">
                        <Tab variant="square">
                            <Text variant="body2">First</Text>
                        </Tab>
                        <Tab variant="square">
                            <Text variant="body2">Second</Text>
                        </Tab>
                        <Tab variant="square">
                            <Text variant="body2">Third</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('with selected', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="darkGrey.$800"
            color="standard.$0"
        >
            <Box mb="20px">
                <Tabs selectedIndex={1}>
                    <TabsList
                        borderBottom="1px solid"
                        borderColor="darkGrey.$700"
                        mb="16px"
                    >
                        <Tab mr="32px">
                            <Text variant="body1">First</Text>
                        </Tab>
                        <Tab mr="32px">
                            <Text variant="body1">Second</Text>
                        </Tab>
                        <Tab mr="32px">
                            <Text variant="body1">Third</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('with disabled', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="darkGrey.$800"
            color="standard.$0"
        >
            <Box mb="20px">
                <Tabs>
                    <TabsList
                        borderBottom="1px solid"
                        borderColor="darkGrey.$700"
                        mb="16px"
                    >
                        <Tab mr="32px">
                            <Text variant="body1">First</Text>
                        </Tab>
                        <Tab mr="32px">
                            <Text variant="body1">Second</Text>
                        </Tab>
                        <Tab mr="32px">
                            <Text variant="body1">Third</Text>
                        </Tab>
                        <Tab disabled>
                            <Text variant="body1">Disabled</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                        <TabPanel>Disabled content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));

stories.add('with value and onChange', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            height="100vh"
            p="$20"
            backgroundColor="darkGrey.$800"
            color="standard.$0"
        >
            <Box mb="20px">
                <Tabs onChange={(value): void => alert(value)}>
                    <TabsList
                        borderBottom="1px solid"
                        borderColor="darkGrey.$700"
                        mb="16px"
                    >
                        <Tab mr="32px" value={'First Tab Value'}>
                            <Text variant="body1">First</Text>
                        </Tab>
                        <Tab mr="32px" value={'Second Tab Value'}>
                            <Text variant="body1">Second</Text>
                        </Tab>
                        <Tab mr="32px" value={'Third Tab Value'}>
                            <Text variant="body1">Third</Text>
                        </Tab>
                        <Tab disabled value={'Disabled Tab Value'}>
                            <Text variant="body1">Disabled</Text>
                        </Tab>
                    </TabsList>
                    <TabPanels>
                        <TabPanel>First content</TabPanel>
                        <TabPanel>Second content</TabPanel>
                        <TabPanel>Third content</TabPanel>
                        <TabPanel>Disabled content</TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    </ThemeProvider>
));
