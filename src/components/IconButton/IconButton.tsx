import { Button, ButtonProps } from '../Button/Button';
import React, { FC } from 'react';

import { CSSObject } from '@emotion/core';

export const iconButtonTestId = 'icon-button';

type IconButtonProps = {
    _hover?: CSSObject;
    _focus?: CSSObject;
    _disabled?: CSSObject;
    _disabledAndHover?: CSSObject;
};

export const IconButton: FC<ButtonProps & IconButtonProps> = ({
    children,
    _hover,
    _focus,
    _disabled,
    _disabledAndHover,
    ...rest
}) => {
    return (
        <Button
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                ':hover:disabled': _disabledAndHover,
                ':focus': _focus,
                ':hover': _hover,
                ':disabled': _disabled,
            }}
            {...rest}
            data-testid={iconButtonTestId}
        >
            {children}
        </Button>
    );
};
