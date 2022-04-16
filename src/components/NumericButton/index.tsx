import { MouseEvent } from 'react';
import InputNumber from '../InputNumber';
import { useBallotBox } from '../../contexts/ballot-context';
import Style from './style';

interface Props {
    value: number;
}

export default function NumericButton({ value }: Props) {
    const {
        pressedNumbers,
        setPressedNumbers,
        inputsNumber,
        setInputsNumber,
        ballotBox,
    } = useBallotBox();

    const handlePressedNumber = (target: HTMLElement) => {
        const currentTotal = ballotBox.quantityOfNumbers;
        if (pressedNumbers.length <= currentTotal) {
            const newNumber = parseInt(target.innerText, 10);
            const inputs = [...inputsNumber];
            const numbers = [...pressedNumbers, newNumber];

            inputs[numbers.length - 1] = <InputNumber key={`${newNumber}${Math.random()}`} value={newNumber} />;

            setPressedNumbers(numbers);
            setInputsNumber(inputs);
        }
    };

    return (
        <Style onClick={
            (e: MouseEvent) => {
                const target = e.target as HTMLElement;
                handlePressedNumber(target);
            }
        }
        >
            {value}

        </Style>
    );
}
