import styled from 'styled-components';
import { ThemeProvider } from '@types';

const Style = styled.h1`
    color: ${({ theme }: ThemeProvider): string => theme.colors?.black87};
`;

interface Props {
    value: string;
}

export default function Title({ value }: Props) {
    return (
        <Style>{ value }</Style>
    );
}
