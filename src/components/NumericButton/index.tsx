import Style from './style';

interface Props {
    value: number;
}

export default function NumericButton({ value }: Props) {
    return (
        <Style>{ value }</Style>
    );
}
