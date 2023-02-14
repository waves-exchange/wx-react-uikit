import React, { ReactNode } from 'react';
import { storiesOf } from '@storybook/react';
import { Tooltip, TooltipProps } from './Tooltip';
import { Box } from '../Box/Box';
import { Button, ButtonProps } from '../Button/Button';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { Flex } from '../Flex/Flex';

const stories = storiesOf('Tooltip', module);

stories.add('simple', () => {
    const commonAnchorProps: ButtonProps = {
        variant: 'primary',
        display: 'inline-block',
        mt: 60,
        width: 200,
        p: 10,
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box p={20}>
                <Flex>
                    <Box mr="60px">
                        <Tooltip
                            isOpen={true}
                            variant="default"
                            label="Lorem ipsum dolor sit amet"
                        >
                            <Button {...commonAnchorProps}>
                                default tooltip isOpen
                            </Button>
                        </Tooltip>

                        <Tooltip
                            label="Lorem ipsum dolor sit amet"
                            variant="default"
                            placement="top"
                        >
                            <Button {...commonAnchorProps}>
                                default tooltip top
                            </Button>
                        </Tooltip>
                        <Tooltip
                            label="Lorem ipsum dolor sit amet"
                            variant="default"
                            placement="right"
                        >
                            <Button {...commonAnchorProps}>
                                default tooltip right
                            </Button>
                        </Tooltip>
                    </Box>
                    <Box>
                        <Tooltip
                            label="Lorem ipsum dolor sit amet"
                            variant="info"
                            placement="top"
                        >
                            <Button {...commonAnchorProps}>info tooltip</Button>
                        </Tooltip>

                        <Tooltip
                            label="Lorem ipsum dolor sit amet"
                            variant="info"
                            placement="top"
                        >
                            <Button {...commonAnchorProps}>
                                info tooltip left
                            </Button>
                        </Tooltip>
                        <Tooltip
                            label={(): ReactNode => (
                                <Box width="200px" borderRadius="$4">
                                    Lorem ipsum dolor sit amet Lorem ipsum dolor
                                    sit amet Lorem ipsum dolor sit amet Lorem
                                    ipsum dolor sit amet
                                </Box>
                            )}
                            variant="info"
                            placement="bottom"
                        >
                            <Button {...commonAnchorProps}>
                                info tooltip left
                            </Button>
                        </Tooltip>
                    </Box>
                </Flex>
            </Box>
        </ThemeProvider>
    );
});
