import { TPlateNoteType } from './PlateNote';

export const getMainColors = (type: TPlateNoteType): Record<string, string> => {
    switch (type) {
        case 'error': {
            return {
                borderColor: 'danger.$300',
                titleColor: 'danger.$300',
                bgColor: 'transparent',
            };
        }
        case 'warning': {
            return {
                borderColor: 'plate.warning.border',
                titleColor: 'plate.warning.title',
                bgColor: 'plate.warning.bg',
            };
        }
        default: {
            return {
                borderColor: 'darkGrey.$500',
                titleColor: 'darkGrey.$500',
                bgColor: 'transparent',
            };
        }
    }
};
