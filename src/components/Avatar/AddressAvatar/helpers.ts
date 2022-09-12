import { TOOLTIP_LABELS, TOOLTIP_LABELS_VALUES } from './AddressAvatar';
import { IIcon } from '../../Icon/Icon';
import { ITooltipContent } from './TooltipLabel';
import { iconInfo } from './avatarIcons/info';
import { iconLedgerMini } from './avatarIcons/ledgerMini';
import { iconSmartMini } from './avatarIcons/smartMini';
import { iconWalletKeeperMini } from './avatarIcons/walletKeeperMini';
import { keyframes } from '@emotion/core';
import { metamask } from './avatarIcons/metamask';

type TUserProps = {
    isSmart: boolean;
    isWavesKeeper: boolean;
    isLedger: boolean;
    isMetamask?: boolean;
};

type GetTooltipContentProps = TUserProps & {
    tooltipLabels: Record<TOOLTIP_LABELS_VALUES, string>;
};

type TIcon = IIcon | null;

export const getIcon = ({
    isSmart,
    isWavesKeeper,
    isLedger,
    isMetamask,
}: TUserProps): TIcon => {
    switch (true) {
        case isSmart && isWavesKeeper:
            return iconInfo;
        case isSmart && isLedger:
            return iconInfo;
        case isSmart:
            return iconSmartMini;
        case isLedger:
            return iconLedgerMini;
        case isWavesKeeper:
            return iconWalletKeeperMini;
        case isMetamask:
            return metamask;
        default:
            return null;
    }
};

export const getTooltipContent = ({
    isSmart,
    isWavesKeeper,
    isLedger,
    tooltipLabels,
}: GetTooltipContentProps): Array<ITooltipContent> | null => {
    switch (true) {
        case isSmart && isWavesKeeper:
            return [
                {
                    icon: iconWalletKeeperMini,
                    label: tooltipLabels[TOOLTIP_LABELS.keepertText],
                },
                {
                    icon: iconSmartMini,
                    label: tooltipLabels[TOOLTIP_LABELS.scriptText],
                },
            ];
        case isSmart && isLedger:
            return [
                {
                    icon: iconLedgerMini,
                    label: tooltipLabels[TOOLTIP_LABELS.ledgerText],
                },
                {
                    icon: iconSmartMini,
                    label: tooltipLabels[TOOLTIP_LABELS.scriptText],
                },
            ];
        default:
            return null;
    }
};

export const animatedGradient = keyframes`
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
`;
