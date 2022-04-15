import { ReactComponentElement, useMemo, useState } from 'react';
import BallotBoxContext, { ballotBoxDefault, IBallotContext } from '@contexts/ballot-context';
import IBallotBox from '@model/ballot-box.interface';

interface Props {
	children: ReactComponentElement<any> | ReactComponentElement<any>[]
}

export default function BallotBoxProvider({ children }: Props) {
    const [ballotBox, setBallotBox] = useState<IBallotBox>(ballotBoxDefault);
    const context = useMemo((): IBallotContext => ({ ballotBox, setBallotBox }), [ballotBox]);
    return (
        <BallotBoxContext.Provider value={context}>
            {children}
        </BallotBoxContext.Provider>
    );
}
