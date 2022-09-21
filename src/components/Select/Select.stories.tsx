import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { ThemeProvider } from 'emotion-theming';
import { defaultTheme, lightTheme } from '../../themes/default';
import { Select } from '../Select/Select';
import { Box } from '../Box/Box';
import { List } from './defaultSelect/List';
import { Selected } from './defaultSelect/Selected';
import { DefaultOption } from './defaultSelect/Option';

const options: Array<DefaultOption> = [
    {
        id: 'placeholder',
        renderPlaceholder: (): string => 'Select',
    },
    {
        id: 'RU',
        value: (): string => 'Русский',
    },
    {
        id: 'EN',
        value: (): string => 'English',
    },
    {
        id: 'ES',
        value: (): string => 'Spanish',
    },
];

const stories = storiesOf('Select', module);

stories.add('default select - DT', () => {
    const initialSelected = options.find((option) => option.id === 'RU');
    const initialSelected2 = options.find((option) => option.id === 'EN');

    const [selectedA, setSelectedA] = useState<DefaultOption>(initialSelected!);
    const onSelectA = useCallback((selected) => {
        setSelectedA(selected);
    }, []);

    const [selectedB, setSelectedB] = useState<DefaultOption>(
        initialSelected2!
    );
    const onSelectB = useCallback((selected) => {
        setSelectedB(selected);
    }, []);

    const [selectedC, setSelectedC] = useState<DefaultOption>(options[0]);
    const onSelectC = useCallback((selected) => {
        setSelectedC(selected);
    }, []);

    return (
        <ThemeProvider theme={defaultTheme}>
            <Box
                backgroundColor="bg"
                height="100vh"
                p="$20"
                color="text"
                fontSize={13}
            >
                <Box mb="10px">Empty</Box>
                <Select
                    renderSelected={({ opened }): React.ReactElement => (
                        <Selected opened={opened} selected={selectedC} />
                    )}
                    mb={20}
                >
                    <List options={options} onSelect={onSelectC} />
                </Select>

                <Box mb="10px">Error</Box>
                <Select
                    renderSelected={({
                        opened,
                        isError,
                    }): React.ReactElement => (
                        <Selected
                            isError={isError}
                            opened={opened}
                            selected={selectedB}
                        />
                    )}
                    mb={20}
                    isError={true}
                >
                    <List options={options} onSelect={onSelectB} />
                </Select>

                <Box mb="10px">Default</Box>
                <Select
                    renderSelected={({ opened }): React.ReactElement => (
                        <Selected opened={opened} selected={selectedA} />
                    )}
                    mb={20}
                >
                    <List options={options} onSelect={onSelectA} />
                </Select>

                <Box mb="10px">Disabled</Box>
                <Select
                    renderSelected={({
                        opened,
                        isDisabled,
                    }): React.ReactElement => (
                        <Selected
                            opened={opened}
                            selected={selectedB}
                            isDisabled={isDisabled}
                        />
                    )}
                    isDisabled={true}
                    mb={20}
                >
                    <List options={options} onSelect={onSelectB} />
                </Select>

                <Box mb="10px">Default. Placement='top'</Box>
                <Select
                    renderSelected={({ opened }): React.ReactElement => (
                        <Selected opened={opened} selected={selectedA} />
                    )}
                    placement="top"
                    mb={20}
                >
                    <List options={options} onSelect={onSelectA} />
                </Select>
            </Box>
        </ThemeProvider>
    );
});

stories.add('default select - LT', () => {
    const initialSelected = options.find((option) => option.id === 'RU');

    const [selectedA, setSelectedA] = useState<DefaultOption>(initialSelected!);
    const onSelectA = useCallback((selected) => {
        setSelectedA(selected);
    }, []);

    const [selectedB, setSelectedB] = useState<DefaultOption>(initialSelected!);
    const onSelectB = useCallback((selected) => {
        setSelectedB(selected);
    }, []);

    return (
        <ThemeProvider theme={lightTheme}>
            <Box
                backgroundColor="bg"
                height="100vh"
                p="$20"
                color="text"
                fontSize={13}
            >
                <Box mb="10px">Empty</Box>
                <Select
                    renderSelected={({ opened }): React.ReactElement => (
                        <Selected opened={opened} selected={selectedB} />
                    )}
                    mb={20}
                >
                    <List options={options} onSelect={onSelectB} />
                </Select>

                <Box mb="10px">Error</Box>
                <Select
                    renderSelected={({
                        opened,
                        isError,
                    }): React.ReactElement => (
                        <Selected
                            isError={isError}
                            opened={opened}
                            selected={selectedB}
                        />
                    )}
                    mb={20}
                    isError={true}
                >
                    <List options={options} onSelect={onSelectB} />
                </Select>

                <Box mb="10px">Default</Box>
                <Select
                    renderSelected={({ opened }): React.ReactElement => (
                        <Selected opened={opened} selected={selectedA} />
                    )}
                    mb={20}
                >
                    <List options={options} onSelect={onSelectA} />
                </Select>

                <Box mb="10px">Disabled</Box>
                <Select
                    renderSelected={({
                        opened,
                        isDisabled,
                    }): React.ReactElement => (
                        <Selected
                            opened={opened}
                            selected={selectedB}
                            isDisabled={isDisabled}
                        />
                    )}
                    isDisabled={true}
                    mb={20}
                >
                    <List options={options} onSelect={onSelectB} />
                </Select>

                <Box mb="10px">Default. Placement='top'</Box>
                <Select
                    renderSelected={({ opened }): React.ReactElement => (
                        <Selected opened={opened} selected={selectedA} />
                    )}
                    placement="top"
                    mb={20}
                >
                    <List options={options} onSelect={onSelectA} />
                </Select>
            </Box>
        </ThemeProvider>
    );
});
