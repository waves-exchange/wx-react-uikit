import React, {
    ChangeEventHandler,
    Children,
    FC,
    cloneElement,
    isValidElement,
    useEffect,
    useState,
} from 'react';
import { Flex, TFlexProps } from '../Flex/Flex';

export const radioGroupTestId = 'radio';

type RadioGroupProps = TFlexProps & {
    direction?: 'row' | 'column';
    name?: string;
    value?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
};

// TODO: добавить поддержку светлой темы
export const RadioGroup: FC<RadioGroupProps> = ({
    children,
    direction,
    name,
    value,
    onChange,
    ...rest
}) => {
    const [_value, _setValue] = useState(value || null);
    const _onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        _setValue(e.currentTarget.value);

        if (typeof onChange === 'function') {
            onChange(e);
        }
    };

    useEffect(() => {
        if (typeof value !== 'undefined' && value !== _value) {
            _setValue(value);
        }
    }, [value, _value]);

    return (
        <Flex
            flexDirection={direction}
            role="radiogroup"
            {...rest}
            data-testid={radioGroupTestId}
        >
            {Children.map(children, (child) =>
                isValidElement(child)
                    ? cloneElement(child, {
                          name,
                          checked: child.props.value === _value,
                          'aria-checked': child.props.value === _value,
                          onChange: _onChange,
                      })
                    : null
            )}
        </Flex>
    );
};

RadioGroup.defaultProps = {
    direction: 'row',
};
