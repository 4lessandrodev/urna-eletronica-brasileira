import styled from 'styled-components';
import { ThemeProvider } from '@types';

export const Container = styled.div`
    display: flex;
    position: relative;
    background-color: ${({ theme }: ThemeProvider) => `${theme.colors.lightBlue242}`};
    width: 58rem;
    height: 33rem;
    perspective: 170px;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
`;

export const Content = styled.div`
    display: flex;
    position: absolute;
    width: 66rem;
    height: 30.5rem;
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
`;

export const ContainerBallot = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    perspective: 170px;
`;

export const ContainerScreen = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 63%;
    height: 100%;
    transform: rotateX(-3deg);
`;

export const LogoContainer = styled.div`
    display: flex;
    width: 100%;
    height: 27%;
    flex-direction: column;
    margin-top: 2rem;
`;

export const ContainerKeyBoardKeys = styled.div`
    display: flex;
    width: 100%;
    height: 73%;
    flex-direction: column;
`;

export const ContainerKeyBoard = styled.div`                          
    display: flex;
    width: 37%;
    height: 100%;
    justify-content: center;
    transform: rotateX(-3deg);
    align-items: center;
    flex-direction: column;
`;

export default Container;
