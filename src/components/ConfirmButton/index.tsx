import { ReactElement } from 'react';
import InputNumber from '../InputNumber';
import { useBallotBox } from '../../contexts/ballot-context';
import Style from './style';

interface Props {
	value: string
}

export default function ConfirmButton({ value }: Props) {
    const {
        setBallotBox,
        setGroup,
        setImage,
        setName,
        setInputsNumber,
        setPressedNumbers,
        pressedNumbers,
        ballotBox,
        name,
    } = useBallotBox();

    const handleConfirm = (): void => {
        const currentTotal = ballotBox.quantityOfNumbers;
        if (pressedNumbers.length === currentTotal) {
            const result: ReactElement[] = [];
            let i = 0;
            while (i <= currentTotal) {
                result.push(<InputNumber key={`${i}${Math.random()}`} value="" />);
                i += 1;
            }

            const number = pressedNumbers.toString().replace(/,/g, '');
            const candidate = ballotBox.getCandidateByNumber(number);
            const { position } = candidate;

            const vote = ballotBox.confirm({
                isWhite: false,
                candidate: {
                    position,
                    name,
                    number,
                },
            });
            setBallotBox(vote);
            setInputsNumber(result);
            setPressedNumbers([]);
            setImage('no-image.png');
            setGroup('');
            setName('');
        }
    };

    return (
        <Style onClick={handleConfirm}>{ value }</Style>
    );
}
