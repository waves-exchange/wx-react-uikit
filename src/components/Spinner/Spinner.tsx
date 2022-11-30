import React from 'react';
import { around, sandBlue, sandMagenta } from './keyframes';
import styled from '@emotion/styled';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';
import { Icon } from '../..';
import { iconLogoText } from '../../icons/logoText';
import { colors } from '../../themes/constants';

const MainBox = styled(Box)({
    height: '70.71%',
    width: '70.71%',
    position: 'absolute',
    overflow: 'hidden',
});

const TopBox = styled(MainBox)({
    backgroundColor: colors.magenta.$300,
    top: 0,
    transform: 'rotate(-45deg)',
    transformOrigin: '0 0',
});

const BottomBox = styled(MainBox)({
    backgroundColor: colors.blue.$300,
    bottom: 0,
    transform: 'rotate(45deg)',
    transformOrigin: '0 100%',
});

export const Spinner: React.FC = () => {
    return (
        <Flex alignItems="center" justifyContent="center">
            <Box
                height={26}
                width={26}
                sx={{
                    animation: `${around} 4.2s infinite`,
                    willChange: 'transform',
                }}
                overflow="hidden"
                position="relative"
            >
                <TopBox>
                    <Box
                        width={26}
                        height={15}
                        sx={{
                            animation: `${sandBlue} 4.2s infinite`,
                            backgroundColor: colors.blue.$300,
                            transformOrigin: '0 0',
                        }}
                    />
                </TopBox>
                <BottomBox>
                    <Box
                        width={26}
                        height={15}
                        sx={{
                            animation: `${sandMagenta} 4.2s infinite`,
                            backgroundColor: colors.magenta.$300,
                            transformOrigin: 'bottom left',
                            position: 'absolute',
                            bottom: '0',
                        }}
                    />
                </BottomBox>
            </Box>
            <Box ml={12} mb={6}>
                <Icon icon={iconLogoText} color="text" size={120} height={17} />
            </Box>
        </Flex>
    );
};

Spinner.displayName = 'Spinner';
