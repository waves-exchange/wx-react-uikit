import { defaultTheme } from './themes/default';
export { NAMES_THEME, TThemeCustom } from './themes/default';

export type TUser = {
    publicKey: string;
    address: string;
    aliases: Array<string>;
    networkByte: number;
};

export type TDefaultTheme = typeof defaultTheme;
