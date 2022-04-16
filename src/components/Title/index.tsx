import Style, { ITitleSizes } from './style';

interface Props extends ITitleSizes {
    value: string;
}

export default function Title({ value, size }: Props) {
    return (
        <Style size={size}>{ value }</Style>
    );
}
