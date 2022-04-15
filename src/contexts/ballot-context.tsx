import {
    createContext, Dispatch, SetStateAction, useContext,
} from 'react';
import BallotBox from '@model/index';
import IBallotBox from '@model/ballot-box.interface';

export interface IBallotContext {
    ballotBox: IBallotBox;
    setBallotBox: Dispatch<SetStateAction<IBallotBox>>
}

export const ballotBoxDefault = new BallotBox({ candidates: [], votes: [] });

const BallotBoxContext = createContext<IBallotContext>({
    ballotBox: ballotBoxDefault,
    setBallotBox: () => ballotBoxDefault,
});

export function useBallotBox(): IBallotContext {
    return useContext(BallotBoxContext);
}

export default BallotBoxContext;
