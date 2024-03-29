import { TTabVariant, TabProps } from './Tabs';

export const getTabStyles = (
    variant: TTabVariant,
    selected: TabProps['selected']
) => {
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
            sx: {
                ':hover': {
                    opacity: 0.8,
                },
            },
        },
        square: {
            cursor: 'pointer',
            px: '20px',
            py: '16px',
            color: selected ? 'standard.$0' : 'textsec',
            backgroundColor: selected ? 'main' : 'surf',
            borderRight: '1px solid',
            borderColor: 'divider',
            sx: {
                '&:last-of-type': {
                    borderRight: 'none',
                },
            },
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
