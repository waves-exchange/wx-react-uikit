import { Radio, RadioProps } from '../Radio/Radio';
import React, { FC } from 'react';
import { Box } from '../Box/Box';
import { RadioGroup } from './RadioGroup';
import { Text } from '../Text/Text';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme } from '../../themes/default';
import { storiesOf } from '@storybook/react';

const stories = storiesOf('RadioGroup', module);

const CustomRadio: FC<RadioProps> = ({
    name,
    checked,
    value,
    onChange,
    children,
}) => (
    <Radio
        name={name}
        value={value}
        onChange={onChange}
        customControlBox={true}
    >
        <Box
            aria-checked={checked}
            color={checked ? 'standard.$0' : 'standard.$1000'}
            bg={checked ? 'blue.$500' : 'orange.$500'}
            p="$5"
        >
            {children}
        </Box>
    </Radio>
);

stories.add('simple', () => (
    <ThemeProvider theme={defaultTheme}>
        <Box mb="20px">
            <Text>direction="row" (default)</Text>
            <RadioGroup name="radio1" value="2">
                <Radio value="1">Radio 1</Radio>
                <Radio value="2">Radio 2</Radio>
            </RadioGroup>
        </Box>

        <Box mb="16px">
            <Text>direction="column"</Text>
            <RadioGroup name="radio2" value="2" direction="column">
                <Radio value="1" mb="8px">
                    Radio 1
                </Radio>
                <Radio value="2">Radio 2</Radio>
            </RadioGroup>
        </Box>

        <Box mb="16px">
            <Text>custom radio</Text>
            <RadioGroup name="radio3" value="2">
                <CustomRadio value="1" mb="8px">
                    Radio 1
                </CustomRadio>
                <CustomRadio value="2">Radio 2</CustomRadio>
            </RadioGroup>
        </Box>

        <Box mb="16px">
            <Text>custom radio (column)</Text>
            <RadioGroup name="radio3" value="2" direction="column">
                <CustomRadio value="1" mb="8px">
                    Radio 1
                </CustomRadio>
                <CustomRadio value="2">Radio 2</CustomRadio>
            </RadioGroup>
        </Box>
    </ThemeProvider>
));
