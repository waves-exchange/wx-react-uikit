import * as React from 'react';
import { Flex, IIcon, Icon, Text } from '../../..';

export interface ITooltipContent {
    icon: IIcon;
    label: string;
}

interface IToltipLabel {
    content: Array<ITooltipContent>;
}

export const TooltipLabel: React.FC<IToltipLabel> = ({ content }) => {
    return (
        <Flex
            flexDirection="column"
            borderTop="4px solid"
            borderTopColor="primary.$300"
            backgroundColor="#4a5060"
            borderRadius="$4"
            py="8px"
            px="12px"
            color="standard.$0"
            maxWidth="100%"
            zIndex={1}
        >
            {content.map(({ icon, label }, index) => (
                <Flex key={label} mt={index ? 8 : 0}>
                    <Flex
                        alignItems="center"
                        justifyContent="center"
                        size="16px"
                        borderRadius="circle"
                        backgroundColor="main.$600"
                        flex="none"
                    >
                        <Icon icon={icon} size={10} color="standard.$0" />
                    </Flex>
                    <Text
                        ml="$10"
                        variant="body2"
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
