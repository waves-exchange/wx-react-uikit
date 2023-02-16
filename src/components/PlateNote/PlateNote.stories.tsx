import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import { PlateNote } from './PlateNote';
import React from 'react';
import { Text } from '../Text/Text';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('PlateNote', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box
            backgroundColor="darkGrey.$800"
            height="100vh"
            p={10}
            fontSize="$12"
            color="standard.$0"
        >
            Default type ('info')
            <Box mt="8px" mb="16px">
                <PlateNote text="The minimum amount of deposit is 0.1 WEST" />
            </Box>
            Type 'info', custom text props
            <Box mt="8px" mb="16px">
                <PlateNote
                    text="The minimum amount of deposit is 0.1 WEST, the maximum amount of deposit is 500,000 WEST."
                    textProps={{ color: 'standard.$0' }}
                />
            </Box>
            Type 'warning'
            <Box mt="8px" mb="16px">
                <PlateNote
                    type="warning"
                    title="The minimum amount of deposit is 0.1 WEST, the maximum amount of deposit is 500,000 WEST."
                    text="The minimum amount of deposit is 0.1 WEST, the maximum amount of deposit is 500,000 WEST."
                >
                    The minimum amount of deposit is 0.1 WEST, the maximum
                    amount of deposit is 500,000 WEST.
                </PlateNote>
            </Box>
            Type 'error'
            <Box mt="8px" mb="16px">
                <PlateNote
                    type="error"
                    title="The minimum amount of deposit is 0.1 WEST, the maximum amount of deposit is 500,000 WEST."
                    text="The minimum amount of deposit is 0.1 WEST, the maximum amount of deposit is 500,000 WEST."
                >
                    The minimum amount of deposit is 0.1 WEST, the maximum
                    amount of deposit is 500,000 WEST.
                </PlateNote>
            </Box>
            With children
            <Box mt="8px" mb="16px">
                <PlateNote>
                    <Text color="basic.$300" fontSize="$13" lineHeight="$18">
                        1. You can buy USDN with your bank card or by direct
                        transfer to the Advanced Cash account.
                    </Text>
                    <Flex mt={10}>
                        <Text
                            color="basic.$300"
                            fontSize="$13"
                            lineHeight="$18"
                        >
                            2.&nbsp;
                        </Text>
                        <Text
                            color="basic.$300"
                            fontSize="$13"
                            lineHeight="$18"
                            fontWeight="bold"
                        >
                            The fee is 0%.
                        </Text>
                    </Flex>
                </PlateNote>
            </Box>
        </Box>
    </ThemeProvider>
));
