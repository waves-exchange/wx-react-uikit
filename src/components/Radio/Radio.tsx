import { ControlBox, IControlBoxStyles } from '../ControlBox/ControlBox';
import { Flex, TFlexProps } from '../Flex/Flex';
import React, { FC, InputHTMLAttributes } from 'react';
import { VISUALLY_HIDDEN_CSS } from '../../constants';
import { defaultControlBoxStyles } from './styles';
import { mergeDeepRight } from 'ramda';

export const radioTestId = 'radio';
export const radioInputTestId = 'radio-input';
export const radioControlBoxTestId = 'radio-control-box';

export type RadioProps = InputHTMLAttributes<HTMLInputElement> &
    TFlexProps & {
        controlBoxStyles?: IControlBoxStyles;
        customControlBox?: boolean;
        isInvalid?: boolean;
    };

export const Radio: FC<RadioProps> = ({
    name,
    value,
    checked,
    disabled,
    readOnly,
    children,
    onChange,
    onBlur,
    onFocus,
    defaultChecked,
    controlBoxStyles = {},
    customControlBox,
    isInvalid,
    ...rest
}) => {
    const controlStyles = mergeDeepRight<IControlBoxStyles, IControlBoxStyles>(
        defaultControlBoxStyles,
        controlBoxStyles
    );

    const { baseStyles, ...restControlStyles } = controlStyles;

    return (
        <Flex
            as="label"
            display="inline-flex"
            verticalAlign="top"
            alignItems="center"
            sx={{ cursor: 'pointer' }}
            {...rest}
            data-testid={radioTestId}
        >
            <input
                type="radio"
                name={name}
                value={value}
                checked={checked}
                disabled={disabled}
                aria-invalid={isInvalid}
                onChange={readOnly ? undefined : onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                defaultChecked={readOnly ? undefined : defaultChecked}
                style={VISUALLY_HIDDEN_CSS}
                data-testid={radioInputTestId}
            />

            {!customControlBox && (
                <ControlBox
                    type="radio"
                    sx={baseStyles}
                    {...restControlStyles}
                    data-testid={radioControlBoxTestId}
                />
            )}
            {children}
        </Flex>
    );
};
