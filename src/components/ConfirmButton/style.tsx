import { ThemeProvider } from '@types';
import styled from 'styled-components';

export const Style = styled.button`
    color: ${({ theme }: ThemeProvider): string => theme.colors.black89};
    background-color: ${({ theme }: ThemeProvider): string => theme.colors.green};
    border-radius: ${({ theme }: ThemeProvider): string => theme.borderRadius.medium};
    width: 8.2rem;
    height: 4.5rem;
    font-family: ${({ theme }: ThemeProvider): string => theme.font.family.default};
    font-weight: ${({ theme }: ThemeProvider): string => theme.font.weights.semiBold};
    font-size: ${({ theme }: ThemeProvider): string => theme.font.sizes.title};
    display: flex;
    align-items: center;
	text-transform: uppercase;
    justify-content: flex-start;
    padding-bottom: ${({ theme }: ThemeProvider): string => theme.spacings.small};
    border-left: 0.3rem solid ${({ theme }: ThemeProvider): string => theme.colors.darkGreen};
    border-bottom: 0.3rem solid ${({ theme }: ThemeProvider): string => theme.colors.darkGreen};
    cursor: pointer;
    &:hover {
        background-color: ${({ theme }: ThemeProvider): string => theme.colors.darkGreen};
    }
`;

export default Style;
