import { AddressAvatar } from './AddressAvatar/AddressAvatar';
import { Box } from '../Box/Box';
import { Flex } from '../Flex/Flex';
import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { USER_TYPES } from './AddressAvatar/AddressAvatar';
import { defaultTheme, lightTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const ADDRESS = '3PNhY5S7kXx3MJgQW9wCpRzpNj2fVHViSFw';

const stories = storiesOf('Avatar', module);

const AvatarExamples: React.FC = () => {
    return (
        <Flex
            flexDirection="row"
            justifyContent="center"
            alignItems="start"
            bg="surf"
        >
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={16}
            >
                <Box color="text" mb="8px" sx={{ textDecoration: 'underline' }}>
                    User types
                </Box>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb={32}
                >
                    <Box color="text" mb="8px">
                        {USER_TYPES.wavesKeeper}
                    </Box>
                    <Box size={36}>
                        <AddressAvatar
                            tooltipLabels={{
                                keeperText: 'Waves Keeper',
                                ledgerText: 'Ledger',
                                scriptText: 'Script',
                            }}
                            size={36}
                            userType={USER_TYPES.wavesKeeper}
                            address={ADDRESS}
                        />
                    </Box>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb={32}
                >
                    <Box color="text" mb="8px">
                        {USER_TYPES.ledger}
                    </Box>
                    <Box size={36}>
                        <AddressAvatar
                            tooltipLabels={{
                                keeperText: '',
                                ledgerText: '',
                                scriptText: '',
                            }}
                            size={36}
                            userType={USER_TYPES.ledger}
                            address={ADDRESS}
                        />
                    </Box>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb={32}
                >
                    <Box color="text" mb="8px">
                        {USER_TYPES.metamask}
                    </Box>
                    <Box size={36}>
                        <AddressAvatar
                            tooltipLabels={{
                                keeperText: '',
                                ledgerText: '',
                                scriptText: '',
                            }}
                            size={36}
                            userType={USER_TYPES.metamask}
                            address={ADDRESS}
                        />
                    </Box>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb={32}
                >
                    <Box color="text" mb="8px">
                        {'Device + Script'}
                    </Box>
                    <Box size={36}>
                        <AddressAvatar
                            tooltipLabels={{
                                keeperText: 'Waves Keeper',
                                ledgerText: 'Ledger',
                                scriptText: 'Script',
                            }}
                            isSmart={true}
                            size={36}
                            userType={USER_TYPES.wavesKeeper}
                            address={ADDRESS}
                        />
                    </Box>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb={32}
                >
                    <Box color="text" mb="8px">
                        {USER_TYPES.seed}
                    </Box>
                    <Box size={36}>
                        <AddressAvatar
                            tooltipLabels={{
                                keeperText: '',
                                ledgerText: '',
                                scriptText: '',
                            }}
                            size={36}
                            address={ADDRESS}
                        />
                    </Box>
                </Flex>
            </Flex>
            <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                p={16}
            >
                <Box color="text" mb="8px" sx={{ textDecoration: 'underline' }}>
                    Notification mark
                </Box>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb={32}
                >
                    <Box color="text" mb="8px">
                        {'More than 99'}
                    </Box>
                    <Box size={36}>
                        <AddressAvatar
                            tooltipLabels={{
                                keeperText: 'Waves Keeper',
                                ledgerText: 'Ledger',
                                scriptText: 'Script',
                            }}
                            size={36}
                            userType={USER_TYPES.wavesKeeper}
                            address={ADDRESS}
                            newsCounter={200}
                            bg="bg"
                        />
                    </Box>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="center"
                    alignItems="center"
                    mb={32}
                >
                    <Box color="text" mb="8px">
                        {'Equal or less 99'}
                    </Box>
                    <Box size={36}>
                        <AddressAvatar
                            tooltipLabels={{
                                keeperText: '',
                                ledgerText: '',
                                scriptText: '',
                            }}
                            size={36}
                            userType={USER_TYPES.ledger}
                            address={ADDRESS}
                            newsCounter={99}
                            bg="surf"
                        />
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    );
};

stories.add('simple dark theme', () => (
    <ThemeProvider theme={defaultTheme}>
        <AvatarExamples />
    </ThemeProvider>
));
stories.add('simple light theme', () => (
    <ThemeProvider theme={lightTheme}>
        <AvatarExamples />
    </ThemeProvider>
));
