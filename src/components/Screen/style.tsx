import styled from 'styled-components';
import { ThemeProvider } from '@types';

// screen
export const MainContainer = styled.div`
    display: flex;
    font-family: ${({ theme }: ThemeProvider): string => theme.font.family.default};
    width: 24rem;
    height: 15rem;
    border-radius: ${({ theme }: ThemeProvider): string => theme.borderRadius.medium};
    position: relative;
    perspective: 170px;
    background: ${({ theme }: ThemeProvider): string => theme.colors.darkGray};
    margin: 0 0.2rem;
`;

// container
export const ScreenBorder = styled.div`
    position: absolute;
    background: ${({ theme }: ThemeProvider): string => theme.colors.darkGray};
    transform: rotateX(7deg);
    width: 24.5rem;
    height: 15.5rem;
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
    border: 3px solid ${({ theme }: ThemeProvider): string => theme.colors.darkGray};
    position: relative;
    transform: rotateX(-10deg);
    background-color: ${({ theme }: ThemeProvider): string => theme.colors.lightBlue251};
    border-radius: 0.5rem;
`;
