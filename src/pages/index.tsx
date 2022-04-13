import BallotBox from '@components/BallotBox';
import { ReactElement } from 'react';

export default function Home(): ReactElement {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '10%',
            width: '100%',
            minWidth: '1448px',
            minHeight: '700px',
        }}
        >
            <div style={{ display: 'flex' }}>
                <BallotBox />
            </div>
        </div>
    );
}
