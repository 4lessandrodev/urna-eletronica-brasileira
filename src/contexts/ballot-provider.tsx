import {
    ReactComponentElement,
    ReactElement,
    useMemo,
    useState,
} from 'react';
import BallotBoxContext, { ballotBoxDefault, IBallotContext } from './ballot-context';
import IBallotBox from '../model/ballot-box.interface';

interface Props {
	children: ReactComponentElement<any> | ReactComponentElement<any>[]
}

export default function BallotBoxProvider({ children }: Props) {
    const [ballotBox, setBallotBox] = useState<IBallotBox>(ballotBoxDefault);
    const [pressedNumbers, setPressedNumbers] = useState<number[]>([]);
    const [inputsNumber, setInputsNumber] = useState<ReactElement[]>([]);
    const [name, setName] = useState<string>('');
    const [group, setGroup] = useState<string>('');
    const [image, setImage] = useState<string>('no-image.png');

    const context = useMemo((): IBallotContext => ({
        ballotBox,
        setBallotBox,
        pressedNumbers,
        setPressedNumbers,
        inputsNumber,
        setInputsNumber,
        name,
        setName,
        group,
        setGroup,
        image,
        setImage,
    }), [
        ballotBox,
        pressedNumbers,
        inputsNumber,
        name,
        group,
        image,
    ]);

    return (
        <BallotBoxContext.Provider value={context}>
            {children}
        </BallotBoxContext.Provider>
    );
}
