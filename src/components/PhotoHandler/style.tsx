import { ThemeProvider } from '@types';
import styled from 'styled-components';

export interface DivProps {
    withBorder: boolean;
}

export const Style = styled.div<DivProps>`
    margin: 0;
    border: 0.3rem solid ${({ withBorder, theme }: DivProps & ThemeProvider) => `${withBorder
        ? theme.colors.darkGray : 'transparent'}`};
    max-width: 12rem;
    max-height: 12rem;
`;

export default Style;
