import { ThemeProvider } from '@types';
import styled from 'styled-components';

const Style = styled.button`
    color: ${({ theme }: ThemeProvider): string => theme.colors.gray};
    background-color: ${({ theme }: ThemeProvider): string => theme.colors.black87};
    border-radius: ${({ theme }: ThemeProvider): string => theme.borderRadius.medium};
    width: 4.6rem;
    height: 3.2rem;
    font-family: ${({ theme }: ThemeProvider): string => theme.font.family.default};
    font-weight: ${({ theme }: ThemeProvider): string => theme.font.weights.bold};
    font-size: ${({ theme }: ThemeProvider): string => theme.font.sizes.large};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: ${({ theme }: ThemeProvider): string => theme.spacings.xmedium};
    border-left: 0.3rem solid black;
    border-bottom: 0.3rem solid black;
    cursor: pointer;
    &:hover {
        background-color: black;
    }
`;

interface Props {
    value: number;
}

export default function NumericButton({ value }: Props) {
    return (
        <Style>{ value }</Style>
    );
}
