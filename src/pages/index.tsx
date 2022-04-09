import { ReactElement } from 'react';
import Test from '@components/Title';
import NumberButton from '@components/NumericButton';

export default function Home(): ReactElement {
    return (
        <div>
            <Test value="this is a title" />
            <NumberButton value={1} />
        </div>
    );
}
