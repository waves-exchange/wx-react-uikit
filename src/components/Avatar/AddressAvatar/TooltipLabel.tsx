import * as React from 'react';
import { Flex, IIcon, Icon, Text } from '../../..';

export interface ITooltipContent {
    icon: IIcon;
    label: string;
}

interface ITooltipLabel {
    content: Array<ITooltipContent>;
}

export const TooltipLabel: React.FC<ITooltipLabel> = ({ content }) => {
    return (
        <Flex flexDirection="column" maxWidth="100%" zIndex={1}>
            {content.map(({ icon, label }, index) => (
                <Flex key={label} alignItems="center" mt={index ? 8 : 0}>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        flex="none"
                        mr="4px"
                    >
                        <Icon icon={icon} size={10} color="text" />
                    </Flex>
                    <Text
                        ml="$10"
                        variant="caption"
                        color="text"
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        {label}
                    </Text>
                </Flex>
            ))}
        </Flex>
    );
};

TooltipLabel.displayName = 'TooltipLabel';
