import styled from 'styled-components';
import { ThemeProvider } from '@types';

export const Style = styled.h1`
    color: ${({ theme }: ThemeProvider): string => theme.colors.black87};
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-family: ${({ theme }: ThemeProvider): string => theme.font.family.default};
`;

export default Style;
