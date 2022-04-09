import styled from 'styled-components';
import { ThemeProvider } from '@types';

const Style = styled.input`
    border: 0.2rem solid ${({ theme }: ThemeProvider) => `${theme.colors.darkGray}`};
    height: 3.5rem;
    width: 3.5rem;
    text-align: center;
    margin: 0;
    font-family: ${({ theme }: ThemeProvider) => `${theme.font.family.default}`};
    font-size: ${({ theme }: ThemeProvider) => `${theme.font.sizes.title}`};
    font-weight: ${({ theme }: ThemeProvider) => `${theme.font.weights.bold}`};
    background-color: ${({ theme }: ThemeProvider) => `${theme.colors.lightBlue251}`};
`;

interface Props {
    value: number | '';
}

export default function InputNumber({ value }: Props) {
    return (
        <Style type="text" value={value} max={9} min={0} />
    );
}
