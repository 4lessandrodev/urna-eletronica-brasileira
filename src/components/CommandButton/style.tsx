import { ThemeProvider, ThemeType } from '@types';
import styled from 'styled-components';

const getColor = (theme: ThemeType) => ({
    white: () => `${theme.colors.lightBlue250}`,
    orange: () => `${theme.colors.orange}`,
});

const getBorderColor = (theme: ThemeType) => ({
    white: () => `${theme.colors.darkGray}`,
    orange: () => `${theme.colors.darkOrange}`,
});

const getHoverColor = (theme: ThemeType) => ({
    white: () => `${theme.colors.lightBlue242}`,
    orange: () => `${theme.colors.darkOrange}`,
});

export type IColors = 'white' | 'orange';

export interface BtnColor {
	color: IColors;
}

export const Style = styled.button<BtnColor>`
    color: ${({ theme }: ThemeProvider): string => theme.colors.black87};
    background-color: ${({ theme, color }: ThemeProvider & BtnColor): string => getColor(theme)[color]()};
    border-radius: ${({ theme }: ThemeProvider): string => theme.borderRadius.medium};
    width: 7.2rem;
    height: 3.3rem;
    padding-bottom: ${({ theme }: ThemeProvider): string => theme.spacings.small};
    font-family: ${({ theme }: ThemeProvider): string => theme.font.family.default};
    font-weight: ${({ theme }: ThemeProvider): string => theme.font.weights.semiBold};
    font-size: ${({ theme }: ThemeProvider): string => theme.font.sizes.title};
    display: flex;
    text-transform: uppercase;
    align-items: center;
    justify-content: flex-start;
    border-left: 0.3rem solid ${({ theme, color }: ThemeProvider & BtnColor): string => getBorderColor(theme)[color]()};
    border-bottom: 0.3rem solid ${({ theme, color }: ThemeProvider & BtnColor): string => getBorderColor(theme)[color]()};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme, color }: ThemeProvider & BtnColor): string => getHoverColor(theme)[color]()};
    }
`;

export default Style;
