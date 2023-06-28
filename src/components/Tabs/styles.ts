import { TTabVariant, TabProps } from './Tabs';

export const getTabStyles = (
    variant: TTabVariant,
    selected: TabProps['selected']
) => {
    //  'border' | 'round' | 'square'
    return {
        border: {
            cursor: 'pointer',
            borderBottom: selected ? '2px solid' : 0,
            borderBottomColor: 'main',
        },
        round: {
            cursor: 'pointer',
            px: '30px',
            py: '6px',
            color: selected ? 'standard.$0' : 'textsec',
            backgroundColor: selected ? 'main' : 'surf',
            borderRadius: '38px',
        },
        square: {
            cursor: 'pointer',
            px: '20px',
            py: '16px',
            color: selected ? 'standard.$0' : 'textsec',
            backgroundColor: selected ? 'main' : 'surf',
        },
    }[variant];
};

export const tabListStyles = {
    border: {
        borderBottom: '1px solid',
        borderColor: 'bgsec',
    },
    round: {
        display: 'inline-flex',
        bg: 'surf',
        borderRadius: '38px',
    },
    square: {
        display: 'inline-flex',
        overflow: 'hidden',
        borderRadius: '4px',
    },
};
