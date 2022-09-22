import { keyframes } from '@emotion/core';

export const around = keyframes`
    0% {
        transform: rotate(0);
    }

    15% {
        transform: rotate(180deg);
    }

    50% {
        transform: rotate(180deg);
    }

    65% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const gradient = keyframes`
    0% {
        background-position: 0% 0%;
    }
    50% {
        background-position: 100% 100%;
    }
    100% {
        background-position: 0% 0%;
    }
`;
