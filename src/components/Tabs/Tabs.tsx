import React, {
    Children,
    FC,
    ReactElement,
    cloneElement,
    createContext,
    isValidElement,
    useCallback,
    useContext,
    useEffect,
    useState,
} from 'react';
import { Box, BoxProps } from '../Box/Box';
import { Flex, TFlexProps } from '../Flex/Flex';
import { getTabStyles, tabListStyles } from './styles';

type TabContextType = {
    selectedIndex: number;
    onChangeTab: (index: number, value: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
};

export type TTabVariant = 'border' | 'round' | 'square';

export const TabContext = createContext<TabContextType>({
    selectedIndex: 0,
    onChangeTab: () => void 0,
});

type TabsProps<T> = Omit<BoxProps, 'onChange'> & {
    selectedIndex?: number;
    value?: T;
    onChange?: (value: T | undefined) => void;
};

type TabsFC = <T>(props: TabsProps<T>) => ReactElement;

export const Tabs: TabsFC = (props) => {
    const { selectedIndex, onChange, children, ...rest } = props;
    const [index, setIndex] = useState(selectedIndex || 0);

    const onChangeTab = useCallback(
        (index: number, boundValue: typeof props.value) => {
            setIndex(index);

            if (typeof onChange === 'function') {
                onChange(boundValue);
            }
        },
        [props, onChange]
    );

    useEffect(() => {
        if (typeof selectedIndex !== 'undefined' && selectedIndex !== index) {
            onChangeTab(selectedIndex, props.value);
        }
    }, [index, onChangeTab, props.value, selectedIndex]);

    const context: TabContextType = {
        selectedIndex: index,
        onChangeTab,
    };

    return (
        <TabContext.Provider value={context}>
            <Box {...rest}>{children}</Box>
        </TabContext.Provider>
    );
};

type TabListProps = TFlexProps & {
    variant?: TTabVariant;
};

export const TabsList: FC<TabListProps> = ({
    children,
    variant = 'border',
    ...rest
}) => {
    const { selectedIndex, onChangeTab } = useContext(TabContext);

    return (
        <Flex {...tabListStyles[variant]} {...rest}>
            {Children.map(children, (child, index) => {
                if (!isValidElement(child)) {
                    return;
                }

                return cloneElement<TabProps>(child, {
                    selected: index === selectedIndex,
                    onClick: (e) => {
                        if (child.props.disabled) {
                            return;
                        }

                        if (selectedIndex !== index) {
                            onChangeTab(index, child.props.value);

                            if (typeof child.props.onClick === 'function') {
                                child.props.onClick(e);
                            }
                        }
                    },
                });
            })}
        </Flex>
    );
};

export type TabProps = BoxProps & {
    value?: unknown;
    selected?: boolean;
    disabled?: boolean;
    variant?: TTabVariant;
};

export const Tab: FC<TabProps> = ({
    selected = false,
    disabled = false,
    children,
    variant = 'border',
    ...rest
}) => {
    const styles = getTabStyles(variant, selected);

    return (
        <Box
            aria-selected={selected}
            aria-disabled={disabled}
            cursor="default"
            {...styles}
            {...rest}
        >
            {children}
        </Box>
    );
};

type TabPanelsProps = BoxProps & {};

export const TabPanels: FC<TabPanelsProps> = ({ children, ...rest }) => {
    const { selectedIndex } = useContext(TabContext);

    return (
        <Box {...rest}>
            {Children.map(children, (child, index) => {
                if (!isValidElement(child)) {
                    return;
                }

                return cloneElement<TabPanelProps>(child, {
                    selected: index === selectedIndex,
                });
            })}
        </Box>
    );
};

type TabPanelProps = BoxProps & {
    selected?: boolean;
};

export const TabPanel: FC<TabPanelProps> = (
    { children, selected, display = 'block' },
    ...rest
) => (
    <Box {...rest} display={selected ? display : 'none'}>
        {children}
    </Box>
);
