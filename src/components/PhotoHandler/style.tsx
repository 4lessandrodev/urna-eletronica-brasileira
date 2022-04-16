import { ThemeProvider } from '@types';
import styled from 'styled-components';

export interface DivProps {
    withBorder: boolean;
}

export const Style = styled.div<DivProps>`
    margin: 0;
    border: 0.3rem solid ${({ withBorder, theme }: DivProps & ThemeProvider) => `${withBorder
        ? theme.colors.darkGray : 'transparent'}`};
    max-width: 9.4rem;
    max-height: 9.4rem;
`;

export default Style;
