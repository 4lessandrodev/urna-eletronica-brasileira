import styled from 'styled-components';
import { ThemeProvider } from '@types';

export const Container = styled.div`
    display: flex;
    position: relative;
    background-color: ${({ theme }: ThemeProvider) => `${theme.colors.lightBlue242}`};
    width: 32rem;
    height: 21rem;
    perspective: 170px;
    left: 30px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`;

export const Content = styled.div`
    display: flex;
    position: absolute;
    width: 35rem;
    height: 20rem;
    transform: rotateX(3deg);
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }: ThemeProvider) => `${theme.colors.lightBlue240}`};
    border-radius: 50px;
    box-shadow: 0px 11px 15px -5px ${({ theme }: ThemeProvider) => `${theme.colors.darkGray}`};
    border: 0.1rem solid ${({ theme }: ThemeProvider) => `${theme.colors.darkGray}`};
`;

export default Container;
