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

    const context = useMemo((): IBallotContext => ({
        ballotBox,
        setBallotBox,
        pressedNumbers,
        setPressedNumbers,
        inputsNumber,
        setInputsNumber,
    }), [ballotBox, pressedNumbers, inputsNumber]);

    return (
        <BallotBoxContext.Provider value={context}>
            {children}
        </BallotBoxContext.Provider>
    );
}
