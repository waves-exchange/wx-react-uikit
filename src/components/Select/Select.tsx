import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import { Box, BoxProps } from '../Box/Box';
import { getPositionStyles } from './styles';

export type Placement = 'top' | 'bottom';

type TSelectProps = BoxProps & {
    renderSelected: (options: {
        opened: boolean;
        isDisabled?: boolean;
        isError?: boolean;
    }) => React.ReactNode;
    isDisabled?: boolean;
    isError?: boolean;
    placement?: Placement;
};

const getBorderRadiusPlacement = (isOpenPlacement: boolean): string =>
    isOpenPlacement ? '0' : '$4';

const getBorderWidthPlacement = (isOpenPlacement: boolean): string =>
    isOpenPlacement ? '0px' : '1px';

export const Select: React.FC<TSelectProps> = ({
    renderSelected,
    isDisabled = false,
    isError = false,
    placement = 'bottom',
    children,
    ...rest
}) => {
    const [opened, setOpened] = useState<boolean>(false);
    const element = useRef<HTMLDivElement>(null);

    const onToggleOpened = useCallback(() => {
        if (isDisabled) {
            return null;
        }
        setOpened(!opened);
    }, [isDisabled, opened]);

    const onClickOut = useCallback((event) => {
        if (element.current && !element.current.contains(event.target)) {
            setOpened(false);
        }
    }, []);

    useEffect(() => {
        if (opened) {
            document.addEventListener('click', onClickOut);
        } else {
            document.removeEventListener('click', onClickOut);
        }

        return (): void => document.removeEventListener('click', onClickOut);
    }, [onClickOut, opened]);

    const positionStyles = getPositionStyles(placement);

    const openPlacementBottom = useMemo(
        () => opened && placement === 'bottom',
        [opened, placement]
    );

    const openPlacementTop = useMemo(
        () => opened && placement === 'top',
        [opened, placement]
    );

    const stylesForList = useMemo(() => {
        const mainColor = isError ? (opened ? 'main' : 'negative') : 'main';

        return {
            border: '1px solid',
            borderColor: mainColor,
            borderTopWidth: getBorderWidthPlacement(openPlacementBottom),
            borderBottomWidth: getBorderWidthPlacement(openPlacementTop),
            borderRadius: '$4',
            borderBottomLeftRadius: getBorderRadiusPlacement(openPlacementTop),
            borderBottomRightRadius: getBorderRadiusPlacement(openPlacementTop),
            borderTopLeftRadius: getBorderRadiusPlacement(openPlacementBottom),
            borderTopRightRadius: getBorderRadiusPlacement(openPlacementBottom),
        };
    }, [isError, openPlacementBottom, openPlacementTop, opened]);

    const stylesForSelected = useMemo(() => {
        const mainColor = isError
            ? opened
                ? 'main'
                : 'negative'
            : opened
            ? 'main'
            : 'transparent';

        return {
            border: '1px solid',
            borderColor: mainColor,
            borderRadius: '$4',
            borderBottomLeftRadius:
                getBorderRadiusPlacement(openPlacementBottom),
            borderBottomRightRadius:
                getBorderRadiusPlacement(openPlacementBottom),
            borderTopLeftRadius: getBorderRadiusPlacement(openPlacementTop),
            borderTopRightRadius: getBorderRadiusPlacement(openPlacementTop),
            borderTopWidth: getBorderWidthPlacement(openPlacementTop),
            borderBottomWidth: getBorderWidthPlacement(openPlacementBottom),
        };
    }, [isError, openPlacementBottom, openPlacementTop, opened]);

    return (
        <Box
            cursor={isDisabled ? 'default' : 'pointer'}
            position="relative"
            ref={element}
            onClick={onToggleOpened}
            sx={{
                ':focus': {
                    '.selected': {
                        borderColor: 'main',
                    },
                },
                '.list': stylesForList,
                '.selected': stylesForSelected,
                ...((rest && rest.sx ? rest.sx : {}) as Record<string, any>),
            }}
            {...rest}
        >
            <Box>{renderSelected({ opened, isDisabled, isError })}</Box>

            {opened && React.Children.count(children) ? (
                <Box
                    position="absolute"
                    width="100%"
                    zIndex={10}
                    {...positionStyles}
                >
                    {children}
                </Box>
            ) : null}
        </Box>
    );
};
