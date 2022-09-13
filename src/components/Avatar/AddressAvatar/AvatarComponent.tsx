import React, { ComponentProps, FC } from 'react';
import { config, create } from 'identity-img';
import { Avatar } from '../Avatar';
import { BoxProps } from '../../Box/Box';
import { variantSizes } from '../styles';

config({ rows: 8, cells: 8 });

export type TAvatarComponent = Omit<ComponentProps<typeof Avatar>, 'img'> & {
    address: string;
};

export const AvatarComponent: FC<BoxProps & TAvatarComponent> = ({
    address,
    variantSize = 'medium',
    ...rest
}) => {
    const img = create(address, {
        size: variantSizes[variantSize] * window.devicePixelRatio,
    });

    return <Avatar img={img} variantSize={variantSize} {...rest} />;
};
