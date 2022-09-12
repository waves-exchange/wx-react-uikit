import { TPlateNoteType } from './PlateNote';

export const getMainColor = (type: TPlateNoteType): string => {
    switch (type) {
        case 'error': {
            return 'danger.$300';
        }
        case 'warning': {
            return 'yellow.$600';
        }
        default: {
            return 'darkGrey.$500';
        }
    }
};
