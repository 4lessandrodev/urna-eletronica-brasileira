import { useBallotBox } from '@contexts/ballot-context';
import { MouseEvent } from 'react';
import Style from './style';

interface Props {
    value: number;
}

export default function NumericButton({ value }: Props) {
    const { pressedNumbers, setPressedNumbers } = useBallotBox();

    return (
        <Style onClick={
            (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                const numbers = [...pressedNumbers, parseInt(target.innerText, 10)];
                setPressedNumbers(numbers);
                console.log(pressedNumbers);
                console.log(numbers);
            }
        }
        >
            {value}

        </Style>
    );
}
