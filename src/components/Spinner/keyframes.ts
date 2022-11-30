import { keyframes } from '@emotion/core';

export const around = keyframes`
    0% {
        transform: rotate(0);
    }

    12% {
        transform: rotate(180deg);
    }

    50% {
        transform: rotate(180deg);
    }

    62% {
        transform: rotate(360deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;

export const sandBlue = keyframes`
    0% {
        transform: rotate(45deg) translateY(-15px)
    }
    10% {
        transform: rotate(45deg) translateY(-15px)
    }
    45% {
        transform: rotate(45deg) translateY(0)
    }
    60% {
        transform: rotate(45deg) translateY(0)
    }
    98% {
        transform: rotate(45deg) translateY(15px)
    }
    100% {
        transform: rotate(45deg) translateY(15px)
    }
`;

export const sandMagenta = keyframes`
    0% {
        transform: rotate(-45deg) translateY(15px)
    }
    10% {
        transform: rotate(-45deg) translateY(15px)
    }
    45% {
        transform: rotate(-45deg) translateY(0)
    }
    60% {
        transform: rotate(-45deg) translateY(0)
    }
    98% {
        transform: rotate(-45deg) translateY(-15px)
    }
    100% {
        transform: rotate(-45deg) translateY(-15px)
    }
`;
