import { AvatarComponent, TAvatarComponent } from './AvatarComponent';
import React, { FC } from 'react';
import { getIcon, getTooltipContent } from './helpers';
import { BoxWithIcon } from './BoxWithIcon';
import { TooltipLabel } from './TooltipLabel';

export enum TOOLTIP_LABELS {
    scriptText = 'scriptText',
    keeperText = 'keeperText',
    ledgerText = 'ledgerText',
}

type TUserAvatar = {
    tooltipLabels: Record<TOOLTIP_LABELS, string>;
    isSmart?: boolean;
    userType?: USER_TYPES;
    newsCounter?: number | string;
    bg?: string;
};

export enum USER_TYPES {
    wavesKeeper = 'wavesKeeper',
    ledger = 'ledger',
    metamask = 'metamask',
    seed = 'seed',
    privateKey = 'privateKey',
    cognito = 'cognito',
    backdoor = 'backdoor',
}

export const AddressAvatar: FC<TAvatarComponent & TUserAvatar> = ({
    isSmart = false,
    userType = USER_TYPES.seed,
    tooltipLabels,
    newsCounter,
    bg,
    ...rest
}) => {
    const icon = getIcon({ isSmart, userType });
    const tooltipContent = getTooltipContent({
        isSmart,
        userType,
        tooltipLabels,
    });

    return (
        <BoxWithIcon
            icon={icon}
            newsCounter={newsCounter}
            tooltipLabel={
                Array.isArray(tooltipContent) && tooltipContent.length
                    ? (): React.ReactNode => (
                          <TooltipLabel content={tooltipContent} />
                      )
                    : null
            }
            bg={bg}
        >
            <AvatarComponent {...rest} />
        </BoxWithIcon>
    );
};

AddressAvatar.displayName = 'AddressAvatar';
