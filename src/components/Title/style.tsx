import styled from 'styled-components';
import { ThemeProvider, ThemeType } from '@types';

const getFontSize = {
    SMALL: (theme: ThemeType) => `${theme.font.sizes.small}`,
    MEDIUM: (theme: ThemeType) => `${theme.font.sizes.normal}`,
    REGULAR: (theme: ThemeType) => `${theme.font.sizes.title}`,
    LARGE: (theme: ThemeType) => `${theme.font.sizes.large}`,
    XLARGE: (theme: ThemeType) => `${theme.font.sizes.xxlarge}`,
};
export interface ITitleSizes {
    size: 'SMALL' | 'MEDIUM' | 'REGULAR' | 'LARGE' | 'XLARGE'
}

export const Style = styled.h1<ITitleSizes>`
    font-size: ${({ theme, size }: ThemeProvider & ITitleSizes) => getFontSize[size]?.(theme)};
    color: ${({ theme }: ThemeProvider): string => theme.colors.black87};
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-family: ${({ theme }: ThemeProvider): string => theme.font.family.default};
`;

export default Style;
