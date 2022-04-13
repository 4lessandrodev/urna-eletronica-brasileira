import styled from 'styled-components';
import { ThemeProvider } from '@types';

const Style = styled.div`
    display: flex;
    border: 0.2rem solid ${({ theme }: ThemeProvider) => `${theme.colors.darkGray}`};
    width: 22.2rem;
    height: 6rem;
    margin: 0;
    justify-content: space-between;
    text-transform: uppercase;
    font-family: ${({ theme }: ThemeProvider) => `${theme.font.family.default}`};
    background-color: ${({ theme }: ThemeProvider) => `${theme.colors.lightBlue241}`};
    align-items: center;
    padding: 0 ${({ theme }: ThemeProvider) => `${theme.spacings.medium}`};
    border-radius: 0.5rem;
`;

export const Flex = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Style;
