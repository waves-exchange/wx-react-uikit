import { Box } from '../Box/Box';
import { Button } from '../Button/Button';
import { Flex } from '../Flex/Flex';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { darkTheme, lightTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Button', module);

stories.add('simple DT', () => (
    <ThemeProvider theme={darkTheme}>
        <Flex flexDirection="row" p={16} bg="bg">
            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    ExtraLarge
                </Box>
                <Button mb={16} variant="primary" variantSize="extraLarge">
                    Primary
                </Button>
                <Button mb={16} variant="transparent" variantSize="extraLarge">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Large
                </Box>
                <Button mb={16} variant="primary" variantSize="large">
                    Primary
                </Button>
                <Button mb={16} variant="transparent" variantSize="large">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Medium
                </Box>
                <Button mb={16} variant="primary" variantSize="medium">
                    Primary
                </Button>
                <Button mb={16} variant="transparent" variantSize="medium">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Small
                </Box>
                <Button mb={16} variant="primary" variantSize="small">
                    Primary
                </Button>
                <Button mb={16} variant="transparent" variantSize="small">
                    Action
                </Button>
            </Flex>
        </Flex>
    </ThemeProvider>
));

stories.add('disabled DT', () => (
    <ThemeProvider theme={darkTheme}>
        <Flex flexDirection="row" p={16} bg="bg">
            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    ExtraLarge
                </Box>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="extraLarge"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="extraLarge"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Large
                </Box>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="large"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="large"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Medium
                </Box>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="medium"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="medium"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Small
                </Box>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="small"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="small"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>
        </Flex>
    </ThemeProvider>
));

stories.add('simple LT', () => (
    <ThemeProvider theme={lightTheme}>
        <Flex flexDirection="row" p={16} bg="bg">
            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    ExtraLarge
                </Box>
                <Button mb={16} variant="primary" variantSize="extraLarge">
                    Primary
                </Button>
                <Button mb={16} variant="transparent" variantSize="extraLarge">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Large
                </Box>
                <Button mb={16} variant="primary" variantSize="large">
                    Primary
                </Button>
                <Button mb={16} variant="transparent" variantSize="large">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Medium
                </Box>
                <Button mb={16} variant="primary" variantSize="medium">
                    Primary
                </Button>
                <Button mb={16} variant="transparent" variantSize="medium">
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Small
                </Box>
                <Button mb={16} variant="primary" variantSize="small">
                    Primary
                </Button>
                <Button mb={16} variant="transparent" variantSize="small">
                    Action
                </Button>
            </Flex>
        </Flex>
    </ThemeProvider>
));

stories.add('disabled LT', () => (
    <ThemeProvider theme={lightTheme}>
        <Flex flexDirection="row" p={16} bg="bg">
            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    ExtraLarge
                </Box>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="extraLarge"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="extraLarge"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Large
                </Box>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="large"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="large"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Medium
                </Box>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="medium"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="medium"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>

            <Flex flexDirection="column" mr={16}>
                <Box color="text" as="h1">
                    Small
                </Box>
                <Button
                    mb={16}
                    variant="primary"
                    variantSize="small"
                    disabled={true}
                >
                    Primary
                </Button>
                <Button
                    mb={16}
                    variant="transparent"
                    variantSize="small"
                    disabled={true}
                >
                    Action
                </Button>
            </Flex>
        </Flex>
    </ThemeProvider>
));
