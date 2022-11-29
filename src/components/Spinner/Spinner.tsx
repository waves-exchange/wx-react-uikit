import React from 'react';
import { around, gradient } from './keyframes';
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
    animation: `${gradient} 3.8s infinite`,
    backgroundSize: '400%',
});

const TopBox = styled(MainBox)({
    backgroundImage: `linear-gradient(45deg, ${colors.magenta.$300}, ${colors.blue.$300})`,
    top: 0,
    transform: 'rotate(-45deg)',
    transformOrigin: '0 0',
});

const BottomBox = styled(MainBox)({
    backgroundImage: `linear-gradient(-45deg, ${colors.magenta.$300}, ${colors.blue.$300})`,
    bottom: 0,
    transform: 'rotate(45deg)',
    transformOrigin: '0 100%',
});

export const Spinner: React.FC = () => {
    return (
        <Flex alignItems="center" justifyContent="center">
            <Box
                height={[26, null, null, 52]}
                width={[26, null, null, 52]}
                sx={{
                    animation: `${around} 3.8s infinite`,
                    willChange: 'transform',
                }}
                overflow="hidden"
                position="relative"
            >
                <TopBox>
                    <Box
                        width={[30, null, null, 56]}
                        height={[15, null, null, 28]}
                        sx={{
                            transform: 'rotate(45deg)',
                            transformOrigin: '0 0',
                        }}
                    />
                </TopBox>
                <BottomBox>
                    <Box
                        width={[30, null, null, 56]}
                        height={[15, null, null, 28]}
                        sx={{
                            transform:
                                'rotate(-45deg) translateX(-50%) translateY(100%)',
                            transformOrigin: '0 0',
                        }}
                    />
                </BottomBox>
            </Box>

            <Box ml={16} mb={8} display={['none', null, null, 'block']}>
                <Icon icon={iconLogoText} color="text" size={239} height={34} />
            </Box>
            <Box ml={12} mb={6} display={[null, null, null, 'none']}>
                <Icon icon={iconLogoText} color="text" size={120} height={17} />
            </Box>
        </Flex>
    );
};

Spinner.displayName = 'Spinner';
