import React from 'react';
import { Flex } from '../Flex/Flex';
import { Icon } from './Icon';
import { iconCheck } from '../../icons/check';
import { iconClose } from '../../icons/close';
import { iconInvoke } from '../../icons/invoke';
import { iconLogo } from '../../icons/logo';
import { iconQuestion } from '../../icons/question';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('Icon', module);

stories.add('simple', () => {
    const commonProps = {
        iconSize: 'large' as 'large',
        sx: { ':hover': { color: 'red' } },
    };

    return (
        <Flex sx={{ '& > * + *': { ml: 16 } }}>
            <Icon {...commonProps} icon={iconCheck} />
            <Icon {...commonProps} icon={iconClose} />
            <Icon {...commonProps} icon={iconQuestion} />
            <Icon {...commonProps} icon={iconLogo} />
            <Icon {...commonProps} icon={iconInvoke} />
        </Flex>
    );
});
