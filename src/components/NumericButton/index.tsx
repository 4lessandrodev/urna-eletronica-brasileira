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
        setName,
        setGroup,
        setImage,
    } = useBallotBox();

    const handlePressedNumber = (target: HTMLElement) => {
        const audio = new Audio('/assets/bip.aac');

        audio.play();
        const currentTotal = ballotBox.quantityOfNumbers;
        if (pressedNumbers.length <= currentTotal) {
            const newNumber = parseInt(target.innerText, 10);
            const inputs = [...inputsNumber];
            const numbers = [...pressedNumbers, newNumber];

            inputs[numbers.length - 1] = <InputNumber key={`${newNumber}${Math.random()}`} value={newNumber} />;

            setPressedNumbers(numbers);
            setInputsNumber(inputs);
            if (numbers.length === currentTotal) {
                let number = '';
                numbers.forEach((num) => { number += num; });
                const candidate = ballotBox.getCandidateByNumber(number);
                setName(candidate.name);
                setGroup('Partido x');
                setImage('image.jpg');
            }
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
