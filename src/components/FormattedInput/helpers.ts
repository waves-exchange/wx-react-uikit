// export const getFormattedValue = (value = ''): string =>
//     value
//         .toString()
//         .replace(/^[+-]?\d+/, (int) =>
//             int.replace(/(\d)(?=(\d{3})+$)/g, '$1,')
//         );
export const getFormattedValue = (value: string, separator: string): string => {
    if (isNaN(Number(value))) {
        return '';
    }
    const valueArr = value.toString().split('.');
    const first = valueArr[0].replace(
        /(\d)(?=(\d\d\d)+(?!\d))/g,
        `$1${separator}`
    );

    if (valueArr.length === 1) {
        return first;
    } else {
        return [first, valueArr[1]].join('.');
    }
};

export const parseFormattedValue = (
    value: string | undefined,
    separator: string
): string => {
    const findSeparators = new RegExp(separator, 'g');

    return value ? value.replace(findSeparators, '') : '';
};

export const handleDots = (value: string, decimals: number): string => {
    const splitted = value.split('.');

    if (splitted.length > 1) {
        const afterDot = splitted[1] ? splitted[1].slice(0, decimals) : '';

        if (decimals === 0) {
            return splitted[0];
        }

        return [splitted[0], '.', afterDot].join('');
    } else {
        return value;
    }
};
