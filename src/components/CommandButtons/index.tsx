import { ReactElement } from 'react';
import InputNumber from '../InputNumber';
import { useBallotBox } from '../../contexts/ballot-context';
import CommandButton from '../CommandButton';
import ConfirmButton from '../ConfirmButton';
import Style from './style';

export default function CommandButtons() {
    const {
        setImage,
        setName,
        setInputsNumber,
        setPressedNumbers,
        inputsNumber,
        pressedNumbers,
        setGroup,
        ballotBox,
    } = useBallotBox();

    const handleWhiteCommand = () => {
        const totalNumber = ballotBox.quantityOfNumbers;

        const inputs: ReactElement[] = [];
        while (inputs.length < totalNumber) {
            const index = inputs.length;
            inputs.push(<InputNumber value="" key={`${index} + ${Math.random()}`} />);
        }
        setInputsNumber(inputs);
        setPressedNumbers([]);
        setName('branco');
        setImage('no-image.png');
        setGroup('branco');
    };

    const handleOrangeCommand = () => {
        const totalNumber = ballotBox.quantityOfNumbers;
        if (inputsNumber.length > 0) {
            const newInputs: ReactElement[] = [];
            const numbers = [...pressedNumbers];
            numbers.pop();
            while (newInputs.length < totalNumber) {
                const index = newInputs.length;
                newInputs.push(<InputNumber value={numbers[index]} key={`${index} + ${Math.random()}`} />);
            }
            setInputsNumber(newInputs);
            setPressedNumbers(numbers);
            setName('');
            setGroup('');
            setImage('no-image.png');
        }
    };

    return (
        <Style>
            <CommandButton color="white" value="branco" command={handleWhiteCommand} />
            <CommandButton color="orange" value="corrige" command={handleOrangeCommand} />
            <ConfirmButton value="confirma" />
        </Style>
    );
}
