import { Flex, TFlexProps } from '../Flex/Flex';
import {
    Input,
    InputProps,
    InputSize,
    inputSizeVariants,
} from '../Input/Input';
import React, { FC, useState } from 'react';

import { Icon } from '../Icon/Icon';
import { InputElement } from '../InputElement/InputElement';
import { iconEyeHide } from '../../icons/iconEyeHide';
import { iconEyeView } from '../../icons/iconEyeView';

export const InputPassword: FC<InputProps & TFlexProps> = ({
    id,
    ...props
}) => {
    const [show, setShow] = useState(false);

    const toggle = (): void => setShow(!show);
    const variantSize = props.variantSize as InputSize;
    const togglerWidth = inputSizeVariants[variantSize]
        ? inputSizeVariants[variantSize].height
        : '0';

    return (
        <Flex position="relative">
            <Input
                id={id}
                {...props}
                type={show ? 'text' : 'password'}
                paddingRight={togglerWidth}
            />
            <InputElement placement="right">
                <Flex
                    color="primary.$300"
                    width={togglerWidth}
                    height="100%"
                    alignItems="center"
                    justifyContent="center"
                    onClick={toggle}
                    data-testid="InputPasswordToggler"
                    cursor="pointer"
                    transition="default"
                >
                    {show ? (
                        <Icon icon={iconEyeHide} />
                    ) : (
                        <Icon icon={iconEyeView} />
                    )}
                </Flex>
            </InputElement>
        </Flex>
    );
};

InputPassword.defaultProps = Input.defaultProps;
