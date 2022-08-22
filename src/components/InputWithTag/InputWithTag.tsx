import { Input, InputProps } from '../Input/Input';
import React, { ReactElement, useEffect, useRef, useState } from 'react';
import { Box } from '../Box/Box';
import { Text } from '../Text/Text';

type InputWithTagProps = (props: InputProps & { tag: string }) => ReactElement;
export const InputWithTag: InputWithTagProps = ({ tag, ...props }) => {
    const [paddingRight, setPaddingRight] = useState(16);
    const tagRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        Promise.resolve().then(() => {
            if (tagRef.current) {
                setPaddingRight(tagRef.current.clientWidth + 24);
            }
        });
    }, [tag]);

    return (
        <Box position="relative">
            <Input
                {...props}
                paddingRight={tag ? `${paddingRight}px` : '16px'}
            />
            <Text
                variant="line"
                color={props.disabled ? 'main.$100' : 'basic.$400'}
                position="absolute"
                top="50%"
                right="16px"
                ref={tagRef}
                sx={{
                    transform: 'translateY(-50%)',
                    textTransform: 'uppercase',
                }}
            >
                {tag}
            </Text>
        </Box>
    );
};
