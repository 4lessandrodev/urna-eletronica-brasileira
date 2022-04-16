import Style from './style';

interface Props {
    value: number | '';
}

export default function InputNumber({ value }: Props) {
    return (
        <Style type="text" value={value} max={9} min={0} readOnly />
    );
}
