import React, { InputHTMLAttributes } from 'react';
import { Flex, TFlexProps } from '../Flex/Flex';
import { Icon } from '../Icon/Icon';
import { ControlBox, IControlBoxStyles } from '../ControlBox/ControlBox';
import { mergeDeepRight } from 'ramda';
import { defaultControlBoxStyles } from './styles';
import { iconCheck } from '../../icons/check';
import { VISUALLY_HIDDEN_CSS } from '../../constants';

/**
 * Usage notes:
 * To customize either pass controlBoxStyles (see ControlBox component for the list of styles props)
 * or render prop ControlBox with your styles: () => <ControlBox {...styles} />
 * see storybook for examples
 */
export const checkBoxTestId = 'checkbox';
export const checkBoxInputTestId = 'checkbox-input';
export const controlBoxTestId = 'control-box';

interface CheckboxSpecificProps {
    controlBoxStyles?: IControlBoxStyles;
    controlBox?: () => React.ReactNode;
    isChecked?: boolean;
    isFullWidth?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isInvalid?: boolean;
}

export type ICheckboxProps = CheckboxSpecificProps &
    TFlexProps &
    InputHTMLAttributes<HTMLInputElement>;

export const Checkbox: React.FC<ICheckboxProps> = ({
    children,
    controlBox,
    controlBoxStyles = {},
    id,
    name,
    value,
    isChecked,
    defaultChecked,
    isFullWidth,
    isDisabled,
    isReadOnly,
    isInvalid = false,
    onChange,
    onBlur,
    onFocus,
    ...rest
}) => {
    const controlStyles = mergeDeepRight(
        defaultControlBoxStyles,
        controlBoxStyles
    ) as IControlBoxStyles;

    const { baseStyles, ...restControlStyles } = controlStyles;

    return (
        <Flex
            as="label"
            display="inline-flex"
            verticalAlign="top"
            alignItems="center"
            width={isFullWidth ? 'full' : undefined}
            cursor={isDisabled ? 'not-allowed' : 'pointer'}
            data-testid={checkBoxTestId}
            {...rest}
        >
            <input
                style={VISUALLY_HIDDEN_CSS}
                id={id}
                type="checkbox"
                name={name}
                value={value}
                onChange={isReadOnly ? undefined : onChange}
                onBlur={onBlur}
                onFocus={onFocus}
                defaultChecked={isReadOnly ? undefined : defaultChecked}
                checked={
                    isReadOnly
                        ? Boolean(isChecked)
                        : defaultChecked
                        ? undefined
                        : isChecked
                }
                disabled={isDisabled}
                readOnly={isReadOnly}
                data-testid={checkBoxInputTestId}
                aria-invalid={isInvalid}
            />
            {controlBox ? (
                controlBox()
            ) : (
                <ControlBox
                    sx={baseStyles}
                    {...restControlStyles}
                    data-testid={controlBoxTestId}
                >
                    <Icon icon={iconCheck} size={20} height={15} />
                </ControlBox>
            )}
            {children}
        </Flex>
    );
};
