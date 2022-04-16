import {
    createContext,
    Dispatch,
    ReactElement,
    SetStateAction,
    useContext,
} from 'react';
import BallotBox from '../model/index';
import IBallotBox from '../model/ballot-box.interface';

export interface IBallotContext {
    ballotBox: IBallotBox;
    setBallotBox: Dispatch<SetStateAction<IBallotBox>>;
    pressedNumbers: number[];
    setPressedNumbers: Dispatch<SetStateAction<number[]>>;
    inputsNumber: ReactElement[];
    setInputsNumber: Dispatch<SetStateAction<ReactElement[]>>;
    name: string,
    setName: Dispatch<SetStateAction<string>>,
    group: string,
    setGroup: Dispatch<SetStateAction<string>>,
    image: string,
    setImage: Dispatch<SetStateAction<string>>,
}

export const ballotBoxDefault = new BallotBox({ candidates: [], votes: [] });

const BallotBoxContext = createContext<IBallotContext>({
    ballotBox: ballotBoxDefault,
    setBallotBox: () => ballotBoxDefault,
    pressedNumbers: [],
    setPressedNumbers: () => {},
    inputsNumber: [],
    setInputsNumber: () => { },
    name: '',
    setName: () => { },
    group: '',
    setGroup: () => { },
    image: 'no-image.png',
    setImage: () => { },
});

export function useBallotBox(): IBallotContext {
    return useContext(BallotBoxContext);
}

export default BallotBoxContext;
