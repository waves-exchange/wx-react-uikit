import * as React from 'react';
import { Flex, IIcon, Icon, Tooltip } from '../../..';
import { Options } from '@popperjs/core';

export type TTooltipLabel = (() => React.ReactNode) | string;

type TooltipIconProps = {
    icon: IIcon;
    label: TTooltipLabel;
    popperOptions?: Partial<Options>;
};

export const TooltipIcon: React.FC<TooltipIconProps> = ({
    icon,
    popperOptions,
    label,
}) => (
    <Tooltip
        arrowSize={4}
        hasArrow={true}
        arrowColor="#5A81EA"
        offset={4}
        label={label}
        placement="bottom"
        popperOptions={popperOptions}
        zIndex={100}
    >
        <Flex
            position="absolute"
            bottom={0}
            right={0}
            width={16}
            height={16}
            justifyContent="center"
            alignItems="center"
            borderRadius="circle"
            backgroundColor="darkGrey.$800"
            cursor="pointer"
            zIndex={1}
        >
            <Icon icon={icon} size={10} color="standard.$0" />
        </Flex>
    </Tooltip>
);

TooltipIcon.displayName = 'TooltipIcon';
