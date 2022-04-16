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
        const isWhite = name.toLowerCase() === 'branco';
        if (pressedNumbers.length === currentTotal || isWhite) {
            const number = pressedNumbers.toString().replace(/,/g, '');
            const candidate = ballotBox.getCandidateByNumber(number);
            const { position } = candidate;

            const vote = ballotBox.confirm({
                isWhite,
                candidate: {
                    position,
                    name,
                    number,
                },
            });
            setBallotBox(vote);

            const isFinal = vote.hasNextStep();
            const audio = new Audio(isFinal ? '/assets/bip.aac' : '/assets/confirmation.mp3');
            audio.play();

            const result: ReactElement[] = [];
            while (result.length < vote.quantityOfNumbers) {
                const index = result.length;
                result.push(<InputNumber key={`${index}${Math.random()}`} value="" />);
            }

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
