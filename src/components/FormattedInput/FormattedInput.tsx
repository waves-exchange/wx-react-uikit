import React from 'react';
import { Input, InputProps } from '../Input/Input';
import { getFormattedValue, parseFormattedValue, handleDots } from './helpers';

type ChangeFunction = (event: React.ChangeEvent<HTMLInputElement>) => void;

type FormattedInputProps = InputProps & {
    onChange?: ChangeFunction;
    formatSeparator: string;
    decimals: number;
};

interface FormattedInputState {
    oldIdx: number;
    oldLength: number;
    value: string | string[] | number | undefined;
    formattedValue: string;
}

export class FormattedInput extends React.Component<
    FormattedInputProps,
    FormattedInputState
> {
    private readonly inputRef = React.createRef<HTMLInputElement>();
    private dotInput = false;

    constructor(props: FormattedInputProps) {
        super(props);
        const { value, formatSeparator } = props;

        this.state = {
            oldIdx: 0,
            oldLength: 0,
            value,
            formattedValue: getFormattedValue(
                value ? value.toString() : '',
                formatSeparator
            ),
        };
    }

    render(): React.ReactNode {
        const { onChange, ...rest } = this.props;
        const { formattedValue } = this.state;

        return (
            <Input
                {...rest}
                ref={this.inputRef}
                value={formattedValue}
                onChange={this.handleChange}
                onKeyDown={this.handleKeyboard}
            />
        );
    }

    componentDidUpdate(): void {
        const { formatSeparator } = this.props;
        const { formattedValue, oldLength, oldIdx } = this.state;
        let newIdx = Math.max(0, formattedValue.length - oldLength + oldIdx);

        if (formattedValue[newIdx - 1] === formatSeparator) {
            newIdx = newIdx - 1;
        }

        if (this.inputRef && this.inputRef.current) {
            this.inputRef.current.selectionStart = newIdx;
            this.inputRef.current.selectionEnd = newIdx;
        }
    }

    shouldComponentUpdate(): boolean {
        return true;
    }

    private readonly handleKeyboard = (event: React.KeyboardEvent): void => {
        if (event.key === '.') {
            this.dotInput = true;
        }
    };

    private readonly handleChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        event.preventDefault();

        const { onChange, decimals, formatSeparator } = this.props;

        this.saveInputCursor();

        if (decimals === 0 && this.dotInput) {
            this.dotInput = false;

            return;
        }

        const eventValue = event.target.value;

        const parsedValue = parseFormattedValue(eventValue, formatSeparator);
        let newValue = '';

        if (!isNaN(Number(parsedValue))) {
            newValue = handleDots(parsedValue, decimals);
        } else {
            return;
        }

        this.setState({
            formattedValue: getFormattedValue(newValue, formatSeparator),
        });

        if (onChange) {
            this.dispatchChange(onChange, event, newValue);
        }
    };

    private saveInputCursor(): void {
        const { current: inputNode } = this.inputRef;

        this.setState({
            oldIdx: Number(inputNode?.selectionStart),
            oldLength: Number(inputNode?.value.length),
        });
    }

    private dispatchChange(
        onChange: ChangeFunction,
        event: React.ChangeEvent<HTMLInputElement>,
        newValue: string
    ): void {
        const newTarget = {
            value: newValue,
            ...event.target,
        };
        const newNativeTarget = {
            value: newValue,
            ...event.nativeEvent,
        };

        onChange({
            target: newTarget,
            nativeEvent: newNativeTarget,
            ...event,
        });
    }
}
