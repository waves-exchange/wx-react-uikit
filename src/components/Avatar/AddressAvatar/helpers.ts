import { IIcon } from '../../Icon/Icon';
import { ITooltipContent } from './TooltipLabel';
import { TOOLTIP_LABELS } from './AddressAvatar';
import { USER_TYPES } from './AddressAvatar';
import { iconInfo } from './avatarIcons/info';
import { iconLedgerMini } from './avatarIcons/ledgerMini';
import { iconSmartMini } from './avatarIcons/smartMini';
import { iconWalletKeeperMini } from './avatarIcons/walletKeeperMini';
import { metamask } from './avatarIcons/metamask';

type TUserProps = {
    isSmart: boolean;
    userType: USER_TYPES;
};

type GetTooltipContentProps = TUserProps & {
    tooltipLabels: Record<TOOLTIP_LABELS, string>;
};

type TIcon = IIcon | null;

export const getIcon = ({ isSmart, userType }: TUserProps): TIcon => {
    switch (true) {
        case isSmart && userType === USER_TYPES.wavesKeeper:
            return iconInfo;
        case isSmart && userType === USER_TYPES.ledger:
            return iconInfo;
        case isSmart:
            return iconSmartMini;
        case userType === USER_TYPES.ledger:
            return iconLedgerMini;
        case userType === USER_TYPES.wavesKeeper:
            return iconWalletKeeperMini;
        case userType === USER_TYPES.metamask:
            return metamask;
        default:
            return null;
    }
};

export const getTooltipContent = ({
    isSmart,
    userType,
    tooltipLabels,
}: GetTooltipContentProps): Array<ITooltipContent> | null => {
    switch (true) {
        case isSmart && userType === USER_TYPES.wavesKeeper:
            return [
                {
                    icon: iconWalletKeeperMini,
                    label: tooltipLabels[TOOLTIP_LABELS.keeperText],
                },
                {
                    icon: iconSmartMini,
                    label: tooltipLabels[TOOLTIP_LABELS.scriptText],
                },
            ];
        case isSmart && userType === USER_TYPES.ledger:
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
