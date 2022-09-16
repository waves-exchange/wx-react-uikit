import React from 'react';
import { Flex } from '../Flex/Flex';
import { darkTheme, lightTheme } from '../../themes/default';
import { ThemeProvider } from 'emotion-theming';
import { storiesOf } from '@storybook/react';
import { ControlBox } from '../ControlBox/ControlBox';
import { Checkbox } from './Checkbox';
import { defaultControlBoxStyles } from './styles';
import { mergeDeepRight } from 'ramda';
import { Icon } from '../Icon/Icon';
import { iconCheck } from '../../icons/check';

const stories = storiesOf('Checkbox', module);

stories.add('simple DT', () => {
    const cbStyles = {
        baseStyles: {
            marginRight: '16px',
        },
    };

    const customControlBoxStyles = mergeDeepRight(defaultControlBoxStyles, {
        baseStyles: {
            marginRight: '16px',
            borderColor: 'green.$300',
            width: '22px',
            height: '22px',
        },
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Flex
                p={16}
                bg="bg"
                flexDirection="column"
                color="text"
                height="100vh"
            >
                <Checkbox defaultChecked={false} controlBoxStyles={cbStyles}>
                    default unchecked
                </Checkbox>
                <Checkbox
                    defaultChecked={true}
                    pt={10}
                    controlBoxStyles={cbStyles}
                >
                    default checked
                </Checkbox>
                <Checkbox
                    defaultChecked={false}
                    isDisabled={true}
                    pt={10}
                    controlBoxStyles={cbStyles}
                >
                    disabled unchecked
                </Checkbox>
                <Checkbox
                    defaultChecked={true}
                    isDisabled={true}
                    pt={10}
                    controlBoxStyles={cbStyles}
                >
                    disabled checked
                </Checkbox>
                <Checkbox
                    defaultChecked={false}
                    controlBoxStyles={cbStyles}
                    isInvalid
                    pt={10}
                >
                    invalid
                </Checkbox>
                <Checkbox
                    defaultChecked={false}
                    pt={10}
                    controlBoxStyles={cbStyles}
                    controlBox={(): React.ReactNode => (
                        <ControlBox
                            sx={customControlBoxStyles.baseStyles}
                            _focus={customControlBoxStyles._focus}
                            _hover={customControlBoxStyles._hover}
                            _invalid={customControlBoxStyles._disabled}
                            _disabled={customControlBoxStyles._disabled}
                            _checked={customControlBoxStyles._checked}
                            _child={customControlBoxStyles._child}
                            _checkedAndChild={
                                customControlBoxStyles._checkedAndChild
                            }
                            _checkedAndDisabled={
                                customControlBoxStyles._checkedAndDisabled
                            }
                            _checkedAndDisabledHover={
                                customControlBoxStyles._checkedAndDisabledHover
                            }
                            _checkedAndFocus={
                                customControlBoxStyles._checkedAndFocus
                            }
                            _checkedAndHover={
                                customControlBoxStyles._checkedAndHover
                            }
                        >
                            <Icon icon={iconCheck} size={12} height={9} />
                        </ControlBox>
                    )}
                >
                    custom
                </Checkbox>
            </Flex>
        </ThemeProvider>
    );
});

stories.add('simple LT', () => {
    const cbStyles = {
        baseStyles: {
            marginRight: '16px',
        },
    };

    const customControlBoxStyles = mergeDeepRight(defaultControlBoxStyles, {
        baseStyles: {
            marginRight: '16px',
            borderColor: 'green.$500',
            width: '22px',
            height: '22px',
        },
    });

    return (
        <ThemeProvider theme={lightTheme}>
            <Flex
                p={16}
                bg="bg"
                flexDirection="column"
                color="text"
                height="100vh"
            >
                <Checkbox defaultChecked={false} controlBoxStyles={cbStyles}>
                    default unchecked
                </Checkbox>
                <Checkbox
                    defaultChecked={true}
                    pt={10}
                    controlBoxStyles={cbStyles}
                >
                    default checked
                </Checkbox>
                <Checkbox
                    defaultChecked={false}
                    isDisabled={true}
                    pt={10}
                    controlBoxStyles={cbStyles}
                >
                    disabled unchecked
                </Checkbox>
                <Checkbox
                    defaultChecked={true}
                    isDisabled={true}
                    pt={10}
                    controlBoxStyles={cbStyles}
                >
                    disabled checked
                </Checkbox>
                <Checkbox
                    defaultChecked={false}
                    controlBoxStyles={cbStyles}
                    isInvalid
                    pt={10}
                >
                    invalid
                </Checkbox>
                <Checkbox
                    defaultChecked={false}
                    pt={10}
                    controlBoxStyles={cbStyles}
                    controlBox={(): React.ReactNode => (
                        <ControlBox
                            sx={customControlBoxStyles.baseStyles}
                            _focus={customControlBoxStyles._focus}
                            _hover={customControlBoxStyles._hover}
                            _invalid={customControlBoxStyles._disabled}
                            _disabled={customControlBoxStyles._disabled}
                            _checked={customControlBoxStyles._checked}
                            _child={customControlBoxStyles._child}
                            _checkedAndChild={
                                customControlBoxStyles._checkedAndChild
                            }
                            _checkedAndDisabled={
                                customControlBoxStyles._checkedAndDisabled
                            }
                            _checkedAndDisabledHover={
                                customControlBoxStyles._checkedAndDisabledHover
                            }
                            _checkedAndFocus={
                                customControlBoxStyles._checkedAndFocus
                            }
                            _checkedAndHover={
                                customControlBoxStyles._checkedAndHover
                            }
                        >
                            <Icon icon={iconCheck} size={12} height={9} />
                        </ControlBox>
                    )}
                >
                    custom
                </Checkbox>
            </Flex>
        </ThemeProvider>
    );
});
