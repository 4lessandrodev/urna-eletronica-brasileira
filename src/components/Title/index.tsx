import Style from './style';

interface Props {
    value: string;
}

export default function Title({ value }: Props) {
    return (
        <Style>{ value }</Style>
    );
}
