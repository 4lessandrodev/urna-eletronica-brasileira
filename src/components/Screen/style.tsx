import styled from 'styled-components';
import { ThemeProvider } from '@types';

// screen
export const MainContainer = styled.div`
    display: flex;
    font-family: ${({ theme }: ThemeProvider): string => theme.font.family.default};
    width: 35rem;
    height: 25.5rem;
    border-radius: ${({ theme }: ThemeProvider): string => theme.borderRadius.medium};
    position: relative;
    perspective: 170px;
    background: ${({ theme }: ThemeProvider): string => theme.colors.darkGray};
    margin: 0 0.2rem;
    `;

// container
export const ScreenBorder = styled.div`
    box-shadow: 0px 5px 3px -1px rgba(0,0,0,0.29);
    position: absolute;
    background: ${({ theme }: ThemeProvider): string => theme.colors.darkGray};
    transform: rotateX(7deg);
    width: 35.5rem;
    height: 26rem;
    bottom: 4px;
    right: -4px;
    border-radius: ${({ theme }: ThemeProvider): string => theme.borderRadius.large};
    `;

export const ScreenContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: absolute;
    perspective: 270px;
    `;

export const MainScreen = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    bottom: -7px;
    width: 90%;
    height: 93%;
    border: 5px solid ${({ theme }: ThemeProvider): string => theme.colors.lightBlue242};
    border-top: 5px solid ${({ theme }: ThemeProvider): string => theme.colors.primary};
    position: relative;
    transform: rotateX(-10deg);
    background-color: ${({ theme }: ThemeProvider): string => theme.colors.lightBlue251};
    border-radius: 0.5rem;
    box-shadow: 0px -3px 5px 0px rgba(0,0,0,0.29);
`;
