import { TTextProps, Text } from '../Text/Text';

import { LabelHTMLAttributes } from 'react';
import styled from '@emotion/styled';

export const Label = styled(Text)<
    LabelHTMLAttributes<HTMLLabelElement> & TTextProps
>();

Label.defaultProps = {
    as: 'label',
};
