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

export const Border = styled.div`
    width: 13.5%;
    height: 100%;
    border-right: 5px solid ${({ theme }: ThemeProvider) => `${theme.colors.black81}`};
`;

export const InnerBorder = styled.div`
    display: flex;
    width: 99%;
    height: 99%;
    flex-direction: column;
`;

export const Base = styled.div`
    display: flex;
    width: 100%;
    height: 5%;
    border: 1px solid red;
`;

export const ContainerBallot = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid blue;
    justify-content: center;
    perspective: 170px;
`;

export const ContainerScreen = styled.div`
    display: flex;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    transform: rotateX(-3deg);
    &::after{
        content: "tela";
    }
`;

export const ContainerKeyBoard = styled.div`                          
    display: flex;
    width: 40%;
    height: 100%;
    border: 1px solid black;
    justify-content: center;
    transform: rotateX(-3deg);
    align-items: center;
    &::after{
        content: "teclado";
    }
`;

export default Container;
