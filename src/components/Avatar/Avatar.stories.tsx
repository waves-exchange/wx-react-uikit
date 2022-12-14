import { AddressAvatar } from './AddressAvatar/AddressAvatar';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { USER_TYPES } from './AddressAvatar/AddressAvatar';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Avatar', module);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Flex flexDirection="row" p={16} bg="darkGrey.$700">
            <Box mr={32}>
                <Box color="standard.$0" mb="16px">
                    {USER_TYPES.wavesKeeper}
                </Box>
                <Box size={36}>
                    <AddressAvatar
                        tooltipLabels={{
                            keepertText: '',
                            ledgerText: '',
                            scriptText: '',
                        }}
                        size={36}
                        userType={USER_TYPES.wavesKeeper}
                        address={'adadasdasdasd'}
                    />
                </Box>
            </Box>
            <Box mr={32}>
                <Box color="standard.$0" mb="16px">
                    {USER_TYPES.ledger}
                </Box>
                <Box size={36}>
                    <AddressAvatar
                        tooltipLabels={{
                            keepertText: '',
                            ledgerText: '',
                            scriptText: '',
                        }}
                        size={36}
                        userType={USER_TYPES.ledger}
                        address={'adadasdasdasd'}
                    />
                </Box>
            </Box>
            <Box mr={32}>
                <Box color="standard.$0" mb="16px">
                    {USER_TYPES.metamask}
                </Box>
                <Box size={36}>
                    <AddressAvatar
                        tooltipLabels={{
                            keepertText: '',
                            ledgerText: '',
                            scriptText: '',
                        }}
                        size={36}
                        userType={USER_TYPES.metamask}
                        address={'adadasdasdasd'}
                    />
                </Box>
            </Box>
            <Box mr={32}>
                <Box color="standard.$0" mb="16px">
                    {'Device + Script'}
                </Box>
                <Box size={36}>
                    <AddressAvatar
                        tooltipLabels={{
                            keepertText: '',
                            ledgerText: '',
                            scriptText: '',
                        }}
                        isSmart={true}
                        size={36}
                        userType={USER_TYPES.metamask}
                        address={'adadasdasdasd'}
                    />
                </Box>
            </Box>
            <Box mr={32}>
                <Box color="standard.$0" mb="16px">
                    {'With Notify'}
                </Box>
                <Box size={36}>
                    <AddressAvatar
                        tooltipLabels={{
                            keepertText: '',
                            ledgerText: '',
                            scriptText: '',
                        }}
                        size={36}
                        hasNotify={true}
                        address={'adadasdasdasd'}
                    />
                </Box>
            </Box>
            <Box mr={32}>
                <Box color="standard.$0" mb="16px">
                    {USER_TYPES.seed}
                </Box>
                <Box size={36} mr={32}>
                    <AddressAvatar
                        tooltipLabels={{
                            keepertText: '',
                            ledgerText: '',
                            scriptText: '',
                        }}
                        size={36}
                        address={'adadasdasdasd'}
                    />
                </Box>
            </Box>
        </Flex>
    </ThemeProvider>
));
