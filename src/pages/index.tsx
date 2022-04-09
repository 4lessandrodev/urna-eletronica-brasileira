import { ReactElement } from 'react';
import Test from '@components/Title';
import NumberButton from '@components/NumericButton';
import CommandButton from '@components/CommandButton';
import ConfirmButton from '@components/ConfirmButton';

export default function Home(): ReactElement {
    return (
        <div style={{ backgroundColor: '#44444', width: '100vw' }}>
            <Test value="this is a title" />
            <NumberButton value={1} />
            <CommandButton color="orange" value="corrige" />
            <CommandButton color="white" value="branco" />
            <ConfirmButton value="confirma" />
        </div>
    );
}
