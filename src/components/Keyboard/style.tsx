import styled from 'styled-components';
import { ThemeProvider } from '@types';

export const Container = styled.div`
    position: relative;
    background-color: ${({ theme }: ThemeProvider) => `${theme.colors.black81}`};
    height: 19rem;
    width: 16rem;
    padding: 1.1rem;
`;

export const Border = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 15px;
    background-color: ${({ theme }: ThemeProvider) => `${theme.colors.black81}`};
    height: 19.1rem;
    width: 21rem;
    transform: skew(4deg);
    padding: 1.1rem;
    top: -0.1rem;
    border-radius: ${({ theme }: ThemeProvider) => `${theme.spacings.small}`};
    gap: ${({ theme }: ThemeProvider) => `${theme.spacings.small}`};
`;

export const Normalize = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }: ThemeProvider) => `${theme.colors.black81}`};
    width: 21rem;
    transform: skew(-3deg);
    top: -0.1rem;
    gap: ${({ theme }: ThemeProvider) => `${theme.spacings.small}`};
`;

export default Container;
