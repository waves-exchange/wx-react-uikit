import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { IconButton } from './IconButton';
import React from 'react';
import { Text } from '../Text/Text';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { iconQuestion } from '../../icons/question';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('IconButton', module);

stories.add('simple', () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Box height="100vh" p="16px" bg="darkGrey.$700">
                <Flex mb="10px">
                    <IconButton mr="10px" disabled={true}>
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                    </IconButton>
                    <IconButton
                        mr="10px"
                        variant="transparent"
                        variantSize="medium"
                        disabled={true}
                    >
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                    </IconButton>
                    <IconButton mr="10px">
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                    </IconButton>
                    <IconButton variant="transparent" variantSize="medium">
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                    </IconButton>
                </Flex>
                <Flex mb="10px">
                    <IconButton mr="10px" disabled={true}>
                        <Text mr="10px">IconQuestion</Text>
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                    </IconButton>
                    <IconButton
                        mr="10px"
                        variant="transparent"
                        variantSize="medium"
                        disabled={true}
                    >
                        <Text mr="10px">IconQuestion</Text>
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                    </IconButton>
                    <IconButton mr="10px">
                        <Text mr="10px">IconQuestion</Text>
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                    </IconButton>
                    <IconButton variant="transparent" variantSize="medium">
                        <Text mr="10px">IconQuestion</Text>
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                    </IconButton>
                </Flex>
                <Flex>
                    <IconButton disabled={true}>
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                        <Text ml="10px">IconQuestion</Text>
                    </IconButton>
                    <IconButton
                        variant="transparent"
                        variantSize="medium"
                        disabled={true}
                        ml="10px"
                    >
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                        <Text ml="10px">IconQuestion</Text>
                    </IconButton>
                    <IconButton ml="10px">
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                        <Text ml="10px">IconQuestion</Text>
                    </IconButton>
                    <IconButton
                        variant="transparent"
                        variantSize="medium"
                        ml="10px"
                    >
                        <Icon
                            icon={iconQuestion}
                            size={20}
                            sx={{
                                fill: 'transparent',
                            }}
                        />
                        <Text ml="10px">IconQuestion</Text>
                    </IconButton>
                </Flex>
            </Box>
        </ThemeProvider>
    );
});
