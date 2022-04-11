import styled from 'styled-components';
import { ThemeProvider } from '@types';

export const Container = styled.div`
    position: relative;
    background-color: ${({ theme }: ThemeProvider) => `${theme.colors.black81}`};
    height: 19rem;
    width: 15rem;
`;

export const Border = styled.div`
    position: absolute;
    left: 15px;
    background-color: ${({ theme }: ThemeProvider) => `${theme.colors.black81}`};
    height: 19rem;
    width: 17rem;
    transform: skew(5deg)
`;

export default Container;
