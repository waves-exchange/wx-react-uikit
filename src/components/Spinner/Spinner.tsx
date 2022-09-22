import React from 'react';
import { around, gradient } from './keyframes';
import styled from '@emotion/styled';
import { Flex } from '../Flex/Flex';
import { Box } from '../Box/Box';
import { Icon } from '../..';
import { iconLogoText } from '../../icons/logoText';

const MainBox = styled(Box)({
    height: '70.71%',
    width: '70.71%',
    position: 'absolute',
    overflow: 'hidden',
    animation: `${gradient} 3.8s infinite`,
    backgroundSize: '400%',
});

const TopBox = styled(MainBox)({
    backgroundImage: 'linear-gradient(45deg, #F21162, #215CFB)',
    top: 0,
    transform: 'rotate(-45deg)',
    transformOrigin: '0 0',
});

const BottomBox = styled(MainBox)({
    backgroundImage: 'linear-gradient(-45deg, #F21162, #215CFB)',
    bottom: 0,
    transform: 'rotate(45deg)',
    transformOrigin: '0 100%',
});

export const Spinner: React.FC = () => {
    return (
        <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Box
                height={32}
                width={32}
                sx={{
                    animation: `${around} 3.8s infinite`,
                    willChange: 'transform',
                }}
                overflow="hidden"
                position="relative"
            >
                <TopBox>
                    <Box
                        width={36}
                        height={18}
                        sx={{
                            transform: 'rotate(45deg)',
                            transformOrigin: '0 0',
                        }}
                    />
                </TopBox>
                <BottomBox>
                    <Box
                        width={36}
                        height={18}
                        sx={{
                            transform:
                                'rotate(-45deg) translateX(-50%) translateY(100%)',
                            transformOrigin: '0 0',
                        }}
                    />
                </BottomBox>
            </Box>

            <Box mt={20} width={150} height={21}>
                <Icon
                    icon={iconLogoText}
                    color="textmuted"
                    size={150}
                    height={21}
                />
            </Box>
        </Flex>
    );
};

Spinner.displayName = 'Spinner';
