import NumericButton from '../NumericButton';
import Style from './style';

export default function NumericButtons() {
    return (
        <Style>
            <NumericButton value={1} />
            <NumericButton value={2} />
            <NumericButton value={3} />
            <NumericButton value={4} />
            <NumericButton value={5} />
            <NumericButton value={6} />
            <NumericButton value={7} />
            <NumericButton value={8} />
            <NumericButton value={9} />
            <NumericButton value={0} />
        </Style>
    );
}
