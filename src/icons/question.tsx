import { NAMES_THEME, TThemeCustom } from '../themes/default';

import { IIcon } from '../components/Icon/Icon';
import React from 'react';

const getColor = (color: string, colors: TThemeCustom['colors']): string => {
    if (color.includes('.')) {
        return color.split('.').reduce((acc, item) => {
            acc = (acc || colors)[item];

            return acc;
        }, '');
    }

    return color;
};

export const iconQuestion = (
    defaultColorIcon: string,
    isDisabledColor = false,
    theme: TThemeCustom
): IIcon => {
    if (isDisabledColor) {
        const { name, colors } = theme;

        if (name === NAMES_THEME.darkTheme) {
            defaultColorIcon = getColor(defaultColorIcon, colors);
        } else {
            defaultColorIcon = getColor(defaultColorIcon, colors);
        }
    }

    return {
        path: (
            <>
                <circle
                    cx="8"
                    cy="8"
                    r="7.5"
                    stroke={defaultColorIcon}
                    id="circle"
                />
                <path
                    d="M5.45312 5.84902C5.46044 5.50107 5.56284 5.20239 5.76033 4.95297C5.96148 4.70356 6.23212 4.51265 6.57225 4.38025C6.91237 4.24784 7.29273 4.18164 7.71331 4.18164C8.17779 4.18164 8.57277 4.25246 8.89827 4.3941C9.22742 4.53575 9.47794 4.73897 9.64983 5.00378C9.82172 5.26551 9.90767 5.57651 9.90767 5.93677C9.90767 6.2139 9.84001 6.46947 9.70469 6.70349C9.57303 6.93443 9.40297 7.15151 9.1945 7.35473C8.98604 7.55796 8.76478 7.75195 8.53071 7.9367C8.32956 8.09374 8.19424 8.27079 8.12475 8.46786C8.05527 8.66493 8.02052 8.87739 8.02052 9.10525V9.59073"
                    stroke={defaultColorIcon}
                    id="figure"
                />
                <path
                    d="M8.95401 11.1811C8.63583 11.4993 8.63583 11.4993 7.99947 12.1357C7.68129 11.8175 7.3631 11.4993 7.04492 11.1811C7.3631 10.8629 7.68129 10.5447 7.99947 10.2266C8.31765 10.5447 8.63583 10.8629 8.95401 11.1811Z"
                    fill={defaultColorIcon}
                    id="dot"
                />
            </>
        ),
        viewBox: '0 0 16 16',
    };
};
