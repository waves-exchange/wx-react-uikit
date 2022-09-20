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
                borderColor: 'plateWarningBorder',
                titleColor: 'plateWarningTitle',
                bgColor: 'rgba(255, 197, 48, 0.15)',
            };
        }
        default: {
            return {
                borderColor: 'darkGrey.$500',
                titleColor: 'darkGrey.$500',
                bgColor: 'rgba(255, 197, 48, 0.15)',
            };
        }
    }
};
