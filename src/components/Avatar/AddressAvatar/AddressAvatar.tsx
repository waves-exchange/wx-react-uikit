import { AvatarComponent, TAvatarComponent } from './AvatarComponent';
import React, { FC } from 'react';
import { getIcon, getTooltipContent } from './helpers';
import { BoxWithIcon } from './BoxWithIcon';
import { TooltipLabel } from './TooltipLabel';

export enum TOOLTIP_LABELS {
    scriptText = 'scriptText',
    keepertText = 'keepertText',
    ledgerText = 'ledgerText',
}

type TUserAvatar = {
    tooltipLabels: Record<TOOLTIP_LABELS_VALUES, string>;
    isSmart?: boolean;
    userType?: USER_TYPES_VALUES;
    hasNotify?: boolean;
};

enum USER_TYPES {
    wavesKeeper = 'wavesKeeper',
    ledger = 'ledger',
    metamask = 'metamask',
    seed = 'seed',
    privateKey = 'privateKey',
    cognito = 'cognito',
    backdoor = 'backdoor',
}

type USER_TYPES_VALUES = keyof typeof USER_TYPES;
export type TOOLTIP_LABELS_VALUES = keyof typeof TOOLTIP_LABELS;

export const AddressAvatar: FC<TAvatarComponent & TUserAvatar> = ({
    isSmart = false,
    userType = 'seed',
    tooltipLabels,
    hasNotify = false,
    ...rest
}) => {
    const isWavesKeeper = userType === USER_TYPES.wavesKeeper;
    const isLedger = userType === USER_TYPES.ledger;
    const isMetamask = userType === USER_TYPES.metamask;
    const icon = getIcon({ isWavesKeeper, isLedger, isSmart, isMetamask });
    const tooltipContent = getTooltipContent({
        isWavesKeeper,
        isLedger,
        isSmart,
        tooltipLabels,
    });

    return (
        <BoxWithIcon
            icon={icon}
            hasNotify={hasNotify}
            tooltipLabel={
                Array.isArray(tooltipContent) && tooltipContent.length
                    ? (): React.ReactNode => (
                          <TooltipLabel content={tooltipContent} />
                      )
                    : null
            }
        >
            <AvatarComponent {...rest} />
        </BoxWithIcon>
    );
};

AddressAvatar.displayName = 'AddressAvatar';
