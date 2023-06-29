import * as React from 'react';
import { Box, BoxProps } from '../Box/Box';
import { around } from '../Spinner/keyframes';
import styled from '@emotion/styled';

const MainBox = styled(Box)({
    height: '70.71%',
    width: '70.71%',
    position: 'absolute',
    overflow: 'hidden',
});

const TopBox = styled(MainBox)({
    top: 0,
    transform: 'rotate(-45deg)',
    transformOrigin: '0 0',
});

const BottomBox = styled(MainBox)({
    bottom: 0,
    transform: 'rotate(45deg)',
    transformOrigin: '0 100%',
});

export const WxLoader: React.FC<BoxProps> = ({ ...rest }) => {
    const { sx = {}, ...restProps } = rest;

    return (
        <Box
            height={16}
            width={16}
            sx={{
                animation: `${around} 4.2s infinite`,
                willChange: 'transform',
                div: {
                    backgroundColor: 'icon',
                },
                ...(sx as Record<string, any>),
            }}
            overflow="hidden"
            position="relative"
            {...restProps}
        >
            <TopBox />
            <BottomBox />
        </Box>
    );
};
